import React, { Component } from 'react';
import './ProjectItem.css'

class ProjectItem extends Component {
    constructor(props){
        super(props);
        this.state = {
          project: this.props.project,
        };
      }
    render() {
      return (
            <li className="projectItem " >
                <div class="background">
                  <div className="project-text">
                      <h2 className="font-color"> {this.state.project.name}</h2>
                      <p className="font-color" >{this.state.project.description}</p>
                      <p className="font-color" > Language: {this.state.project.language}</p>
                  </div>
                  <div className="links">
                      <a className="align-right" href={this.state.project.html_url}> 
                        <img  src="/images/External_Link.svg" height="40px" width="40px" alt="Kiwi standing on oval"/>
                      </a>  
                  </div>
                </div>
            
            </li>
      );
    }
  }
  
  export default ProjectItem;
  