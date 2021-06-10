import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
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
              <div class="navbar-collapse collapse w-800 order-3 dual-collapse2">
              <ul className="navbar-nav mr-5">
                <li className="nav-item">
                  <NavLink className="nav-link btn btn-outline-dark" to="/register">
                    Sign up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link btn btn-outline-dark" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item margin-left:200px">
                  <NavLink className="nav-link btn btn-outline-dark" to="/logout">
                    Logout
                  </NavLink>
                </li>
              </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
