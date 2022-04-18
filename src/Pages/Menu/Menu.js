import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/signout">SignOut</Link>
        <Link to="/details">Details</Link>
      </nav>
    </div>
  );
};

export default Menu;
