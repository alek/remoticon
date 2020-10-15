import React from 'react';
import './Wayfinder.css';
import TickerBar from './components/TickerBar'


class CommandLine extends React.Component {

  render() {
    return (
      <div className="CommandLine">
      <textarea id="w3review" name="w3review" rows="4" cols="50">
      </textarea>
      </div>
      )
  }
}

class Terminal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.timer = this.timer.bind(this)
    const interval = setInterval(this.timer, 1000);
  }

  getText() {
    if (this.state.message) {
      return this.state.message;
    } else {
      return "Hackaday Remoticon // November 6 - November 8 2020. Keep an eye on this website for more info. Use MQTT broker.shiftr.io/remoticon to broadcast here."
    }
  }

  timer() {
    fetch("/api/mqtt")
      .then(response => response.text())
      .then(data =>  this.setState({ message: data["message"] }) );
  }

  render() {
    return (
      <div className="Wayfinder-container">
        <TickerBar getText={() => this.getText()}/>
        <CommandLine />
      </div>
      )
  }

}

export default Terminal;