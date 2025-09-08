import { FiAlertTriangle, FiClock, FiDatabase, FiLayers, FiZap, FiShield } from "react-icons/fi";
import styles from "./home.module.css";
import React from "react";

const problems = [
  {
    icon: <FiAlertTriangle />,
    title: "Too Many Disconnected Tools",
    text: "Teams waste time switching between dozens of fragmented applications.",
    type: "red"
  },
  {
    icon: <FiClock />,
    title: "Wasted Time on Repetitive Tasks",
    text: "Manual processes drain productivity and lead to costly human errors.",
    type: "red"
  },
  {
    icon: <FiDatabase />,
    title: "Scattered Data Everywhere",
    text: "Critical information is siloed across systems, making insights impossible.",
    type: "red"
  }
];

const solutions = [
  {
    icon: <FiLayers />,
    title: "Unified Intelligent Platform",
    text: "One seamless workspace that connects all your tools and workflows.",
    type: "blue"
  },
  {
    icon: <FiZap />,
    title: "Smart Automation Engine",
    text: "AI-powered automation that handles repetitive tasks with precision.",
    type: "blue"
  },
  {
    icon: <FiShield />,
    title: "Centralized Data Intelligence",
    text: "Secure, unified data that provides real-time insights and analytics.",
    type: "blue"
  }
];

function Home2() {
  return (
    <section className={styles.section}>
      <div className="container text-center">
        <h2 className="fw-bold mb-5">Why Teams Struggle and How We Fix It</h2>

        {/* Titles for Problems and Solutions */}
        <div className="row g-5 justify-content-center mb-4"> {/* mb-4 provides spacing below the titles */}
          <div className="col-md-6 text-start">
            <h3 className={`${styles.subtitle} fs-5 fw-semibold`}>The Problems</h3>
          </div>
          <div className="col-md-6 text-start">
            <h3 className={`${styles.subtitle} fs-5 fw-semibold`}>Our Solutions</h3>
          </div>
        </div>

        {/* Paired Problem and Solution Cards */}
        {Array.from({ length: Math.max(problems.length, solutions.length) }).map((_, index) => (
          <div key={index} className="row g-5 mb-4 align-items-stretch"> {/* Each pair in its own row, g-5 for gap, mb-4 for row spacing */}
            {/* Problem Card */}
            <div className="col-md-6">
              {problems[index] && ( // Only render if a problem item exists at this index
                <div className={`${styles.card} d-flex align-items-start p-5 h-100`}> {/* h-100 makes the card fill the column height */}
                  <div
                    className={`${styles.iconWrapper} ${
                      problems[index].type === "red" ? styles.iconRed : styles.iconBlue
                    } me-3`}
                  >
                    {problems[index].icon}
                  </div>
                  <div className="text-start">
                    <h4 className="fs-6 fw-semibold mb-1">{problems[index].title}</h4>
                    <p className="small mb-0">{problems[index].text}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Solution Card */}
            <div className="col-md-6">
              {solutions[index] && ( // Only render if a solution item exists at this index
                <div className={`${styles.card} d-flex align-items-start p-5 h-100`}> {/* h-100 makes the card fill the column height */}
                  <div
                    className={`${styles.iconWrapper} ${
                      solutions[index].type === "blue" ? styles.iconBlue : styles.iconRed
                    } me-3`}
                  >
                    {solutions[index].icon}
                  </div>
                  <div className="text-start">
                    <h4 className="fs-6 fw-semibold mb-1">{solutions[index].title}</h4>
                    <p className="small mb-0">{solutions[index].text}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home2;