import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  const navigate = useNavigate();
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

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <header className={`navbar navbar-expand-lg fixed-top px-2 px-sm-3 py-2 py-sm-3 ${styles.header}`}>
      <div className="container">
        {/* Logo */}
        <a 
          href="#!" 
          onClick={() => handleNavigate("/")} 
          className="navbar-brand fw-bold fs-4 text-white"
        >
          <img 
            src="http://13.234.41.119/devenv/z.apps_new/assets/images/zdotapps_white.png" 
            alt="LOGO" 
            className="img-fluid" 
            width={100} 
          />
        </a>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler border-0 shadow-none"
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
              <a
                href="#!"
                className={`nav-link ${styles.navLink} ${isActive("/") ? styles.active : ""}`}
                onClick={() => handleNavigate("/")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#!"
                className={`nav-link ${styles.navLink} ${isActive("/products") ? styles.active : ""}`}
                onClick={() => handleNavigate("/products")}
              >
                Products
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#!"
                className={`nav-link ${styles.navLink} ${isActive("/features") ? styles.active : ""}`}
                onClick={() => handleNavigate("/features")}
              >
                Features
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#!"
                className={`nav-link ${styles.navLink} ${isActive("/pricing") ? styles.active : ""}`}
                onClick={() => handleNavigate("/pricing")}
              >
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#!"
                className={`nav-link ${styles.navLink} ${isActive("/resource") ? styles.active : ""}`}
                onClick={() => handleNavigate("/resource")}
              >
                Resource
              </a>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="d-flex align-items-center gap-3">
            <a
              href="#!"
              className={`btn rounded-pill px-4 py-2 ${styles.joinNow} ${isActive("/login") ? styles.active : ""}`}
              onClick={() => handleNavigate("/login")}
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;