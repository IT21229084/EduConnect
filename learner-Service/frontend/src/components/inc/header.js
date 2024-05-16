/* eslint-disable react/style-prop-object */
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../css/header.css";

export default function Header() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLoggedIn = localStorage.getItem("loggedIn");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("loggedIn", false);
    localStorage.removeItem("token");
    // setIsLoggedIn(false);
    window.location.href = "/login"
   
  };

  const location = useLocation();
  console.log(location);
  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-3">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse">
          <Link to="/" className="text-decoration-none">
            <h3 className="fw-bold logo-name ">EduConnect</h3>
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ml-5"> 
            <Link to="/" className="text-decoration-none">
              <a className="nav-link fw-bold header-link" href=" ">
                Home
              </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold header-link" href=" #">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold header-link" href="# ">
                New Courses
              </a>
            </li>
            <li className="nav-item header-link">
              <a className="nav-link fw-bold header-link" href="/student-management">
                Memberships
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold header-link" href="/course-delivery-management ">
                Course Delivery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold header-link" href="/progress-tracking ">
                Progress Check
              </a>
            </li>
            <li className="nav-item">
              <input
                className="form-control me-2 header-search-bar m-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <Link to="/register">
            {isLoggedIn === "false" ? (
              <button
                type="button"
                className="btn btn-outline-primary header-btn-signup"
              >
                Sign Up
              </button>
            ) : null}
          </Link>
          <Link to="/login">
            {isLoggedIn === "false" ? (
              <button
                type="button"
                className="btn btn-primary ml-5 header-btn-login"
              >
                Log In
              </button>
            ) : null}
          </Link>
          <Link to="/login">
            {isLoggedIn === "true" ? (
              <button
                type="button"
                className="btn btn-primary ml-5 header-btn-login"
                onClick={logout}
              >
                Log Out
              </button> 
            ) : null}
          </Link>
        </div>
      </div>
    </nav>
  );
}
