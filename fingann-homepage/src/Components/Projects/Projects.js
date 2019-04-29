import React, { Component } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem'
import ProjectList from '../ProjectList/ProjectList'
import Loader from '../Loader/Loader'

import './Projects.css'


class Projects extends Component {
    constructor(props){
        super(props);
        this.state = ({DisplayTitle: "Projects"});
        this.state = {
          DisplayTitle: "Projects",
          projectsData: [],
          loading: true
        };
        this.getProjects = this.getProjects.bind(this);

      }
     
      componentDidMount() {
          console.log("ComponentMounted")
          this.setState({
              loading: true
          })
          this.getProjects();
      }
    getProjects = () => {
      this.setState({
        loading: true
      })
  
      setTimeout( () => {
        fetch(`https://api.github.com/users/Fingann/repos`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.setState({
            projectsData: data,
            loading: false
          });
        })
      },1000)
    }

    render() {
      return (
            <div className="projects center">
              {this.state.loading === true
                        ? <div className="loading">
                            <Loader  />
                            <h2>Loading projects</h2>
                          </div>
                        :
                        
                        <ProjectList projects={this.state.projectsData}/>
                        // <ul className="fixed-content">
                        // {projectList}
                        // </ul>
                    }
            </div>
      );
    }

    

}
  
  export default Projects;
  