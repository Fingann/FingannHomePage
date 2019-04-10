import React, { Component } from 'react';
import './NavBar.css'
import About  from '../About/About'
import Projects from '../Projects/Projects'

class NavBar extends Component {
constructor(props){
  super(props);
  this.state = ({
    Current: this.props.NavBarPages[0],
    NavBarPages: this.props.NavBarPages
});
}

handleContnentChange = (content) => {
  this.props.onSelectContent(content);
  this.setState({
    Current: content
  })
  console.log("Current view: "+ content.props.DisplayTitle);
}

    render() {
        return (<div className="navbar">
        {this.props.NavBarPages.map((answer, i) => {
           return (<div className={this.state.Current.props.DisplayTitle === answer.DisplayTitle  ? "active" : "passive"} onClick={() => this.handleContnentChange(answer)} >{answer.DisplayTitle}</div>) 
        })}
      </div>);
    }
  }
  
  export default NavBar;
  