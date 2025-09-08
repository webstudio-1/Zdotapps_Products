import React from "react";
import styles from "./pricing.module.css";

const Pricing = () => {
  return (
    <section className={styles.comingSoonSection}>
      <div className="container text-center">
        <h1 className={styles.title}>Pricing</h1>
        <p className={styles.subtitle}>We’re working hard to bring you something amazing.</p>
        <div className={styles.card}>
          <h2 className={styles.comingSoonText}>Coming Soon</h2>
          <p className={styles.description}>
            Stay tuned! New pricing are on their way to make your experience
            even better.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
