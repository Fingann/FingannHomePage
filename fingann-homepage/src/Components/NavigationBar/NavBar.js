import React, { Component } from 'react';
import './NavBar.css'
import About  from '../About/About'
import Projects from '../Projects/Projects'

class NavBar extends Component {
constructor(props){
  super(props);
  this.state = ({
    Current: <About DisplayTitle="About"/>,
    About: <About DisplayTitle="About"/>,
    Projects: <Projects DisplayTitle="Projects"/>
});
}

handleContnentChange = (content) => {
  this.props.onSelectContent(content);
  this.setState({Current: content})
  console.log("Current view: "+ content.props.DisplayTitle);
}

    render() {
        return (<div className="navbar">
        <div className={this.state.Current.props.DisplayTitle === this.state.About.props.DisplayTitle  ? "active" : "passive"} onClick={() => this.handleContnentChange(this.state.About)} >About</div>
        <div className={this.state.Current.props.DisplayTitle === this.state.Projects.props.DisplayTitle  ? "active" : "passive"} onClick={() =>this.handleContnentChange(this.state.Projects)}>Projects</div>  
      
      </div>);
    }
  }
  
  export default NavBar;
  