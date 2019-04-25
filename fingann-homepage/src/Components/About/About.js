import React, { Component } from 'react';
import './About.css'
import ProfilePicture from '../ProfilePicture/ProfilePicture';

class About extends Component {
    constructor(props){
        super(props);
        
        this.state = ({DisplayTitle: "About"});
    }
    render() {
      return (
            <div className="about">
              {/* <ProfilePicture className="profile"/> */}
              <div className="firstColumn"><p>Test</p></div>
              <div className="secoundColumn"><p>Test</p></div>

            </div>
      );
    }
  }
  
  export default About;
  