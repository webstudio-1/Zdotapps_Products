import React, { useState } from 'react';
import styles from './z.games.module.css';
import gamesImg from './images/Tambola.jpg'; // Replace with actual games image

const engageData = [
  {
    id: 1,
    title: 'Z.games – Play & Learn at Station-S',
    subtitle: 'Fun, engagement, and knowledge through interactive games',
    description:
      'Z.games is a vibrant platform inside Station-S where entertainment meets learning. From classic games to knowledge-based quizzes, Z.games fosters community engagement while sharpening minds. Whether you’re solving a puzzle, hunting for treasure, or testing your coding knowledge, Z.games makes every moment exciting.',
    features: [
      'Tambola – A fun community number game',
      'Crossword – Boost vocabulary & problem solving',
      'Treasure Hunt – Team-based exploration challenges',
      'Hangman – Guess the words before time runs out',
      'MySQL Quiz – Test and improve your database skills'
    ],
    image: gamesImg,
    ctaText: 'Play Now',
    ctaLink: 'https://play.google.com/store/apps/details?id=com.campus.life.app&pcampaignid=web_share',
    downloadLink: 'https://play.google.com/store/apps/details?id=com.campus.life.app&pcampaignid=web_share' // Replace with real link
  }
];

const Zgames = () => {
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
      {/* Z.games Home Section */}
      <section className={styles.homeSection}>
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-md-11">
              <h1 className={`${styles.homeTitle} display-3 fw-bold mb-4`}>
                Play. Learn. Compete. <span className={styles.highlightText}>Z.games</span>
              </h1>
              <p className={`${styles.homeSubtitle} lead fw-semibold mb-4`}>
                Fun meets learning at Station-S.
              </p>
              <p className={`${styles.homeDescription} mb-5`}>
                With Z.games, Station-S transforms into a hub of interactive entertainment and
                skill-building. From thrilling community games like Tambola and Treasure Hunt to
                brain-teasing puzzles and coding quizzes, Z.games ensures there’s something for
                everyone. Come, challenge your friends and celebrate the joy of play!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
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
                    <i className="bi bi-controller"></i>
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

export default Zgames;