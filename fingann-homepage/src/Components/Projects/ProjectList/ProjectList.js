import React, { Component } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem'
import './ProjectList.css'


const SearchBar = ({Projects}) =>{

  return (<section >
  <form >
    <input
      type="text"
      placeholder="Search..."
      oni
    />
    <button >
      Clear
    </button>
  </form>
</section>)
}

const newest_projects_sort = (a, b) => {
  a = new Date(a.updated_at);
  b = new Date(b.updated_at);
  return a>b ? -1 : a<b ? 1 : 0;
}

const List = ({Projects}) =>{
  return (<ul className="grid-list">
  {Projects}
</ul>);
}


const ProjectList = ({Projects})=> {
      const projectList = Projects.sort(newest_projects_sort).map((project,i) => <ProjectItem key={i} project={project}/>);
      return (
        <React.Fragment>
        <SearchBar Projects={projectList}/>
        <List Projects={projectList}></List>
        </React.Fragment>
      );
    
  }
  
  export default ProjectList;
  