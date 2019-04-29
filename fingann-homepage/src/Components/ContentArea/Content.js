import React, { Component } from 'react';
import './Content.css'

class Content extends Component {

    render() {
      return (
            <article className="content">
               {this.props.Content}
            </article>);
    }
  }
  
  export default Content;
  