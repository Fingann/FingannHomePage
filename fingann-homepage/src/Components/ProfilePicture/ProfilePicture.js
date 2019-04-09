import React, { Component } from 'react';
import './ProfilePicture.css'

class ProfilePicture extends Component {
    render() {
      return (
            <div className="profilepicture">
            
              <img className="avatar" src={process.env.PUBLIC_URL + '/images/avatar.jpg'}alt="Avatar"></img>
            </div>
      );
    }
  }
  
  export default ProfilePicture;
  