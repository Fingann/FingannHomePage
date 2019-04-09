import React, { Component } from 'react';
import './Content.css'

class Content extends Component {

    render() {
      return (
            <div className="content">
               {this.props.Content}
            </div>);
    }
  }
  
  export default Content;
  