import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">logo</div>
          <div className="nav-item">
            <ul>
              <span>
                <NavLink to="/">Home</NavLink>
              </span>
              <span>
                <NavLink to="/register">Register</NavLink>
              </span>
              <span>
                <NavLink to="/login">Login</NavLink>
              </span>
              <span>
                <NavLink to="/contact">Contact</NavLink>
              </span>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
