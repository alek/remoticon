import React from 'react';


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
      animate: false,
      background: "#111212"
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
class Logo0 extends VectorLogo {

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

// vertical lines
class Logo1 extends VectorLogo {

  render() {
    let img = []
    let props = this.state

     for (let i=0; i<8; i++) {
        if (this.state.animate) {
        } else {
          img.push(<line x1="0" y1={4 + i*props.width/8} x2={props.width} y2={4 + i*props.width/8} stroke={props.fill} strokeWidth="4" key={Math.random()} />)
        }
      }      

    return super.render(img)
  }
}

class Logo2 extends VectorLogo {

  render() {
    let img = []
    let props = this.state

    // if (this.state.animate) {
      img.push(<circle cx={props.width/2} cy={props.height/2} r={props.width/2} stroke={props.fill} strokeWidth="0" fill={props.fill}/>)
      img.push(<circle cx={props.width/2} cy={props.height/2} r={props.height*0.32} stroke={props.background} strokeWidth="0" fill={props.background}/>)
    // }

    return super.render(img)
  }
}


class Logo3 extends VectorLogo {

  render() {
    let img = []
    let props = this.state

    img.push(<line x1="0" y1="0" x2={props.width} y2={props.height} stroke={props.fill} strokeWidth="40" />)

    return super.render(img)
  }
}

class Logo4 extends VectorLogo {

  render() {
    let img = []
    let props = this.state

    img.push(<circle cx="0" cy={props.width} r={props.height/2} stroke={props.fill} strokeWidth="0" fill={props.fill}/>)
    img.push(<circle cx={props.width/2} cy={props.height/2} r={props.height/2} stroke={props.fill} strokeWidth="0" fill={props.fill}/>)


    return super.render(img)
  }
}

class Logo5 extends VectorLogo {

  render() {
    let img = []
    let props = this.state

    img.push(<circle cx="0" cy={props.width} r={props.height} stroke={props.fill} strokeWidth="0" fill={props.fill}/>)
    img.push(<circle cx="0" cy={props.width} r={props.height/2} stroke={props.fill} strokeWidth="0" fill={props.background}/>)

    return super.render(img)
  }
}

class Logo6 extends VectorLogo {

  render() {
    let img = []
    let props = this.state

      for (let i=0; i<8; i++) {
        for (let j=0; j<8; j++) {
          img.push(<circle cx={props.width*0.06+i*props.width/8} cy={props.height*0.06+j*props.height/8} r="2" stroke={props.fill} strokeWidth="0" fill={props.fill}/>)
        }
      }

    return super.render(img)
  }
}

class Logo7 extends VectorLogo {

  render() {
    let img = []
    let props = this.state

    for (let i=0; i<20; i++) {
      img.push(<line x1="0" y1={-props.height/2+i*15} x2={props.width} y2={i*15} stroke={props.fill} strokeWidth="4" />)
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
        case 0: return  <Logo0 width={100} height={100} fill="#fff"/>;
        case 1: return  <Logo1 width={100} height={100} fill="#fff"/>;
        case 2: return  <Logo2 width={100} height={100} fill="#fff"/>;
        case 3: return  <Logo3 width={100} height={100} fill="#fff"/>;
        case 4: return  <Logo4 width={100} height={100} fill="#fff"/>;
        case 5: return  <Logo5 width={100} height={100} fill="#fff"/>;
        case 6: return  <Logo6 width={100} height={100} fill="#fff"/>;
        case 7: return  <Logo7 width={100} height={100} fill="#fff"/>;
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