import React from "react";
import styles from "./z.flow.module.css";
import { FiZap, FiBarChart2 } from "react-icons/fi";

const ZFlow = () => {
  return (
    <div className={`d-flex flex-column align-items-center justify-content-center text-center min-vh-100 ${styles.zFlow}`}>
      
    <div className="container">
      <h1 className="fw-bold mb-3">{`Z.flow`}</h1>
      <p className="mb-4">{`Vector graphics and illustration, with a focus on simplicity and performance.`}</p>

      <div className="row g-4 justify-content-center w-100">
        <div className="col-12 col-md-6">
          <div className={`d-flex align-items-center justify-content-center gap-3 p-5 rounded-3 ${styles.card}`} onClick={() => window.open("https://zdotapps.com/carelon_issueTracker/clickstream/", "_self")}>
            <FiZap size={32} />
            Carelon Click Stream
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className={`d-flex align-items-center justify-content-center gap-3 p-5 rounded-3 ${styles.card}`}>
            <FiBarChart2 size={32} />
            Life Cykul synchronization
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ZFlow;
