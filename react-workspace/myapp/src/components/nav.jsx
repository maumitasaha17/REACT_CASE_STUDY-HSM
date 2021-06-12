import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          HSM
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/diet">
                Diet
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/doctors">
                Doctor
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/patientCase">
                Patient Case
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/finance">
                Finance
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/patients">
                Patient
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/diseases">
                Disease
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/policies">
                Insurance Policy
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/history">
                Patient History
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <NavLink
            className="btn dropdown-toggle mr:6"
            to="/login"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Login
          </NavLink>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <NavLink className="dropdown-item" to="/admin">
              Admin login
            </NavLink>
            <NavLink className="dropdown-item" to="/login">
              User login
            </NavLink>
            <NavLink className="nav-link btn " to="/logout">
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;