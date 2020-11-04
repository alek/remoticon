import React from 'react';

import './Demo.css';

import Timer from 'react-compound-timer';
import ReactAudioPlayer from 'react-audio-player';

import song from '../data/variation1.mp3';
import LogoFactory from './LogoFactory'

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      play: false
    };
    this.palette = ["#e9d4c3", "#d2c2ac", "#aa8805", "#99642c", "#d56231"];
  }

  render() {
    return (
      <div className="Demo">
        <Timer initialTime={50} startImmediately={true}>
          {({ start, resume, pause, stop, reset, timerState }) => (
          <React.Fragment>
          <div className="Animation">
            {this.state.play && 
              <LogoFactory type={Math.floor(Math.random()*12)} width={800} height={800} fill={this.palette[Math.floor(this.palette.length*Math.random())]} key={Math.random()} animate={true}/>
            }
          </div>
          <div class="Player">          
              <ReactAudioPlayer
                src={song}
                controls
                loop
                onPlay={() => this.setState({play: true})}
                onPause={() => this.setState({play: false})}
              />
          </div>
          </React.Fragment>
        )}
        </Timer>
      </div>
      )
  }
}


export default Demo;