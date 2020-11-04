import React from 'react';

import './Demo.css';

import Timer from 'react-compound-timer';
import ReactAudioPlayer from 'react-audio-player';

import song from '../data/variation1.mp3';
import LogoFactory from './LogoFactory'

class Demo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Demo">
        <Timer initialTime={50} startImmediately={true}>
          {({ start, resume, pause, stop, reset, timerState }) => (
          <React.Fragment>
              <div className="Counter">{Math.floor(Math.random()*100)}</div>
              <LogoFactory type={0} width={400} height={400} fill={"red"} key={Math.random()} animate={true}/>
              <ReactAudioPlayer
                src={song}
                autoPlay
                controls
              />
          </React.Fragment>
        )}
        </Timer>
      </div>
      )
  }
}


export default Demo;