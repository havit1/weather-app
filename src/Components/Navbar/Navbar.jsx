import React, { useContext } from "react";
import Search from "../Search/SearchForm";
import { NavLink, withRouter } from "react-router-dom";
import CitiesContext from "../../Context/cities-context";
import "./Navbar.scss";

const Navbar = ({ location }) => {
  const context = useContext(CitiesContext);

  const link =
    location.pathname.length > 1 ? location.pathname : context.homeCity.name;

  return (
    <div className="navbar">
      <ul className="navbar__days">
        <li className="navbar__days-day">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navbar__days-day">
          <NavLink to={`${link}?today`}>Today</NavLink>
        </li>
        <li className="navbar__days-day">
          <NavLink to={`${link}?tommorrow`}>Tomorrow</NavLink>
        </li>
        <li className="navbar__days-day">
          <NavLink to={`${link}?week`}>Week</NavLink>
        </li>
      </ul>
      <Search />
    </div>
  );
};

export default withRouter(Navbar);
