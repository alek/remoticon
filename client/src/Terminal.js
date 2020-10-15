import React from 'react';
import './Terminal.css';
import TickerBar from './components/TickerBar'

class CommandLine extends React.Component {

  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      "command": ""
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.setState({"command": ""})
    } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode === 32)) {
      this.setState({"command": this.state.command + e.key})
    } else if (e.keyCode === 8) {
      this.setState({"command": this.state.command.slice(0, -1)})
    }
  }

  onChange(e) {}

  render() {
    return (
      <div className="CommandLine">
      <input type="text" value={this.state.command} placeholder="Have a command for me?" onKeyDown={this.handleKeyDown} onChange={this.onChange} />
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
      .then(data =>  this.setState({ message: JSON.parse(data)["message"] }) );
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