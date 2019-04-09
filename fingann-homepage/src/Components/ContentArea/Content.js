import React, { Component } from 'react';
import './Content.css'
import NavBar from '../NavigationBar/NavBar';
import About from '../About/About';
import Projects from '../Projects/Projects';


class Content extends Component {
constructor(props){
    super(props)
}


    render() {
      return (
            <div className="content">
               {this.props.Content}
            </div>);
    }
  }
  
  export default Content;
  