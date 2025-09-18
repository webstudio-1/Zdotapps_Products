import React, { useState } from "react";
import styles from "./giDER.module.css";
import gidERImage from "../../../images/gider_black.png";

const GiDER = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your backend or email service call
    alert(`Thanks, ${formData.name}! We received your message.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className={styles.hero}>
      {/* Left: marketing text */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          Simplify. Track. <span className={styles.highlight}>giDER</span>
        </h1>

        <p className={styles.subtitle}>Laser-Focused Task Execution Platform</p>

        <p className={styles.description}>
          giDER helps developers, teams, and managers cut the noise and stay in
          pure execution mode. Bulk upload tasks, set priority & deadlines, and
          maintain a crystal-clear view from top to bottom.
        </p>

        <ul className={styles.features}>
          <li>Granular Task Breakdown</li>
          <li>Bulk Upload via CSV</li>
          <li>Priority, Status & Timeline</li>
          <li>gidBOX & gidNOTES Integrations</li>
        </ul>

        <a
          href="https://zdotapps.com/gidER/login.php"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          Start Executing with giDER
        </a>
      </div>

      {/* Right: contact form */}
      <div className={styles.formWrapper}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          {/* giDER Logo */}
          <img
            src={gidERImage}
            alt="giDER Logo"
            className={styles.formLogo}
          />

          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default GiDER;
