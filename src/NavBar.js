import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="">
      <NavLink to="/">
        <button className="button">Home</button>
      </NavLink>
      <NavLink to="/blogposts">
        <button className="button">Blog Posts</button>
      </NavLink>
      <NavLink to="/gitprojects">
        <button className="button">Git Projects</button>
      </NavLink>
    </div>
  );
}

export default NavBar;
