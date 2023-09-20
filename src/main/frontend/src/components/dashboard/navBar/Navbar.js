import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../../../assets/logo.png";
import UserApi from "../../../api/UserApi";
import { FaUser } from "react-icons/fa";
import "./NavBar.css";

function Navbar(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    UserApi.current()
      .then(({ data }) => setUser(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-light">
      <div className="container-fluid px-0  w-75">
        <nav className="navbar navbar-expand-lg  ">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="#" style={{ width: "80px" }} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  to="/covid"
                  className="nav-link text-uppercase  link-style"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/posts"
                  className="nav-link  text-uppercase link-style"
                  style={{
                    color: "#0C2C54",
                  }}
                >
                  Posts
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/chat"
                  className="nav-link  text-uppercase link-style"
                  style={{
                    color: "#0C2C54",
                  }}
                >
                  Chat
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  <span className="">
                    <FaUser size={30}></FaUser>
                  </span>
                </Link>
              </li>
              <li className="nav-item link-style mt-2 mr-4 text-uppercase">
                {user.name}
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-primary border-0 rounded-pill "
                  style={{
                    backgroundColor: "#ff2f4f",
                    fontFamily: "Bebas Neue",
                    letterSpacing: "1.6px",
                  }}
                  onClick={props.onLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
