import React from 'react';
import Ticker from 'react-ticker'

class TickerBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      "text": props.text ? props.text : "Hackaday Remoticon // November 6 - November 8 2020. Keep an eye on this website for more info. Use MQTT broker.shiftr.io/remoticon to broadcast here."
    }
    
  }

  render() {
    return (
    <div className="TickerBar">
    <Ticker>
        {({ index }) => (
            <>
                <h1>{this.state.text}</h1>
            </>
        )}
    </Ticker>
    </div>

    )
  }

}

export default TickerBar;