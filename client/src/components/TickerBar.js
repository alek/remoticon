import React from 'react';
import Ticker from 'react-ticker'

class TickerBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.getText = props.getText;
  }

  render() {
    return (
    <div className="TickerBar">
    <Ticker>
        {({ index }) => (
            <>
                <h1>{this.getText()}</h1>
            </>
        )}
    </Ticker>
    </div>

    )
  }

}

export default TickerBar;