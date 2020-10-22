const express = require('express');
const bodyParser = require('body-parser');
var mqtt = require('mqtt');

var QUEUE_SIZE = 10
var messages = require('fixed-size-queue').create(QUEUE_SIZE);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var client = mqtt.connect('mqtt://try:try@broker.shiftr.io', {
  clientId: 'javascript'
});

client.on('connect', function(){

  client.subscribe('/remoticon');
  setInterval(function(){
    client.publish('/remoticon', "starting in " + Math.floor((new Date("Nov 6 2020") - new Date())/1000) + "s");
  }, 1000);
});

client.on('message', function(topic, message) {
  messages.enqueue(message.toString())
  if (messages.getCount() >= QUEUE_SIZE-2) {
  	messages.dequeue();
  }
});

app.get('/api/mqtt', (req, res) => {
	if (messages.getCount() > 0) {
		res.send({ message: messages.last() });		
	} else {
		res.send({ message: "no_messages" });		
	}
  
});

app.listen(port, () => console.log(`Listening on port ${port}`));

