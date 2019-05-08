import React, { Component, useState, useEffect } from "react";
import ProjectList from "./ProjectList/ProjectList";
import Spinner from "./Spinner/Spinner";
import getProjects from "./GithubApi/GithubApiFetcher";

import "./Projects.css";

function GetProjectsHook() {
  const [Result, setResult] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/Fingann/repos`)
      .then(response => response.json())
      .then(data => {
        setResult(data);
        setLoading(false);
      });
  }, []);
  return { Loading: Loading, Result: Result };
}

const DisplayProjects = () => {
  const { Loading, Result } = GetProjectsHook();

  return Loading ? (
    <div className="loading">
      <Spinner />
      <h2>Loading projects</h2>
    </div>
  ) : (
    <ProjectList Projects={Result} />
  );
};

const Projects = () => (
  <section className="projects">
    <DisplayProjects />
  </section>
);

export default Projects;
