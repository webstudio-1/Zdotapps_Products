import React, { useState } from 'react';
import styles from './z.iot.module.css';
import weewaImg from './images/iot2.jpg'; // Replace with actual WEEWA image

const engageData = [
  {
    id: 1,
    title: 'WEEWA – Weather, Environment, Water & Air',
    subtitle: 'AI-powered insights for sustainable living',
    description:
      'WEEWA is a smart platform that combines real-time weather forecasting, environmental monitoring, and air & water quality analysis. Designed to empower individuals, communities, and organizations, WEEWA provides actionable insights to make healthier and eco-friendly lifestyle choices.',
    features: [
      'Accurate weather forecasts with AI-driven models',
      'Air quality index tracking with live updates',
      'Water resource monitoring & sustainability reports',
      'Personalized alerts for pollution & climate risks'
    ],
    image: weewaImg,
    ctaText: 'Try WEEWA',
    ctaLink: '#',
    downloadLink: '#' // Replace with real link
  }
];

const Ziot = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors((prev) => ({
      ...prev,
      [id]: true
    }));
  };

  const getFallbackImage = (title, color) => {
    return `https://via.placeholder.com/300x400/${color}/FFFFFF?text=${encodeURIComponent(
      title
    )}`;
  };

  return (
    <div className={styles.engagePage}>
      {/* IoT Home Section */}
      <section className={styles.homeSection}>
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-md-11">
              <h1 className={`${styles.homeTitle} display-3 fw-bold mb-4`}>
                Connecting the Future with <span className={styles.highlightText}>IoT</span>
              </h1>
              <p className={`${styles.homeSubtitle} lead fw-semibold mb-4`}>
                Smart Devices. Smarter Decisions. Sustainable Living.
              </p>
              <p className={`${styles.homeDescription} mb-5`}>
                Our IoT solutions bridge the physical and digital worlds, enabling seamless
                monitoring, automation, and analytics across diverse sectors. From smart homes and
                industries to healthcare and environment, IoT empowers data-driven innovation for a
                connected future.
              </p>
              {/* Optional CTA */}
              {/* <a href="#solutions" className={styles.homeCtaButton}>Discover IoT Solutions</a> */}
            </div>
          </div>
        </div>
      </section>

      {/* WEEWA Section */}
      {engageData.map((item, index) => (
        <section key={item.id} className={`${styles.contentSection} py-5`}>
          <div className="container py-5">
            <div
              className={`row align-items-center g-4 ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Text Column */}
              <div className="col-lg-6">
                <div
                  className={`${styles.contentWrapper} h-100 d-flex flex-column justify-content-center`}
                >
                  <h2 className={`${styles.sectionTitle} display-5 fw-bold mb-3`}>
                    {item.title}
                  </h2>

                  <p className={`${styles.sectionSubtitle} lead fw-semibold mb-3`}>
                    {item.subtitle}
                  </p>

                  <p className={`${styles.sectionDescription} mb-4`}>
                    {item.description}
                  </p>

                  <ul className={`${styles.featuresList} list-unstyled mb-4`}>
                    {item.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`${styles.featureItem} d-flex align-items-center mb-3`}
                      >
                        <div className="me-3">
                          <svg
                            className={styles.checkIcon}
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M20 6L9 17L4 12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Fixed Button with CSS module */}
                  <a
                    href={item.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.downloadButton}
                  >
                    <i className="bi bi-download"></i>
                    {item.ctaText}
                  </a>
                </div>
              </div>

              {/* Image Column */}
              <div className="col-lg-6">
                <div className={styles.imageWrapper}>
                  <img
                    src={
                      imageErrors[item.id]
                        ? getFallbackImage(
                            item.title,
                            index === 0 ? '4F46E5' : index === 1 ? '10B981' : 'F59E0B'
                          )
                        : item.image
                    }
                    alt={item.title}
                    className={`img-fluid rounded-3 shadow-lg ${styles.engageImage}`}
                    onError={() => handleImageError(item.id)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Ziot;
