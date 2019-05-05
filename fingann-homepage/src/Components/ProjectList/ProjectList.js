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
    newest_projects_sort = (a, b) => {
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    }
    render() {
      const projectList = this.state.projects.sort(this.newest_projects_sort).map((project,i) => <ProjectItem key={i} project={project}/>);
      return (
        <ul className="grid-list">
          {projectList}
        </ul> 
      );
    }
  }
  
  export default ProjectList;
  