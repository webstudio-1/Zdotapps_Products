import React from "react";
import styles from "./footer.module.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row gy-4">
          {/* Brand Column */}
          <div className="col-lg-4 col-md-12">
            <a href="#" className={styles.logo}>Z.</a>
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
                <a href="#" className={styles.link}>Features</a><br />
                <a href="#" className={styles.link}>Integrations</a><br />
                <a href="#" className={styles.link}>Pricing</a><br />
                <a href="#" className={styles.link}>Changelog</a>
              </div>
              <div className="col-6 col-lg-4">
                <h4 className={styles.groupTitle}>Company</h4>
                <a href="#" className={styles.link}>About</a><br />
                <a href="#" className={styles.link}>Blog</a><br />
                <a href="#" className={styles.link}>Careers</a><br />
                <a href="#" className={styles.link}>Contact</a>
              </div>
              <div className="col-6 col-lg-4">
                <h4 className={styles.groupTitle}>Resources</h4>
                <a href="#" className={styles.link}>Docs</a><br />
                <a href="#" className={styles.link}>API</a><br />
                <a href="#" className={styles.link}>Guides</a><br />
                <a href="#" className={styles.link}>Support</a>
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
