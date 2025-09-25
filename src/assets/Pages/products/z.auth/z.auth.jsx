import React, { useState } from 'react';
import styles from './z.auth.module.css';
import aAuthLogo from '../../../images/auth_wlogo.png'; // ← your logo file
import { Link } from "react-router-dom";

export default function ZAuth() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Form submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className={styles.authSection}>
      <div className={styles.backgroundShapes}></div>

      <div className="container h-150">
        {/* Top Center Heading */}
        <div className={styles.topHeading}>
          {/* <h1 className={styles.fadeIn}>
            Secure. Authenticate. <span> Z.auth</span>
          </h1> */}
        </div>

        <div className="row align-items-center h-100 g-5">
          {/* Left Content */}
         <div className={`col-lg-6 ${styles.leftContent}`}>
  <h2 className={styles.fadeIn}>
    Authenticate. Authorize. <span>Z.auth</span>
  </h2>
  <p className={styles.fadeInDelay}>
    Secure, seamless, and scalable identity solutions for modern enterprises.
  </p>
  <ul className={styles.fadeInDelay2}>
    <li>✔ Enterprise-grade security</li>
    <li>✔ Seamless integration</li>
    <li>✔ Scalable cloud architecture</li>
    <li>✔ Adaptive Multi-Factor Authentication</li>
    <li>✔ Centralized Access Management</li>
    <li>✔ Comprehensive Compliance & Audit</li>
  </ul>

<h5 className="text-start">
  <Link to="#" className={`btn btn-outline-warning btn-lg ${styles.btnYellow}`}>
    Login to z.auth
  </Link>
</h5>


</div>

          {/* Right Form */}
          <div className="col-lg-4 ms-auto">
            <div className={`${styles.contactCard} ${styles.floatAnim}`}>
              <div className={styles.logoWrap}>
                <img src={aAuthLogo} alt="a.auth logo" />
              </div>
              <form onSubmit={handleSubmit} className={styles.formInner}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
