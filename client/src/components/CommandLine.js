import React from 'react';

import { connect } from "react-redux";
import { addCommand } from "../redux/actions";

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
      this.props.addCommand(this.state.command);
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


export default connect(null, { addCommand } )(CommandLine);