import React, { Component } from 'react';
import ProjectList from '../ProjectList/ProjectList'
import Loader from '../Loader/Loader'

import './Projects.css'


class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
          projectsData: [],
          loading: true
        };
        this.getProjects = this.getProjects.bind(this);

      }
     
      componentDidMount() {
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
          this.setState({
            projectsData: data,
            loading: false
          });
        })
      },1000)
    }


    DisplayProjects(props){
      console.log(props)
      if(props.loading){
        return <div className="loading">
                  <Loader />
                  <h2>Loading projects</h2>
                </div>;
      }
      return <ProjectList projects={props.projectsData}/>
    }

    render() {
      return (
            <section className="projects">
              {this.DisplayProjects(this.state)}
            </section>
      );
    }

    

}
  
  export default Projects;
  