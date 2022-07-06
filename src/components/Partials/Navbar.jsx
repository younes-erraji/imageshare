import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <h1>
          <Link to="/">
            <strong>images</strong>hare
          </Link>
        </h1>
        <form>
          <input
            type="text"
            name="search"
            placeholder="search for free photos.."
          />
          <button className="search">
            <i className="fa fa-search"></i>
          </button>
        </form>
        <ul className="links">
          <li>
            <NavLink to="/about">about us</NavLink>
          </li>
          <li>
            <NavLink to="/sign-in">sign in</NavLink>
          </li>
          <li>
            <NavLink to="/sign-up">sign up</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
