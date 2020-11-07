import React from 'react';
import './Wave.css';
import Timer from 'react-compound-timer';

const Line = (props) => {
  let start = [props.startX,props.startY]
  let path = "M " + props.startX + " " + props.startY + " "
  let divider = 10+Math.floor(Math.random()*30)
  for (let i=1; i<props.width; i+=1) {
    let yNext = props.startY + Math.sin(props.startX+i/divider)*10

    path += "L " + (props.startX+i) + " " + yNext + " "
  }
  return <path d={path} stroke="#fff" strokeWidth={1+4*Math.random()} fill="transparent"/>;
};

class Wave extends React.Component {

  constructor(props) {
    super(props);
    this.width=740;
    this.height=1000;
    this.updatePeriod = 1000;
  }

  genWaves() {
    let entries = []
    for (let y=20; y<this.height; y+=30) {
      entries.push(<Line startX={0} startY={y} width={this.width} amplitude={10+10*Math.random()}/>)
    }
    return entries    
  }

  render() {
    return (
      <div className="Wave">
        <Timer initialTime={2} timeToUpdate={this.updatePeriod} startImmediately={true}>
          {({ start, resume, pause, stop, reset, timerState, getTime }) => (
            <React.Fragment>
          <svg height={this.height} width={this.width}>
            <rect width={this.width} height={this.height} fill="#14181b" />
            {this.genWaves()}
          </svg>
          <svg height={this.height} width={this.width}>
            <rect width={this.width} height={this.height} fill="#14181b" />
            {this.genWaves()}
          </svg>
          </React.Fragment>
          )}
        </Timer>
      </div>
      )
  }
}


export default Wave;