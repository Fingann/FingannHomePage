
import React from 'react';

const getProjects = async (setLoading, setResult) => {
   setLoading(true);

    setTimeout( () => {
      fetch(`https://api.github.com/users/Fingann/repos`)
      .then(response => response.json())
      .then(data => {
        setResult(data);
        setLoading(false);
      })
    },1000)
  }

  export default getProjects;
