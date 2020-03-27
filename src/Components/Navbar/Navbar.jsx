import React from "react";
import Search from "../Search/SearchForm";
import { NavLink, withRouter } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ location }) => {
  return (
    <div className="navbar">
      <ul className="navbar__days">
        <li className="navbar__days-day">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navbar__days-day">
          <NavLink to={`${location.pathname}?today`}>Today</NavLink>
        </li>
        <li className="navbar__days-day">
          <NavLink to={`${location.pathname}?tommorrow`}>Tomorrow</NavLink>
        </li>
        <li className="navbar__days-day">
          <NavLink to={`${location.pathname}?week`}>Week</NavLink>
        </li>
      </ul>
      <Search />
    </div>
  );
};

export default withRouter(Navbar);
