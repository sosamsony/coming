import React from 'react';
 // import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
 // import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconLinkedIn } from './assets/icons/linkedin.svg';
import Logo from "../src/logo.png";

import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href="."><img src={Logo} alt="GULF CREATIVE TEST GROUND"></img></a>
          </div>
          <div className="social">
            <a href="https://www.linkedin.com/company/gulf-creative-ae/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              <IconLinkedIn className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>We are Gulf Creative, Dubai.</h1>
            <p>Award winning marketing agency. This is our testing ground. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:hello@gulfcreative.ae">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>Check out our main website here...<a className="underlined" href="https://www.gulfcreative.ae" target="_blank" rel="noopener noreferrer">GULF CREATIVE</a> <br></br><strong>Powered by <a className="underlined" href="https://www.gulfcreative.ae" title="Gulf Creative" target="_blank" rel="noopener noreferrer">Gulf Creative</a></strong></span>
        </div>
      </div>
    );
  }
}

export default App;