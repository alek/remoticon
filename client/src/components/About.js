import React from 'react';
import './About.css';

class About extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="About">
        <h1>
          We created <strong>Remoticon</strong> simply because we wanted to have a safe, low cost, and fun <strong>gathering</strong> that we could all share during this very strange time.
          Remoticon is both <strong>education and entertainment</strong> at once. This is <strong>not your average all day Zoom-a-con</strong> - Hackaday's curated workshops are <strong>short and interactive</strong>, span multiple timezones, and there's a Bring A Hack for you to <strong>show off your projects</strong>, either old or new. Join the SMD challenge and show off your skills, play with remote robots, or spend time catching up with old friends.
          We miss all of your faces and <strong>can't wait to see you November 6 - 8!</strong> </h1>
      </div>
      )
  }
}


export default About;