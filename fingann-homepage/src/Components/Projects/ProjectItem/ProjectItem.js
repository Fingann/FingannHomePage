import React, { Component } from "react";
import "./ProjectItem.css";

class ProjectItem extends Component {
  format_date = date => {
    return new Intl.DateTimeFormat("nb-NO", {
      year: "numeric",
      month: "long",
      day: "2-digit"
    }).format(new Date(date));
  };

  render() {
    return (
        <div className="projectItem" onclick="location.href='{this.props.project.html_url}';" >


          <div className="background">
            <div className="project-text">
              <h2> {this.props.project.name}</h2>
              {this.props.project.description != null && (
                <p>{this.props.project.description}</p>
              )}
            </div>
            <div className="project-info">
              <p>
                Language{" "}
                <span className="font-bold">
                  {this.props.project.language || "Not detected"}
                </span>
              </p>
 
              <p>
                Updated{" "}
                <span className="font-bold">
                  {this.format_date(this.props.project.updated_at)}
                </span>
              </p>
            </div>
          </div>
         
        </div>
      
    );
  }
}

export default ProjectItem;
