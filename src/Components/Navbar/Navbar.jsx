import React, { Component } from "react";
import Search from "../Search/SearchForm";
import { Route, Switch, Redirect, withRouter, Link } from "react-router-dom";
import "./Navbar.scss";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <div className="navbar">
        <ul className="navbar__days">
          <li className="navbar__days-day">
            <Link>Today</Link>
          </li>
          <li className="navbar__days-day">
            <Link>Tomorrow</Link>
          </li>
          <li className="navbar__days-day">
            <Link>Week</Link>
          </li>
        </ul>
        <Search />
      </div>
    );
  }
}

export default Navbar;
