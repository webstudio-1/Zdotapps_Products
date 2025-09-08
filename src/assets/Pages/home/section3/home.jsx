import React from "react";
import styles from "./home.module.css";
import { FiZap, FiUsers, FiShield, FiBarChart2, FiCpu, FiGlobe } from "react-icons/fi";

function Home3() {
  const features = [
    {
      icon: <FiZap className={styles.icon} />, // Applying class directly
      title: "Smart Automation",
      text: "AI-powered workflows that eliminate repetitive tasks and boost productivity."
    },
    {
      icon: <FiUsers className={styles.icon} />,
      title: "Real-Time Collaboration",
      text: "Seamless teamwork with live editing, instant messaging, and shared workspaces."
    },
    {
      icon: <FiShield className={styles.icon} />,
      title: "Secure Cloud Storage",
      text: "Enterprise-grade security with encrypted data and compliance monitoring."
    },
    {
      icon: <FiBarChart2 className={styles.icon} />,
      title: "Advanced Analytics",
      text: "Deep insights and predictive analytics to drive smarter business decisions."
    },
    {
      icon: <FiCpu className={styles.icon} />,
      title: "AI Assistant",
      text: "Intelligent support that learns your preferences and anticipates your needs."
    },
    {
      icon: <FiGlobe className={styles.icon} />,
      title: "Global Integration",
      text: "Connect with 1000+ apps and services through powerful API integrations."
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container text-center">
        <h2 className="fw-bold mb-2">Everything You Need, All in One Place</h2>
        <p className={`${styles.subtitle} mb-5`}>
          Powerful features designed to transform how your team works together.
        </p>

        <div className="row g-4 justify-content-center">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className={`${styles.card} h-100 p-4`}> {/* Changed to p-4 for 1.5rem padding */}
                {feature.icon}
                <h4 className={styles.cardTitle}>{feature.title}</h4>
                <p className={styles.cardText}>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home3;