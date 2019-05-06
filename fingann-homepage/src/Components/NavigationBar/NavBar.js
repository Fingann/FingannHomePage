import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ Pages }) => (
  <nav className="navbar">
    {Pages.map((page, i) => {
      return <NavigationLink key={i} page={page} identifier={i} />;
    })}
  </nav>
);

const NavigationLink = ({ page, identifier }) => (
  <NavLink
    exact
    className="passive"
    to={page.Path}
    activeClassName="active">
    {page.Title}
  </NavLink>
);

export default NavBar;
