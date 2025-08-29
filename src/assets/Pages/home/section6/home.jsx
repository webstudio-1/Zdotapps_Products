import React from "react";
import styles from "./home.module.css";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Mounika Gadiraju",
    role: "VP of Operations at TFT",
    feedback:
      "This platform transformed how our team works. We've reduced manual tasks by 80% and increased productivity dramatically.",
    img: "https://via.placeholder.com/40", // replace with real image
  },
  {
    name: "Jahnavi Gadiraju",
    role: "CTO at TFT",
    feedback:
      "The AI automation is incredible. What used to take hours now happens in minutes. It's like having a digital workforce.",
    img: "https://via.placeholder.com/40", // replace with real image
  },
  {
    name: "Harika Gadiraju",
    role: "Project Manager at TFT",
    feedback:
      "Finally, all our tools work together seamlessly. The unified dashboard gives us insights we never had before.",
    img: "https://via.placeholder.com/40", // replace with real image
  },
];

function Home6() {
  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.heading}>Trusted by Teams Worldwide</h2>
      <p className={styles.subheading}>
        Join thousands of companies that have transformed their workflows with our platform.
      </p>

      <div className={styles.cardsWrapper}>
        {testimonials.map((t, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className={styles.starIcon} />
              ))}
            </div>
            <p className={styles.feedback}>"{t.feedback}"</p>
            <div className={styles.profile}>
              <img src={t.img} alt={t.name} className={styles.avatar} />
              <div>
                <h4 className={styles.name}>{t.name}</h4>
                <p className={styles.role}>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home6;
