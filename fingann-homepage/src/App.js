import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Content from './Components/ContentArea/Content';
import NavBar from './Components/NavigationBar/NavBar'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'

class App extends Component {

  constructor(props){
    super(props)
    const NavBarPages = [<About DisplayTitle="About" path="/"/>,<Projects DisplayTitle="Projects" path="/projects"/>]
    this.state = {
      Content: NavBarPages[0],
      Pages: NavBarPages
    }
}

handleContentChanged = (content) => {
    this.setState({Content: content});
}

  render() {
    console.log(this.state.Content)
    return (
      <div className="App">
       <Router>

        <NavBar Pages={this.state.Pages} onSelectContent={this.handleContentChanged}/>
          
          
            <Switch>
                  <Route exact path='/' render={() => <About DisplayTitle="About" path="/"/>}/>
                  <Route path='/projects' render={() => <Projects DisplayTitle="Projects" path="/projects"/>}/>
                  
                  <Route  path='*' render={() => <Redirect to="/"/>}/>
              </Switch>
          </Router> 
      </div>

    );
  }
}

export default App;
