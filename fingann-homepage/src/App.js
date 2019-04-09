import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Components/ContentArea/Content';
import NavBar from './Components/NavigationBar/NavBar'
import About from './Components/About/About'
class App extends Component {

  constructor(props){
    super(props)
    const content = <About/>
    this.state = {Content: content}
}

handleContentChanged = (content) => {
    this.setState({Content: content});
}

  render() {
    return (
      <div className="App">
      <NavBar onSelectContent={this.handleContentChanged}/>

      <Content Content={this.state.Content}/>
      </div>
    );
  }
}

export default App;
