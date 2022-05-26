import React from "react";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="nav-item">
      <Link className="nav-link" to="users">
        Users
      </Link>

      <Link className="nav-link" to="posts">
        Posts
      </Link>
    </div>
  );
};

export default SideBar;
