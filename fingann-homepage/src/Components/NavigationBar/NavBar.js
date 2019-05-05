import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        {this.props.Pages.map((page, i) => {
          return (
            <NavLink
              exact
              key={i}
              className="passive"
              to={page.Path}
              activeClassName="active"
            >
              {page.Title}
            </NavLink>
          );
        })}
      </nav>
    );
  }
}

export default NavBar;
