import React from 'react';
import './Wayfinder.css';
// import VectorLogo from './VectorLogo';
import LogoFactory from './LogoFactory'

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.links = {
      "live": "#",
      "talks": "#talks",
      "about": "#about",
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
      if (key === this.state["selected"]) {
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

function WayfinderHeader() {
  return (
      <div className="Wayfinder-header">
        <h1>Hackaday <strong>Remoticon 2020</strong></h1>
        <Nav />
      </div>
    )
}

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

function RoomEntry(props) {
  return (
    <div key={"cell-" + props.i} className="RoomName">
                        <h2 style={{ color: props.fill }}>{props.title}</h2>
                        <h4>{props.participants} participants</h4>
                        <RoomOccupancy total={20+Math.floor(20*Math.random())} active={props.participants} id={props.i} color={props.fill}/>
                        </div>
  )
}


class WayfinderGrid extends React.Component {

  constructor(props) {
    super(props);
    this.rooms = ["Remoticon Central", 
                  "Live Breaking into Encrypted 3D Printer Firmware", 
                  "Soldering, Nothing To Be Afraid Of!",
                  "Introduction to Modular Synthesis using VCV Rack",
                  "Prototyping to the Max",
                  "PCB Reverse Engineering",
                  "KiCad to Blender > Photorealistic PCB renders",
                  "Tiny ML",
                  "Crowd-Controlled Robots",
                  "Basics of RF Emissions Debugging",
                  "Introduction to Firmware Reverse Engineering",
                  "The Hackers Guide to Hardware Debugging",
                  "Remoticon: Learn How to Hack a Car",
                  "MachineChat - JEDI One - A Universal Sensor Hub",
                  "How to 3D Print onto Fabric",
                  "Give Pigweed a Whirl",
                  "Radi-uhoh: What Is This SDR Thing and How Do I Use",
                  "Finding Sound and Making Microphones",
                  "Creative Code Experiments",
                  "SMD Challenge",
                  "Making Glowy Origami",
                  "Circuit Sculpture Workshop",
                  "The Mechanics of FEA"]

  }

  mouseEnter(foo) {
    console.log(foo.currentTarget)
    console.log(Math.random())
  }

  render() {
    let cells = []
    let palette = ["#e9d4c3", "#d2c2ac", "#aa8805", "#99642c", "#d56231"]
    // let palette = ["#D16061", "#38D9A0", "#5993dd", "#D78AD8"]
    let frontColor =  palette[Math.floor(Math.random()*palette.length)]

    for (var i=0; i<42; i++) {
      if (i%2 == 0) {
        frontColor = palette[i/2%palette.length]
        cells.push(<LogoFactory type={i/2} width={100} height={100} fill={frontColor}/>)
      } else {
        cells.push(<RoomEntry i={1} fill={frontColor} title={this.rooms[Math.floor(i/2)]} participants={10+Math.floor(10*Math.random())} />)
      }
    }


    return (
      <div className="Wayfinder-grid" onMouseEnter={this.mouseEnter}>
        {cells}        
      </div>
      )
  }

}


class CommandLine extends React.Component {

  render() {
    return (
      <div className="input-control">
      <textarea id="w3review" name="w3review" rows="4" cols="50">
      </textarea>
      </div>
      )
  }
}


function Wayfinder() {
  return (
    <div className="Wayfinder-container">
      <WayfinderHeader />
      <WayfinderGrid />
      <CommandLine />
    </div>
    )
}

export default Wayfinder;
