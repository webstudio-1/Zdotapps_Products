import React from "react";
import styles from "./home.module.css";
import { FiZap, FiUsers, FiShield, FiBarChart2, FiCpu, FiGlobe } from "react-icons/fi";

const features = [
  {
    icon: <FiZap />,
    title: "Smart Automation",
    text: "AI-powered workflows that eliminate repetitive tasks and boost productivity."
  },
  {
    icon: <FiUsers />,
    title: "Real-Time Collaboration",
    text: "Seamless teamwork with live editing, instant messaging, and shared workspaces."
  },
  {
    icon: <FiShield />,
    title: "Secure Cloud Storage",
    text: "Enterprise-grade security with encrypted data and compliance monitoring."
  },
  {
    icon: <FiBarChart2 />,
    title: "Advanced Analytics",
    text: "Deep insights and predictive analytics to drive smarter business decisions."
  },
  {
    icon: <FiCpu />,
    title: "AI Assistant",
    text: "Intelligent support that learns your preferences and anticipates your needs."
  },
  {
    icon: <FiGlobe />,
    title: "Global Integration",
    text: "Connect with 1000+ apps and services through powerful API integrations."
  }
];

function Home3() {
  return (
    <section className={styles.featureSection}>
      <div className="container text-center">
        <h2 className="fw-bold display-5 mb-3">Everything You Need, All in One Place</h2>
        <p className="lead text-white-50 mx-auto mb-5" style={{ maxWidth: '700px' }}>
          Powerful features designed to transform how your team works together.
        </p>

        <div className="row g-4 justify-content-center">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-4 d-flex align-items-stretch">
              <div className={`${styles.featureCard} text-center p-4 p-lg-5 w-100`}>
                <div className={styles.iconWrapper}>
                  {feature.icon}
                </div>
                <h3 className="fs-5 fw-bold mb-3">{feature.title}</h3>
                <p className="text-white-50 mb-0">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home3;