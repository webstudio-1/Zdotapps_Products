import React from "react";
import styles from "./home.module.css";
import { FiCheck } from "react-icons/fi";

function Home5() {
  const plans = [1, 2, 3]; // just duplicate 3 cards

  return (
    <section className={styles.pricingSection}>
      <h2 className={styles.title}>Pricing</h2>

      <div className={styles.cardsWrapper}>
        {plans.map((plan, i) => (
          <div key={i} className={styles.card}>
            <h4 className={styles.planTitle}>Basic Plan</h4>
            <p className={styles.price}>₹1900/mo</p>
            <ul className={styles.features}>
              <li>
                <FiCheck className={styles.icon} /> Access to all agents
              </li>
              <li>
                <FiCheck className={styles.icon} /> 24/7 customer support
              </li>
              <li>
                <FiCheck className={styles.icon} /> User-friendly interface
              </li>
            </ul>

            <button className={styles.cta}>Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home5;
