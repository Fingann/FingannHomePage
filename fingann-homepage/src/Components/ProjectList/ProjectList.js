import React, { Component } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem'
import './ProjectList.css'

class ProjectList extends Component {
    constructor(props){
        super(props);
        this.state = {
          projects: this.props.projects,
        };
      }
    render() {
      const projectList = this.state.projects.map((project,i) => <ProjectItem project={project}/>);

      return (
        <ul className="grid-list">
          {projectList}
        </ul> 
      );
    }
  }
  
  export default ProjectList;
  