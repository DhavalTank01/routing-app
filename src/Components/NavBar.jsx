import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Dhaval Tank
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
              <NavLink className="nav-link " aria-current="page" to="/">
                home
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/products">
                products
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/services">
                services
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/post">
                post
              </NavLink>
            </li>

            <li className="nav-item ">
              <NavLink className="nav-link" to="/about">
                about
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/contact">
                contact us
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/admin">
                admin
              </NavLink>
            </li>
          </ul>
          <div className="d-flex gap-1">
            <Link
              className="btn  text-capitalize btn-outline-primary "
              to="/signin"
            >
              sign in
            </Link>
            <Link
              className="btn  text-capitalize btn-outline-success"
              to="/signup"
            >
              sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
