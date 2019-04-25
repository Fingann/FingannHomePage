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
            <div className="projectItem">
              {this.state.project.name}
            </div>
      );
    }
  }
  
  export default ProjectItem;
  