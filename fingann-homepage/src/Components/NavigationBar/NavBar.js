import React, { Component } from 'react';
import './NavBar.css'


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
        {this.state.NavBarPages.map((answer, i) => {
           return (<div key={i} className={this.state.Current.props.DisplayTitle === answer.props.DisplayTitle  ? "active" : "passive"} onClick={() => this.handleContnentChange(answer)} ><p className="title-text">{answer.props.DisplayTitle}</p></div>) 
        })}
      </div>);
    }
  }
  
  export default NavBar;
  