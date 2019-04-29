import React, { Component } from 'react';
import './App.css';
import Content from './Components/ContentArea/Content';
import NavBar from './Components/NavigationBar/NavBar'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'

class App extends Component {

  constructor(props){
    super(props)
    const NavBarPages = [<About DisplayTitle="About" path="/about"/>,<Projects DisplayTitle="Projects" path="/projects"/>]
    this.state = {
      Content: NavBarPages[0],
      Pages: NavBarPages
    }
}

handleContentChanged = (content) => {
    this.setState({Content: content});
}

  render() {
    return (
      <div className="App">
        <NavBar Pages={this.state.Pages} onSelectContent={this.handleContentChanged}/>
        <Content Content={this.state.Content}/>
      </div>
    );
  }
}

export default App;
