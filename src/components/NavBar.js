import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName='active'>Home</NavLink>
        </li>
        <li>
          <NavLink to="/new" activeClassName='active'>New Tweet</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
