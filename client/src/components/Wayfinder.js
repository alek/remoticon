import React from 'react';
import './Wayfinder.css';
import LogoFactory from './LogoFactory'

import { connect } from "react-redux";
import { getCommandsState } from "../redux/selectors";

// top-level header nav
class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.links = {
      "live": "#",
      "about": "https://hackaday.com/tag/2020-hackaday-remoticon/",
      "tickets": "https://www.eventbrite.com/e/remoticon-tickets-115886905855"
    }
    this.state = {
      selected: "live"
    }
  }

  clickHandler(key) {
    this.setState({
      selected: key
    })
  }

  render() {
    const entries = []    
    for (const [key, value] of Object.entries(this.links)) {
      let className = ""
      if (key === this.state.selected) {
        className = "nav-selected"
      }
      entries.push(<li key={key}><a href={value} className={className} onClick={() => this.clickHandler(key)}>{key}</a></li>)
    }
    return (
      <ul className="menu-nav">
        {entries}
      </ul>
      )
  }
}

// main event header
function WayfinderHeader() {
  return (
      <div className="Wayfinder-header">
        <h1>Hackaday <strong>Remoticon 2020</strong></h1>
        <Nav />
      </div>
    )
}

// Wayfinder grid navigation
class WayfinderNav extends React.Component {
  
  constructor(props) {
    super(props);
    this.links = ["Workshops", "Keynotes", "Rooms", "More"]
    this.state = { selected: "Workshops" }
    this.onClick = props.onClick
  }

  clickHandler(key) {
    this.setState({
      selected: key
    })
    this.onClick(key)
  }

  render() {
    const entries = []
    for (let i=0; i<this.links.length; i++) {
      let className = "Wayfinder-nav-entry";
      if (this.links[i] === this.state.selected) {
        className = "Wayfinder-nav-selected";
      }
      entries.push(<div className={className} onClick={() => this.clickHandler(this.links[i])}>{this.links[i]}</div>)
    }
    return (
      <div className="Wayfinder-nav">
      {entries}
      </div>
      )
  }
}

// room occupancy section
function RoomOccupancy(props) {
  let entries = []  
  for (var i=0; i<props.total; i++) {
    let styleEntry = { backgroundColor: "none", border: "1px solid #fff" }
    let className = "EntryFree"
    if (i<props.active/2) {
      className = "EntryOccupied"
      styleEntry = { backgroundColor: props.color, border: "1px solid " + props.color }
    }
    entries.push(<div className={className} key={"dot-" + props.id + "-" + i} style={styleEntry}></div>)
  }
  return (
    <div className="RoomOccupancy">
      {entries}
    </div>
  )
}

// chatroom entry
class RoomEntry extends React.Component {

  constructor(props) {
    super(props);
    this.title = props.title;
    this.url = props.url;
    this.idx = props.i;
    this.participants = props.participants;
    this.fill = props.fill;
    this.onMouseEnter = props.onMouseEnter
    this.onMouseLeave = props.onMouseLeave
  }

  render() {
    return (
      <a href={this.url}>
      <div key={"cell-" + this.idx} className="RoomName" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                          <h2 style={{ color: this.fill }}>{this.title}</h2>
                          <h4>{this.participants} participants</h4>
                          <RoomOccupancy total={30} active={this.participants} id={this.idx} color={this.fill}/>
                          </div>
                          </a>
    )
  }
}


// master grid state container
class WayfinderGrid extends React.Component {

  constructor(props) {
    super(props);
    this.rooms = this.getRooms(props.type)
    this.state = {
      animate: Array(this.rooms.length).fill(false)
    }
  }

