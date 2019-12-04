import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  const location = props.location().pathname;
  return (
    <div className="nav">
      <ul>
        <li className={location === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location === "/new" ? "active" : ""}>
          <Link to="/new">New Tweet</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
