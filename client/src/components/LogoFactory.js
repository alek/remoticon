import React from 'react';

class VectorLogo extends React.Component {

  constructor(props) {
    super(props)
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.type = props.type;
    this.width = props.width;
    this.height = props.height;
    this.idx = props.idx;
    this.fill = props.fill;
    this.background = "#111212";
    this.strokeWidth = 2;
    this.state = {
      animate: props.animate,
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
      <svg width={this.props.width} height={this.props.height} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}  key={"logo-" + this.state.idx}>{img}</svg>
      )    
  }

}

// vertical lines
class Logo0 extends VectorLogo {

  render() {
    let img = []
    for (let i=0; i<10; i++) {
      if (this.state.animate) {
        img.push(
          <line x1={2+i*this.width/10} y1="0" x2={2+i*this.width/10} y2={this.height} stroke={this.fill} strokeWidth={this.strokeWidth} key={"logo-"+this.idx+"-line-"+i}>
          <animate attributeName="stroke-width" values="1;8;1" dur="3s" repeatCount="indefinite" />
          </line>)
      } else {
       img.push(<line x1={2+i*this.width/10} y1="0" x2={2+i*this.width/10} y2={this.height} stroke={this.fill} strokeWidth={this.strokeWidth} key={"logo-"+this.idx+"-line-"+i} />)
      }
    } 

    return super.render(img)

  }

}

// horizontal lines
class Logo1 extends VectorLogo {

  render() {
    let img = []
     for (let i=0; i<8; i++) {
        if (this.state.animate) {
          img.push(<line x1="0" y1={4 + i*this.width/8} x2={this.width} y2={4 + i*this.width/8} stroke={this.fill} strokeWidth="4" key={Math.random()}>
                    <animate attributeName="stroke-width" values="1;10;1" dur="3s" repeatCount="indefinite" />
                    </line>)
        } else {
          img.push(<line x1="0" y1={4 + i*this.width/8} x2={this.width} y2={4 + i*this.width/8} stroke={this.fill} strokeWidth="4" key={Math.random()} />)
        }
      }      

    return super.render(img)
  }
}

// hollow circle
class Logo2 extends VectorLogo {

  render() {
    let img = []
    if (this.state.animate) {
      img.push(<circle cx={this.width/2} cy={this.height/2} r={this.width/2} stroke={this.fill} strokeWidth="0" fill={this.fill} key={Math.random()}>
                 <animate attributeName="r" values={this.width*0.3 + ";" + this.width/2 + ";" + this.width*0.3} dur="3s" repeatCount="indefinite" />
                </circle>)
      img.push(<circle cx={this.width/2} cy={this.height/2} r={this.height*0.32} stroke={this.background} strokeWidth="0" fill={this.background} key={Math.random()}/>)
    } else {
      img.push(<circle cx={this.width/2} cy={this.height/2} r={this.width/2} stroke={this.fill} strokeWidth="0" fill={this.fill} key={Math.random()}/>)
      img.push(<circle cx={this.width/2} cy={this.height/2} r={this.height*0.32} stroke={this.background} strokeWidth="0" fill={this.background} key={Math.random()}/>)
    }

    return super.render(img)
  }
}


// left to right dash
class Logo3 extends VectorLogo {

  render() {
    let img = []
    if (this.state.animate) {
      img.push(<line x1="0" y1="0" x2={this.width} y2={this.height} stroke={this.fill} strokeWidth="40" key={Math.random()}>
                <animate attributeName="stroke-width" values={"0;40;0"} dur="7s" repeatCount="indefinite" />
                </line>) 
    } else {
      img.push(<line x1="0" y1="0" x2={this.width} y2={this.height} stroke={this.fill} strokeWidth="40" key={Math.random()}/>)  
    }

    return super.render(img)
  }
}

// speech cloud
class Logo4 extends VectorLogo {

  render() {
    let img = []
    let maxR = this.width/2
    if (this.state.animate) {
      img.push(<circle cx="0" cy={this.width} r={this.height/2} stroke={this.fill} strokeWidth="0" fill={this.fill} key={Math.random()}>
              <animate attributeName="r" values={"0;" + maxR + ";0"} dur="7s" repeatCount="indefinite" />
                </circle>)
      img.push(<circle cx={this.width/2} cy={this.height/2} r={this.height/2} stroke={this.fill} strokeWidth="0" fill={this.fill} key={Math.random()}>
              <animate attributeName="r" values={"0;" + maxR + ";0"} dur="5s" repeatCount="indefinite" />
               </circle>)

    } else {
      img.push(<circle cx="0" cy={this.width} r={this.height/2} stroke={this.fill} strokeWidth="0" fill={this.fill} key={Math.random()}/>)
      img.push(<circle cx={this.width/2} cy={this.height/2} r={this.height/2} stroke={this.fill} strokeWidth="0" fill={this.fill} key={Math.random()}/>)
    }

    return super.render(img)
  }
}

