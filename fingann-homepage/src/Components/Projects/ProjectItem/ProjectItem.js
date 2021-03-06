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
      <a href={this.props.project.html_url}>
        <li className="projectItem ">
          <div className="background">
            <div className="project-text">
              <h2> {this.props.project.name}</h2>
              {this.props.project.description != null && (
                <p>{this.props.project.description}</p>
              )}
            </div>
            <div className="project-info">
              <p>
                Writen in{" "}
                <span className="font-bold">
                  {this.props.project.language || "Not detected"}
                </span>
              </p>
              <p>
                Created{" "}
                <span className="font-bold">
                  {this.format_date(this.props.project.created_at)}
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
        </li>
      </a>
    );
  }
}

export default ProjectItem;
