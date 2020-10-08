import React from 'react';

// function randomPolygon(idx, frontColor) {
//   let img = []
  
//   let choice = Math.floor(Math.random()*8);
//   let bgColor = "#111212";

//   let width = 120;
//   let height = 120;

//   switch (choice) {
//     case 0:
//       for (let i=0; i<10; i++) {
//         img.push(<line x1={2+i*width/10} y1="0" x2={2+i*width/10} y2={height} stroke={frontColor} strokeWidth="2" />)
//       }      
//       break;
//     case 1:
//       for (let i=0; i<8; i++) {
//         img.push(<line x1="0" y1={4 + i*width/8} x2={width} y2={4 + i*width/8} stroke={frontColor} strokeWidth="4" />)
//       }      
//       break;
//     case 3:
//       img.push(<circle cx={width/2} cy={height/2} r={width/2} stroke={frontColor} strokeWidth="0" fill={frontColor}/>)
//       img.push(<circle cx={width/2} cy={height/2} r={height*0.32} stroke={bgColor} strokeWidth="0" fill={bgColor}/>)
//       break;
//     case 4:
//       img.push(<line x1="0" y1="0" x2={width} y2={height} stroke={frontColor} strokeWidth="40" />)
//       break;
//     case 5:
//       img.push(<circle cx="0" cy={width} r={height/2} stroke={frontColor} strokeWidth="0" fill={frontColor}/>)
//       img.push(<circle cx={width/2} cy={height/2} r={height/2} stroke={frontColor} strokeWidth="0" fill={frontColor}/>)
//       break;
//     case 6:
//       img.push(<circle cx="0" cy={width} r={height} stroke={frontColor} strokeWidth="0" fill={frontColor}/>)
//       img.push(<circle cx="0" cy={width} r={height/2} stroke={frontColor} strokeWidth="0" fill={bgColor}/>)
//       break;
//     case 7:
//       for (let i=0; i<8; i++) {
//         for (let j=0; j<8; j++) {
//           img.push(<circle cx={width*0.06+i*width/8} cy={height*0.06+j*height/8} r="2" stroke={frontColor} strokeWidth="0" fill={frontColor}/>)
//         }
//       }
//       break;
//     default:
//       for (let i=0; i<20; i++) {
//         img.push(<line x1="0" y1={-height/2+i*15} x2={width} y2={i*15} stroke={frontColor} strokeWidth="4" />)
//       }
//   }
//   return (
//     <svg width={width} height={height} key={"polygon-" + idx}>
//       {img}
//     </svg>
//     )
// }

function getVectorElements(type, width, height, frontColor, bgColor) {
  let img = []
    switch (type) {
    case 0:
      for (let i=0; i<10; i++) {
        img.push(<line x1={2+i*width/10} y1="0" x2={2+i*width/10} y2={height} stroke={frontColor} strokeWidth="2" />)
      }      
      break;
    case 1:
      for (let i=0; i<8; i++) {
        img.push(<line x1="0" y1={4 + i*width/8} x2={width} y2={4 + i*width/8} stroke={frontColor} strokeWidth="4" key={Math.random()} />)
      }      
      break;
    case 3:
      img.push(<circle cx={width/2} cy={height/2} r={width/2} stroke={frontColor} strokeWidth="0" fill={frontColor}/>)
      img.push(<circle cx={width/2} cy={height/2} r={height*0.32} stroke={bgColor} strokeWidth="0" fill={bgColor}/>)
      break;
    case 4:
      img.push(<line x1="0" y1="0" x2={width} y2={height} stroke={frontColor} strokeWidth="40" />)
      break;
    case 5:
      img.push(<circle cx="0" cy={width} r={height/2} stroke={frontColor} strokeWidth="0" fill={frontColor}/>)
      img.push(<circle cx={width/2} cy={height/2} r={height/2} stroke={frontColor} strokeWidth="0" fill={frontColor}/>)
      break;
    case 6:
      img.push(<circle cx="0" cy={width} r={height} stroke={frontColor} strokeWidth="0" fill={frontColor}/>)
      img.push(<circle cx="0" cy={width} r={height/2} stroke={frontColor} strokeWidth="0" fill={bgColor}/>)
      break;
    case 7:
      for (let i=0; i<8; i++) {
        for (let j=0; j<8; j++) {
          img.push(<circle cx={width*0.06+i*width/8} cy={height*0.06+j*height/8} r="2" stroke={frontColor} strokeWidth="0" fill={frontColor}/>)
        }
      }
      break;
    default:
      for (let i=0; i<20; i++) {
        img.push(<line x1="0" y1={-height/2+i*15} x2={width} y2={i*15} stroke={frontColor} strokeWidth="4" />)
      }
  }
  return img

}

class VectorLogo extends React.Component {

  constructor(props) {
    super(props)
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.state = {
      type: props.type,
      width: props.width,
      height: props.height,
      idx: props.idx,
      fill: props.fill,
      strokeWidth: 2,
      animate: false
    }
  }

  mouseEnter() {
      this.setState({
        animate: true
      })
  }

  mouseLeave() {
      this.setState({
        animate: false
      })
  }

  render(img) {
    return (
      <svg width={this.props.width} height={this.props.height} key={"logo-" + this.idx} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}  key={"img-" + Math.random()}>{img}</svg>
      )    
  }

}

// vertical lines
class Logo1 extends VectorLogo {

  render() {
    let img = []
    let props = this.state
  
    for (let i=0; i<10; i++) {
      if (this.state.animate) {
        img.push(
          <line x1={2+i*props.width/10} y1="0" x2={2+i*props.width/10} y2={props.height} stroke={props.fill} strokeWidth={props.strokeWidth}>
          <animate attributeName="stroke-width" values="1;5;1" dur="3s" repeatCount="indefinite" />
          </line>)
      } else {
       img.push(<line x1={2+i*props.width/10} y1="0" x2={2+i*props.width/10} y2={props.height} stroke={props.fill} strokeWidth={props.strokeWidth} />)
      }
    } 

    return super.render(img)

  }

}

// horizontal lines
class Logo2 extends VectorLogo {

  render() {
    let img = []
    let props = this.state
  
    for (let i=0; i<10; i++) {
      if (this.state.animate) {
        img.push(
          <line x1={2+i*props.width/10} y1="0" x2={2+i*props.width/5} y2={props.height} stroke={props.fill} strokeWidth={props.strokeWidth}>
          <animate attributeName="stroke-width" values="1;5;1" dur="3s" repeatCount="indefinite" />
          </line>)
      } else {
       img.push(<line x1={2+i*props.width/10} y1="0" x2={2+i*props.width/5} y2={props.height} stroke={props.fill} strokeWidth={props.strokeWidth} />)
      }
    } 

    return super.render(img)

  }

}



export class LogoFactory extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  getLogo(idx) {
      switch(idx) {
        case 1: return  <Logo1 width={100} height={100} fill="#fff"/>;
        default: return <Logo2 width={100} height={100} fill="#fff"/>;
      }
  } 

  render() {
    return (
      <div >
      { this.getLogo(this.props.type) }
      </div>
    )

  }
}

export default LogoFactory;