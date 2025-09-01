import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  const location = useLocation();
  
  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    if (path !== "/" && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  return (
    <header className={`navbar navbar-expand-lg fixed-top  px-4 py-3 ${styles.header}`}>
      <div className="container">
        {/* Logo */}
        <Link to="/" className={`navbar-brand fw-bold fs-4 ${styles.logo}`}>
          <img src="http://13.234.41.119/devenv/z.apps_new/assets/images/zdotapps_white.png" alt="LOGO" className="img-fluid" width={100} />
        </Link>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler border-0 shadow-none bg-white text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4 gap-2">
            <li className="nav-item">
              <Link 
                className={`nav-link ${styles.navLink} ${isActive("/") ? styles.active : ""}`} 
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${styles.navLink} ${isActive("/features") ? styles.active : ""}`} 
                to="/features"
              >
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${styles.navLink} ${isActive("/pricing") ? styles.active : ""}`} 
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${styles.navLink} ${isActive("/resource") ? styles.active : ""}`} 
                to="/resource"
              >
                Resource
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${styles.navLink} ${isActive("/products") ? styles.active : ""}`} 
                to="/products"
              >
                Products
              </Link>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="d-flex align-items-center gap-3">
            <Link 
              to="/login" 
              className={`${styles.login} ${isActive("/login") ? styles.active : ""}`}
            >
              Login
            </Link>
            <Link 
              to="/z.flow" 
              className={`btn rounded-pill px-4 py-2 ${styles.joinNow} ${isActive("/z.flow") ? styles.active : ""}`}
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
