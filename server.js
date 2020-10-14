const express = require('express');
const bodyParser = require('body-parser');
var mqtt = require('mqtt');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var client = mqtt.connect('mqtt://try:try@broker.shiftr.io', {
  clientId: 'javascript'
});

client.on('connect', function(){
  console.log('client has connected!');

  client.subscribe('/boiler80/waterTemp');

  setInterval(function(){
    client.publish('/hello', Math.random()+"");
  }, 1000);
});

client.on('message', function(topic, message) {
  console.log('new message:', topic, message.toString());
});

app.get('/api/mqtt', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

