import React, { Component } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem'
import './ProjectList.css'


const newest_projects_sort = (a, b) => {
  a = new Date(a.updated_at);
  b = new Date(b.updated_at);
  return a>b ? -1 : a<b ? 1 : 0;
}

const ProjectList = ({Projects})=> {
      const projectList = Projects.sort(newest_projects_sort).map((project,i) => <ProjectItem key={i} project={project}/>);
      return (
        <ul className="grid-list">
          {projectList}
        </ul> 
      );
    
  }
  
  export default ProjectList;
  