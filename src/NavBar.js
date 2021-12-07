import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" exact>
        <button>Home</button>
      </NavLink>
      <NavLink to="/blogposts">
        <button>Blog Posts</button>
      </NavLink>
      <NavLink to="/gitprojects">
        <button>Git Projects</button>
      </NavLink>
    </div>
  );
}

export default NavBar;
