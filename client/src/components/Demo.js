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
    this.sequence = [0,10,5,6,1,1,4,8,2,1,11,7,1,8,5,10,0,3];
    this.updatePeriod = 3200;
  }

  getAnimationID(time) {
    let offset = Math.floor(time/(this.updatePeriod))
    return this.sequence[offset%this.sequence.length]
  }

  render() {
    return (
      <div className="Demo">
        <Timer initialTime={2} timeToUpdate={this.updatePeriod} startImmediately={true}>
          {({ start, resume, pause, stop, reset, timerState, getTime }) => (
          <React.Fragment>
          <div className="Animation">
            {this.state.play && 
              <React.Fragment>
                <LogoFactory type={this.getAnimationID(getTime())} width={800} height={800} fill={this.palette[Math.floor(this.palette.length*Math.random())]} key={Math.random()} animate={true}/>
                <LogoFactory type={this.getAnimationID(getTime())} width={800} height={800} fill={this.palette[Math.floor(this.palette.length*Math.random())]} key={Math.random()} animate={true}/>
              </React.Fragment>
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