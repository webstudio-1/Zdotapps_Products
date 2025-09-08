import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row gy-4">
          {/* Brand Column */}
          <div className="col-lg-4 col-md-12">
            <Link to="/" className={`${styles.logo}`}>
              <img src="http://13.234.41.119/devenv/z.apps_new/assets/images/zdotapps_white.png" alt="LOGO" className="img-fluid" width={100} />
            </Link>
            <p className={styles.tagline}>AI automation for modern teams.</p>
            <div className={`d-flex gap-2 ${styles.socials}`}>
              <a href="#" aria-label="Twitter" className={styles.socialLink}>Twitter</a>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink}>LinkedIn</a>
              <a href="#" aria-label="GitHub" className={styles.socialLink}>GitHub</a>
            </div>
          </div>

          {/* Links Column */}
          <div className="col-lg-8 col-md-12">
            <div className="row gy-4">
              <div className="col-6 col-lg-4">
                <h4 className={styles.groupTitle}>Product</h4>
                <Link to="/features" className={styles.link}>Features</Link><br />
                <Link to="/products" className={styles.link}>Products</Link><br />
                <Link to="/pricing" className={styles.link}>Pricing</Link><br />
                <Link to="/z.flow" className={styles.link}>Z.Flow</Link>
              </div>
              <div className="col-6 col-lg-4">
                <h4 className={styles.groupTitle}>Company</h4>
                <Link to="/" className={styles.link}>Home</Link><br />
                <Link to="/resource" className={styles.link}>Resources</Link><br />
                <Link to="/login" className={styles.link}>Login</Link><br />
                <Link to="/z.flow" className={styles.link}>Join Now</Link>
              </div>
              <div className="col-6 col-lg-4">
                <h4 className={styles.groupTitle}>Resources</h4>
                <Link to="/resource" className={styles.link}>Documentation</Link><br />
                <Link to="/features" className={styles.link}>Features Guide</Link><br />
                <Link to="/products" className={styles.link}>Product Guide</Link><br />
                <Link to="/pricing" className={styles.link}>Pricing Guide</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container">
        <div className={`pt-3 mt-4 border-top d-flex flex-column flex-md-row justify-content-between align-items-center ${styles.bottomBar}`}>
          <p className={`${styles.copy} mb-0`}>© {year} Z. All rights reserved.</p>
          <div className={`d-flex gap-3 mt-2 mt-md-0 ${styles.legalLinks}`}>
            <a href="#" className={styles.link}>Privacy</a>
            <a href="#" className={styles.link}>Terms</a>
            <a href="#" className={styles.link}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
