import React from "react";
import "./mainnavbar.css";

import { Link, NavLink} from "react-router-dom";

export default function MainNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Music Studio
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="/students">
         Students
        </NavLink>
        <NavLink className="nav-item nav-link" to="/leaderboard">
          Leaderboard
        </NavLink>
        <NavLink className="nav-item nav-link" to="/calendar">
         Calendar
        </NavLink>
        <NavLink className="nav-item nav-link" to="/settings">
          Settings
        </NavLink>
        <NavLink className="nav-item nav-link" to="/membership">
          Membership
        </NavLink>
      </div>
    </div>
  </nav>

  );
}