// lower left quarter circle
class Logo5 extends VectorLogo {

  render() {
    let img = []
    if (this.state.animate) {
      img.push(<circle cx="0" cy={this.width} r={this.height} stroke={this.fill} strokeWidth="0" fill={this.fill} key={Math.random()}>
                <animate attributeName="r" values={this.width/2 + ";" + this.width + ";0"} dur="8s" repeatCount="indefinite" />
                </circle>)
      img.push(<circle cx="0" cy={this.width} r={this.height/2} stroke={this.fill} strokeWidth="0" fill={this.background} key={Math.random()}/>)
    } else {
      img.push(<circle cx="0" cy={this.width} r={this.height} stroke={this.fill} strokeWidth="0" fill={this.fill} key={Math.random()}/>)
      img.push(<circle cx="0" cy={this.width} r={this.height/2} stroke={this.fill} strokeWidth="0" fill={this.background} key={Math.random()}/>)
    }

    return super.render(img)
  }
}

// dot pattern
class Logo6 extends VectorLogo {

  render() {
    let img = []
      for (let i=0; i<8; i++) {
        for (let j=0; j<8; j++) {
          if (this.state.animate) {
            img.push(<circle cx={this.width*0.06+i*this.width/8} cy={this.height*0.06+j*this.height/8} r="2" stroke={this.fill} strokeWidth="0" fill={this.fill} key={Math.random()}>
                    <animate attributeName="r" values={"0;3;0"} dur={1 + Math.ceil(Math.random()*5) + "s"} repeatCount="indefinite" />
                    </circle>)
          } else {
            img.push(<circle cx={this.width*0.06+i*this.width/8} cy={this.height*0.06+j*this.height/8} r="2" stroke={this.fill} strokeWidth="0" fill={this.fill} key={Math.random()}/>)
          }
        }
      }

    return super.render(img)
  }
}

// crosshatch pattern
class Logo7 extends VectorLogo {

  render() {
    let img = []
    let delta = 0.15*this.width;
    for (let i=0; i<20; i++) {
      if (this.state.animate) {
        img.push(<line x1="0" y1={-this.height/2+i*delta} x2={this.width} y2={i*delta} stroke={this.fill} strokeWidth="4" opacity="1.0" key={Math.random()}>
                  <animate attributeName="opacity" values={"0;1;0"} dur={1 + Math.ceil(Math.random()*5) + "s"} repeatCount="indefinite" />
                  </line>)
      } else {
        img.push(<line x1="0" y1={-this.height/2+i*15} x2={this.width} y2={i*15} stroke={this.fill} strokeWidth="4" key={Math.random()}/>)
      }
    }

    return super.render(img)
  }
}


// hollow rectangle
class Logo8 extends VectorLogo {

  render() {
    let img = []
    if (this.state.animate) {
      img.push(<rect x={0} y={0} width={this.width} height={this.width} stroke={this.fill} strokeWidth="0" fill={this.fill} key={Math.random()}/>)
      img.push(<rect x={0} y={0} width={this.width} height={this.width} stroke={this.fill} strokeWidth="0" fill={this.background} key={Math.random()}>
                <animate attributeName="x" values={0 + ";" + this.width + ";" + 0} dur="3s" repeatCount="indefinite" />
               </rect>)
      img.push(<rect x={this.width*0.2} y={this.height*0.2} width={this.width*0.6} height={this.width*0.6} stroke={this.fill} strokeWidth="0" fill={this.background} key={Math.random()}>
                <animate attributeName="x" values={this.width + ";" + 0 + ";" + this.width} dur="2s" repeatCount="indefinite" />
              </rect>)

    } else {
      img.push(<rect x={0} y={0} width={this.width} height={this.width} stroke={this.fill} strokeWidth="0" fill={this.fill} key={Math.random()}/>)
      img.push(<rect x={this.width*0.2} y={this.height*0.2} width={this.width*0.6} height={this.width*0.6} stroke={this.fill} strokeWidth="0" fill={this.background} key={Math.random()}/>)
    }

    return super.render(img)
  }
}


// X sign
class Logo9 extends VectorLogo {

