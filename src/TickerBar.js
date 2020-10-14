import React from 'react';
import Ticker from 'react-ticker'

class TickerBar extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="TickerBar">
    <Ticker>
        {({ index }) => (
            <>
                <h1>What every picture, of whatever form, must have in common with reality in order to be able to represent it at all—rightly or falsely—is the logical form. </h1>
                <img src="www.my-image-source.com/" alt=""/>
            </>
        )}
    </Ticker>
    </div>

    )
  }

}

export default TickerBar;