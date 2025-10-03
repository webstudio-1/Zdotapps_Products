import React from "react";
import styles from "./giDER.module.css";
import gidERImage from "../../../images/gider_black.png";
import { useNavigate } from "react-router-dom";

const GiDER = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login"); // Redirects to gidER login page
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Simplify. Track. <span className={styles.highlight}>gidER</span>
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

        {/* Updated Login button */}
        <button
          className={`btn btn-warning btn-lg ${styles.cta}`}
          onClick={handleButtonClick}
        >
          Login to gidER
        </button>
      </div>

      <div className={styles.formWrapper}>
        <form className={styles.contactForm}>
          <h5>Start executing your projects with</h5>
          <img src={gidERImage} alt="giDER Logo" className={styles.formLogo} />

          <label>
            Name
            <input type="text" name="name" placeholder="Your Name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="Your Email" />
          </label>
          <label>
            Message
            <textarea
              name="message"
              placeholder="Your Message"
              style={{ height: "90px" }}
            />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default GiDER;
