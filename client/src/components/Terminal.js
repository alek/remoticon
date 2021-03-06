import React from 'react';
import './Terminal.css';
import TickerBar from './TickerBar'
import CommandLine from './CommandLine'
import { useContext } from 'react';

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
      return "Hackaday Remoticon // November 6 - November 8 2020. Use MQTT broker.shiftr.io/remoticon to broadcast here."
    }
  }

  timer() {
    fetch("/api/mqtt")
      .then(response => response.text())
      .then(data =>  this.setState({ message: JSON.parse(data)["message"] }) )
      .catch(error => { });
      // .catch(error => { console.error('Error:', "can't fetch mqtt content"); });
  }

  render() {
    return (
        <div className="Wayfinder-container">
          {this.props.ticker && <TickerBar getText={() => this.getText()}/> }
          <CommandLine />
        </div>
      )
  }

}

export default Terminal;
