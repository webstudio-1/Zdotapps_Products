import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} pt-5 pb-4`}>
      <div className="container text-center text-md-start">
        <div className="row gy-4">

          {/* Brand Column */}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <Link to="/" className="d-inline-block mb-3">
              <img
                src="http://13.234.41.119/devenv/z.apps_new/assets/images/zdotapps_white.png"
                alt="Z.Apps Logo"
                className="img-fluid"
                width={120}
              />
            </Link>
            <p className={`${styles.tagline} text-white-50`}>
              Building the future with intelligent automation.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="https://twitter.com/yourhandle" aria-label="Twitter" className={styles.socialLink}>
                <FaTwitter />
              </a>
              <a href="https://linkedin.com/company/yourcompany" aria-label="LinkedIn" className={styles.socialLink}>
                <FaLinkedin />
              </a>
              <a href="https://github.com/yourgithub" aria-label="GitHub" className={styles.socialLink}>
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-lg-8 col-md-12">
            <div className="row gy-4">
              {/* Product */}
              <div className="col-6 col-lg-4">
                <h5 className="text-uppercase fw-bold mb-3">Product</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><Link to="/features" className={styles.link}>Features</Link></li>
                  <li className="mb-2"><Link to="/products" className={styles.link}>Solutions</Link></li>
                  <li className="mb-2"><Link to="/pricing" className={styles.link}>Plans & Pricing</Link></li>
                  <li className="mb-2"><Link to="/z.flow" className={styles.link}>Z.Flow Platform</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div className="col-6 col-lg-4">
                <h5 className="text-uppercase fw-bold mb-3">Company</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><Link to="/" className={styles.link}>About Us</Link></li>
                  <li className="mb-2"><Link to="/resource" className={styles.link}>Blog & Resources</Link></li>
                  <li className="mb-2"><Link to="/login" className={styles.link}>Sign In</Link></li>
                  <li className="mb-2"><Link to="/z.flow" className={styles.link}>Get Started</Link></li>
                </ul>
              </div>

              {/* Resources */}
              <div className="col-6 col-lg-4">
                <h5 className="text-uppercase fw-bold mb-3">Support</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><Link to="/resource" className={styles.link}>Help Center</Link></li>
                  <li className="mb-2"><Link to="/features" className={styles.link}>How It Works</Link></li>
                  <li className="mb-2"><Link to="/products" className={styles.link}>Use Cases</Link></li>
                  <li className="mb-2"><Link to="/pricing" className={styles.link}>FAQs</Link></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container">
        <div className="pt-3 mt-4 border-top border-secondary d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="small text-white-50 mb-2 mb-md-0">
            © {year} Z.apps. All rights reserved.
          </p>
          <div className="d-flex gap-3">
            <a href="/privacy" className={styles.link}>Privacy Policy</a>
            <a href="/terms" className={styles.link}>Terms of Service</a>
            <a href="/cookies" className={styles.link}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
