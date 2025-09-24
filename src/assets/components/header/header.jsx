import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../images/zdotapps.png";

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

  const navItems = [
    { label: "Web Studio", path: "/products" },
    { label: "App Studio", path: "/products" },
    { label: "Agent Studio", path: "/products" },
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/careers" },
  ];

  return (
    <header className="navbar navbar-expand-lg navbar-light border-bottom py-3" style={{ background: "#F9ECC5" }}>
      <div className="container">
        <a href="#" className="navbar-brand d-flex align-items-center" onClick={() => handleNavigate("/")}>
          <img src={logo} alt="Z.apps" width={110} className="img-fluid" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-6">
            {navItems.map((item) => (
              <li className="nav-item mx-lg-2" key={item.label}>
                <a
                  href="#"
                  className={`nav-link ${isActive(item.path) ? "fw-bold" : ""} text-dark`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate(item.path);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-warning rounded-pill px-4 py-2 text-dark fw-semibold" onClick={() => handleNavigate('/login')}>
              Login / Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;