import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={`navbar navbar-expand-lg fixed-top  px-4 py-3 ${styles.header}`}>
      <div className="container">
        {/* Logo */}
        <a href="/" className={`navbar-brand fw-bold fs-4 ${styles.logo}`}>
          <img src="http://13.234.41.119/devenv/z.apps_new/assets/images/zdotapps_white.png" alt="LOGO" className="img-fluid" width={100} />
        </a>

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
              <a className={`nav-link ${styles.navLink}`} href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="">Pricing</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="#">Resource</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="/products">Products</a>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="d-flex align-items-center gap-3">
            <a href="#" className={styles.login}>Login</a>
            <a href="#" className={`btn rounded-pill px-4 py-2 ${styles.joinNow}`}>
              Join Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
