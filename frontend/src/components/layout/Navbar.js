import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";

function Navbar({ onLogout, user}) {
 

  return (
    <nav className="navbar navbar-expand-lg  bg-light">
      <img className="navbar-brand" src={Logo} alt="#" style={{ width: 80 }} />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/posts" className="nav-link">
              Posts
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/chat" className="nav-link">
              Chat
            </Link>
          </li>
        </ul>

        <div className="navbar-brand">

                 
            {user.name}
                  

        </div>

        <div className="userContainer">
          <a href="/profile">
            <img
              className="navbar-brand"
              src="/avatars/manager.png"
              style={{ width: "40px", height: "40px" }}
              alt="User Avatar"
            />
            <div className="middle"></div>
          </a>
        </div>
        <button
          className="btn btn-outline-info my-2 my-sm-0"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
