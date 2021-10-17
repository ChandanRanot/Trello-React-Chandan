import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-primary">
      <div className="container-fluid">
        <Link
          to="/"
          className="navbar-brand"
          style={{ textDecoration: "none", color: "white" }}
        >
          Trello{" "}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
