import { FiAlertTriangle, FiClock, FiDatabase, FiLayers, FiZap, FiShield } from "react-icons/fi";
import styles from "./home.module.css";

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
        <div className="row g-5 justify-content-center">

          {/* Problems */}
          <div className="col-md-6 text-start">
            <h3 className={`${styles.subtitle} fs-5 fw-semibold mb-4`}>The Problems</h3>
            {problems.map((item, index) => (
              <div key={index} className={`${styles.card} d-flex align-items-start mb-3 p-5`}>
                <div
                  className={`${styles.iconWrapper} ${
                    item.type === "red" ? styles.iconRed : styles.iconBlue
                  } me-3`}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="fs-6 fw-semibold mb-1">{item.title}</h4>
                  <p className="small mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="col-md-6 text-start">
            <h3 className={`${styles.subtitle} fs-5 fw-semibold mb-4`}>Our Solutions</h3>
            {solutions.map((item, index) => (
              <div key={index} className={`${styles.card} d-flex align-items-start mb-3 p-5`}>
                <div
                  className={`${styles.iconWrapper} ${
                    item.type === "blue" ? styles.iconBlue : styles.iconRed
                  } me-3`}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="fs-6 fw-semibold mb-1">{item.title}</h4>
                  <p className="small mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home2;
