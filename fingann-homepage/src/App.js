import React, { Component } from 'react';
import './App.css';
import Content from './Components/ContentArea/Content';
import NavBar from './Components/NavigationBar/NavBar'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'

class App extends Component {

  constructor(props){
    super(props)
    const NavBarPages = [<About DisplayTitle="About"/>,<Projects DisplayTitle="Projects"/>]
    this.state = {
      Content: NavBarPages[0],
      NavBarPages: NavBarPages
    }
}

handleContentChanged = (content) => {
    this.setState({Content: content});
}

  render() {
    return (
      <div className="App">
        <NavBar NavBarPages={this.state.NavBarPages} onSelectContent={this.handleContentChanged}/>
        <Content Content={this.state.Content}/>
      </div>
    );
  }
}

export default App;
