import React from 'react';
import Ticker from 'react-ticker'

class TickerBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      "text": props.text
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