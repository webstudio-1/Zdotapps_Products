import React from 'react';
import { FiAlertTriangle, FiClock, FiDatabase, FiLayers, FiZap, FiShield } from "react-icons/fi";
import styles from "./home.module.css";

const features = [
  {
    icon: <FiAlertTriangle />,
    title: "Too Many Disconnected Tools",
    text: "Teams waste time switching between dozens of fragmented applications.",
    type: "problem"
  },
  {
    icon: <FiLayers />,
    title: "Unified Intelligent Platform",
    text: "One seamless workspace that connects all your tools and workflows.",
    type: "solution"
  },
  {
    icon: <FiClock />,
    title: "Wasted Time on Repetitive Tasks",
    text: "Manual processes drain productivity and lead to costly human errors.",
    type: "problem"
  },
  {
    icon: <FiZap />,
    title: "Smart Automation Engine",
    text: "AI-powered automation that handles repetitive tasks with precision.",
    type: "solution"
  },
  {
    icon: <FiDatabase />,
    title: "Scattered Data Everywhere",
    text: "Critical information is siloed across systems, making insights impossible.",
    type: "problem"
  },
  {
    icon: <FiShield />,
    title: "Centralized Data Intelligence",
    text: "Secure, unified data that provides real-time insights and analytics.",
    type: "solution"
  }
];

function Home2() {
  return (
    <section className={styles.section}>
      <div className="container text-center">
        <h2 className="fw-bold display-5 mb-4">Why Teams Struggle. How We Fix It.</h2>
        <p className="lead text-white-50 mx-auto mb-5" style={{ maxWidth: '700px' }}>
          Stop juggling disconnected tools and wasting time on manual work. We provide a single, intelligent platform to unify your workflows and data.
        </p>

        <div className="row g-4">
          {features.map((item, index) => (
            <div key={index} className="col-lg-6 d-flex align-items-stretch">
              <div className={`${styles.card} ${item.type === 'problem' ? styles.problemCard : styles.solutionCard} d-flex align-items-start p-4 w-100`}>
                <div className={`${styles.iconWrapper} me-4`}>
                  {item.icon}
                </div>
                <div className="text-start">
                  <h3 className="fs-5 fw-bold mb-2">{item.title}</h3>
                  <p className="mb-0 text-white-50">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home2;