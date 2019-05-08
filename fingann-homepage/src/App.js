import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from "./Components/NavigationBar/NavBar";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";

const navigationIndex =
  [    
    {
      "Title": "About",
      "Path": "/",
      "isExact": true,
      "data": <About/>
    },
    {
      "Title": "Projects",
      "Path": "/projects",
      "isExact": false,
      "data": <Projects/>
    }
  ]
;

function DisplayContent(){
  return <main className="content">
          <Switch>
{navigationIndex.map((page, i) => { return <Route key={i} exact={page.isExact}  path={page.Path} render={() => page.data} /> })}
            <Redirect from="*" to="/" />
          </Switch>
        </main>;
}


class App extends Component {

  render() {
    return (
      <div className="App">
          <NavBar Pages={navigationIndex} />
          <DisplayContent></DisplayContent>
      </div>

    );
  }
}

export default App;