  getRooms(type) {
    if (type === "Workshops") {
        return [["Live Breaking into Encrypted 3D Printer Firmware", "https://hackaday.io/project/175071-remoticon-breaking-into-3d-printer-firmware"], 
                  ["Soldering, Nothing To Be Afraid Of!", "https://hackaday.io/project/175072-remoticon-soldering-nothing-to-be-afraid-of"],
                  ["Introduction to Modular Synthesis using VCV Rack", "https://hackaday.io/project/175074-introduction-to-modular-synthesis-using-vcv-rack"],
                  ["Prototyping to the Max", "https://hackaday.io/project/175075-remoticon-prototyping-to-the-max"],
                  ["PCB Reverse Engineering", "https://hackaday.io/project/175076-remoticon-pcb-reverse-engineering"],
                  ["KiCad to Blender > Photorealistic PCB renders", "https://hackaday.io/project/175076-remoticon-pcb-reverse-engineering"],
                  ["Tiny ML", "https://hackaday.io/project/175078-remoticon-tiny-ml"],
                  ["Crowd-Controlled Robots", "https://hackaday.io/project/175079-remoticon-crowd-controlled-robots"],
                  ["Basics of RF Emissions Debugging", "https://hackaday.io/project/175080-remoticon-basics-of-rf-emissions-debugging"],
                  ["Introduction to Firmware Reverse Engineering", "https://hackaday.io/project/175081-remoticon-intro-to-firmware-reverse-engineering"],
                  ["The Hackers Guide to Hardware Debugging", "https://hackaday.io/project/175082-remoticon-the-hackers-guide-to-hardware-debugging"],
                  ["Remoticon: Learn How to Hack a Car", "https://hackaday.io/project/175126-learn-how-to-hack-a-car-remoticon-workshop"],
                  ["MachineChat - JEDI One - A Universal Sensor Hub", "https://hackaday.io/project/175085-remoticon-machinechat-a-universal-sensor-hub"],
                  ["How to 3D Print onto Fabric", "https://hackaday.io/project/175086-remoticon-how-to-3d-print-onto-fabric"],
                  ["Give Pigweed a Whirl", "https://hackaday.io/project/175167-remoticon-give-pigweed-a-whirl"],
                  ["Radi-uhoh: What Is This SDR Thing and How Do I Use", "https://hackaday.io/project/175168-radi-uhoh-what-is-this-sdr-thing-and-how-do-i-use"],
                  ["Finding Sound and Making Microphones", "https://hackaday.io/project/175169-remoticon-finding-sound-and-making-microphones"],
                  ["Creative Code Experiments", "https://hackaday.io/project/175170-remoticon-creative-code-experiments"],
                  ["SMD Challenge", "https://hackaday.io/project/175171-remoticon-smd-challenge"],
                  ["Making Glowy Origami", "https://hackaday.io/project/175172-remoticon-making-glowy-origami"],
                  ["Circuit Sculpture Workshop", "https://hackaday.io/project/175173-remoticon-circuit-sculpture-workshop"],
                  ["The Mechanics of FEA", "https://hackaday.io/project/175174-remoticon-the-mechanics-of-fea"]]
      } else if (type === "Keynotes") {
          return [["Opening Ceremonies",""], ["Keynote Talk 1",""], ["Keynote Talk 2",""], ["Closing Ceremonies",""]]
      } else if (type === "Rooms") {
          return [["RBG",""], ["Caturday",""], ["Replicant",""], ["Magic Smoke Lounge",""], ["Demo Room",""], ["Mr. Robot",""]]
      } else {
          return [["Dungeon1",""], ["Dungeon2",""], ["Dungeon3",""]]
      }
  }

  render() {


    const rooms = this.getRooms(this.props.type)

    let cells = []
    let palette = ["#e9d4c3", "#d2c2ac", "#aa8805", "#99642c", "#d56231"]
    let frontColor =  palette[Math.floor(Math.random()*palette.length)]

    for (let i=0; i<rooms.length*2; i++) {
      if (i%2 === 0) {
        frontColor = palette[i/2%palette.length]
        cells.push(<LogoFactory type={i/2} width={100} height={100} fill={frontColor} key={Math.random()} animate={this.state.animate[i/2]}/>)
      } else {
        cells.push(<RoomEntry 
                    i={i} 
                    fill={frontColor} 
                    title={rooms[Math.floor(i/2)][0]} 
                    url={rooms[Math.floor(i/2)][1]} 
                    participants={30+Math.floor(10*Math.random())} 
                    logo={cells.slice(-1)[0]} 
                    key={Math.random()}
                    onMouseEnter={() => { this.setState({animate: this.state.animate.map((val,idx) => {return (Math.floor(i/2)===idx) ? true : false } )})}} 
                    onMouseLeave={() => { this.setState({animate: this.state.animate.map((val,idx) => {return false } )})}} 
                    />)
      }
    }

    return (
      <div className="Wayfinder-grid">
        {cells}        
      </div>
      )
  }

}


class Wayfinder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: "Workshops"
    }
  }

  render() {
    // todo: fork behavior based on active command
    let command = this.props.state.commands
    console.log(command)
    return (
      <div className="Wayfinder-container">
        <WayfinderHeader />
        <WayfinderNav onClick={(val) => this.setState({active: val})}/>
        <WayfinderGrid type={this.state.active} />        
      </div>
      )
  }
}


// export default Wayfinder;

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(Wayfinder);