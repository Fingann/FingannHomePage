import React, { Component } from 'react';

import './NavBar.css'


class NavBar extends Component {
constructor(props){
  super(props);
  this.state = ({
    Current: this.props.Pages[1]
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
        {this.props.Pages.map((page, i) => {
           return (<div key={i} className={this.state.Current.props.DisplayTitle === page.props.DisplayTitle  ? "active" : "passive"} onClick={() => this.handleContnentChange(page)} ><p className="title-text">{page.props.DisplayTitle}</p></div>) 
        })}
      </div>);
    }
  }
  
  export default NavBar;
  