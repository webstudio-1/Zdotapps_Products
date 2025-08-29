import React from "react";
import styles from "./z.flow.module.css";
import { FiZap, FiBarChart2, FiGlobe } from "react-icons/fi";

const ZFlow = () => {
  return (
    <div className={styles.zFlow}>
      <h1>Z.flow</h1>
      <p>
        Vector graphics and illustration, with a focus on simplicity and
        performance.
      </p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <FiZap /> Carelon Click Stream
        </div>
        <div className={styles.card}>
          <FiBarChart2 /> Life Cykul synchonization
        </div>
      </div>
    </div>
  );
};

export default ZFlow;
