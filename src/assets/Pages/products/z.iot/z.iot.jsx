import React from "react";
import styles from "./z.iot.module.css";
import kirazeeeImage from "./images/kirazee_1.png";
import kirazeeImage from "../../../images/kirazee_new.png"; // Replace video with image

const Ziot = () => {
  return (
    <div className={styles.page}>
      {/* Fullscreen Image Background */}
      <img
        src={kirazeeeImage}
        alt="Kirazee"
        className={styles.fullScreenVideo} // reuse same class for sizing
      />

      {/* Overlay Content */}
      <div className={styles.overlay}>
        <div className={styles.contentWrapper}>
          <div className={styles.textCol}>
            <h1 className={styles.title}>
              <span className={styles.gradientText}>Kirazee</span>
              <br />
              Connecting the Future
            </h1>
   <p className={styles.description}>
              Kirazee brings Consumers, Businesses, and Delivery partners together in one powerful app order, manage, and deliver with ease.
          
            </p>
                <a
                href="https://kirazee.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-warning btn-lg yellow-text fw-bold"
              >
                {" "}
                Login to Kirazee
              </a>
          </div>

          <div className={styles.formCol}>
                <div className={styles.logoWrap}>
                        <img src={kirazeeImage} alt="a.auth logo" />
                      </div>
            <form className={styles.form}>
              {/* <h2>Contact Us</h2> */}
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ziot;