  render() {
    let img = []
    if (this.state.animate) {
      img.push(<rect x={0} y={this.width*0.4} width={this.width} height={this.width*0.2} stroke={this.fill} strokeWidth="0" rx="5" fill={this.fill} 
                     transform={"rotate(45," + this.width/2 + "," + this.width/2 + ")"} key={Math.random()}>
                     <animateTransform attributeName="transform" attributeType="XML" type="rotate" 
                     from={"0," + this.width/2 + "," + this.width/2} to={"360," + this.width/2 + "," + this.width/2} dur="2s" repeatCount="indefinite"/>
                     </rect>)
      img.push(<rect x={0} y={this.width*0.4} width={this.width} height={this.width*0.2} stroke={this.fill} strokeWidth="0" rx="5" fill={this.fill} 
                     transform={"rotate(-45," + this.width/2 + "," + this.width/2 + ")"} key={Math.random()}>
                     <animateTransform attributeName="transform" attributeType="XML" type="rotate" 
                     from={"360," + this.width/2 + "," + this.width/2} to={"0," + this.width/2 + "," + this.width/2} dur="7s" repeatCount="indefinite"/>
                     </rect>)
    } else {
      img.push(<rect x={0} y={this.width*0.4} width={this.width} height={this.width*0.2} stroke={this.fill} strokeWidth="0" rx="5" fill={this.fill} 
                     transform={"rotate(45," + this.width/2 + "," + this.width/2 + ")"} key={Math.random()}/>)
      img.push(<rect x={0} y={this.width*0.4} width={this.width} height={this.width*0.2} stroke={this.fill} strokeWidth="0" rx="5" fill={this.fill} 
                     transform={"rotate(-45," + this.width/2 + "," + this.width/2 + ")"} key={Math.random()}/>)

    }

    return super.render(img)
  }
}

// hollow rectangle
class Logo10 extends VectorLogo {

  render() {
    let img = []
    if (this.state.animate) {
      img.push(<line x1={this.width} y1="0" x2={0} y2={this.height} stroke={this.fill} strokeWidth="80" key={Math.random()}>
                <animate attributeName="stroke-width" values={"0;40;0"} dur="7s" repeatCount="indefinite" />
                </line>) 
    } else {
      img.push(<line x1={this.width} y1="0" x2={0} y2={this.height} stroke={this.fill} strokeWidth="40" key={Math.random()}/>)  
    }

    return super.render(img)
  }

}

// tv screen
class Logo11 extends VectorLogo {

  render() {
    let img = []
    if (this.state.animate) {
      img.push(<rect x={0} y={0} width={this.width} height={this.width} stroke={this.fill} strokeWidth="0" rx="15" fill={this.fill} key={Math.random()}/>)
      img.push(<rect x={0} y={0} width={this.width} height={this.width} stroke={this.fill} strokeWidth="0" rx="0" fill={this.background} key={Math.random()}>
                <animate attributeName="y" values={0 + ";" + this.width + ";" + 0} dur="3s" repeatCount="indefinite" />
               </rect>)
      img.push(<rect x={this.width*0.2} y={this.height*0.2} width={this.width*0.6} height={this.width*0.6} rx="5" stroke={this.fill} strokeWidth="0" fill={this.background} key={Math.random()}>
                <animate attributeName="y" values={this.width + ";" + 0 + ";" + this.width} dur="4s" repeatCount="indefinite" />
              </rect>)

    } else {
      img.push(<rect x={0} y={0} width={this.width} height={this.width} stroke={this.fill} strokeWidth="0" rx="15" fill={this.fill} key={Math.random()}/>)
      img.push(<rect x={this.width*0.2} y={this.height*0.2} width={this.width*0.6} height={this.width*0.6} rx="5" stroke={this.fill} strokeWidth="0" fill={this.background} key={Math.random()}/>)
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
        case 0: return  <Logo6 width={this.props.width} height={this.props.height} fill={this.props.fill} idx={idx} animate={this.props.animate}/>;
        case 1: return  <Logo9 width={this.props.width} height={this.props.height} fill={this.props.fill} idx={idx} animate={this.props.animate}/>;
        case 2: return  <Logo2 width={this.props.width} height={this.props.height} fill={this.props.fill} idx={idx} animate={this.props.animate}/>;
        case 3: return  <Logo3 width={this.props.width} height={this.props.height} fill={this.props.fill} idx={idx} animate={this.props.animate}/>;
        case 4: return  <Logo4 width={this.props.width} height={this.props.height} fill={this.props.fill} idx={idx} animate={this.props.animate}/>;
        case 5: return  <Logo5 width={this.props.width} height={this.props.height} fill={this.props.fill} idx={idx} animate={this.props.animate}/>;
        case 6: return  <Logo0 width={this.props.width} height={this.props.height} fill={this.props.fill} idx={idx} animate={this.props.animate}/>;
        case 7: return  <Logo7 width={this.props.width} height={this.props.height} fill={this.props.fill} idx={idx} animate={this.props.animate}/>;
        case 8: return  <Logo8 width={this.props.width} height={this.props.height} fill={this.props.fill} idx={idx} animate={this.props.animate}/>;
        case 9: return  <Logo10 width={this.props.width} height={this.props.height} fill={this.props.fill} idx={idx} animate={this.props.animate}/>;
        case 10: return  <Logo1 width={this.props.width} height={this.props.height} fill={this.props.fill} idx={idx} animate={this.props.animate}/>;
        case 11: return  <Logo11 width={this.props.width} height={this.props.height} fill={this.props.fill} idx={idx} animate={this.props.animate}/>;
        default: return <Logo2 width={this.props.width} height={this.props.height} fill={this.props.fill} idx={idx} animate={this.props.animate}/>;
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