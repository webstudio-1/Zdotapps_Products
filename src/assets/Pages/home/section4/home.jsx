import React from "react";
import styles from "./home.module.css";
import { FiLink, FiZap, FiSend } from "react-icons/fi";

function Home4() {
  const steps = [
    {
      icon: <FiLink />,
      title: "Connect",
      text: "Link all your existing tools and data sources in minutes."
    },
    {
      icon: <FiZap />,
      title: "Automate",
      text: "Set up intelligent workflows that run seamlessly in the background."
    },
    {
      icon: <FiSend />,
      title: "Execute",
      text: "Watch your team's productivity soar with AI-powered efficiency."
    }
  ];

  return (
    <section className={styles.stepsSection}>
      <div className="container text-center">
        <h2 className="fw-bold display-5 mb-3">From Idea to Execution in Minutes</h2>
        <p className="lead text-white-50 mx-auto mb-5" style={{ maxWidth: '700px' }}>
          Getting started is simple. Follow these three steps to transform your workflow.
        </p>

        <div className={styles.stepsWrapper}>
          {/* Connecting Line - Styled in CSS */}
          <div className={styles.connectingLine}></div>

          <div className="row g-5 justify-content-center">
            {steps.map((step, index) => (
              <div key={index} className="col-md-4">
                <div className={styles.stepCard}>
                  <div className={styles.iconWrapper}>
                    <div className={styles.stepNumber}>{index + 1}</div>
                    {step.icon}
                  </div>
                  <h3 className="fs-5 fw-bold mb-2 mt-4">{step.title}</h3>
                  <p className="text-white-50 mb-0">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home4;