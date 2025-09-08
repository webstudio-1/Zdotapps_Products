import React from "react";
import styles from "./home.module.css";
import { FiLink, FiZap, FiSend } from "react-icons/fi";

function Home4() {
  const steps = [
    {
      icon: <FiLink className={styles.icon} />,
      title: "Connect",
      text: "Link all your existing tools and data sources in minutes."
    },
    {
      icon: <FiZap className={styles.icon} />,
      title: "Automate",
      text: "Set up intelligent workflows that run seamlessly in the background."
    },
    {
      icon: <FiSend className={styles.icon} />,
      title: "Execute",
      text: "Watch your team's productivity soar with AI-powered efficiency."
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container text-center">
        <h2 className="fw-bold mb-2">From Idea to Execution in Minutes</h2>
        <p className={`${styles.subtitle} mb-5`}>
          Getting started is simple. Follow these three steps to transform your workflow.
        </p>

        <div className="row g-4 justify-content-center">
          {steps.map((step, index) => (
            <div key={index} className="col-md-4">
              <div className={styles.step}>
                <div className={styles.iconWrapper}>{step.icon}</div>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home4;
