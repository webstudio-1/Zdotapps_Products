import React, { useState } from 'react';
import styles from './z.games.module.css';
import gamesImg from './images/Tambola.jpg'; // Replace with actual games image
import spellbeeImg from './images/spell_bee.jpg'; // Replace with actual games image
import sudokoImg from './images/sudoko.png'; // Replace with actual games image



const engageData = [
  {
    id: 1,
    
    // subtitle: 'Z.games – Interactive fun and learning through games at Station-S.',
    description:
     'Z.games is an interactive Station-S platform that blends fun and learning through classic games, quizzes, and puzzles, promoting engagement and mental agility.',
    features: [
      'Tambola – A fun community number game',
      'Crossword – Boost vocabulary & problem solving',
      'Treasure Hunt – Team-based exploration challenges',
 
      'MySQL Quiz – Test and improve your database skills'
    ],
    image: gamesImg,
    ctaText: 'Play Now',
    downloadLink: 'https://play.google.com/store/apps/details?id=com.campus.life.app&pcampaignid=web_share' // Replace with real link
  },
  {
    id: 2,
  
    // subtitle: 'Z.Yelling Bee – Fun yelling contests that boost vocabulary and learning.',
    description:
      'Z.Yelling Bee is a fun, interactive Station-S platform that improves vocabulary, yelling skills, and quick thinking through practice rounds and competitive spelling challenges.',
    features: [
      
      'Rapid Fire – Quick yelling rounds to test speed',
 
      'Team Battles – Compete in groups for added fun',
      'Leaderboards – Track progress and celebrate winners'
    ],
    image: spellbeeImg, // Replace with your SpellBee image
    ctaText: 'Start Yelling',
    downloadLink: 'https://play.google.com/store/apps/details?id=com.campus.life.app&pcampaignid=web_share' // Replace with real link
  },
  {
    id: 3,
   
    // subtitle: 'Z.Sudoku – Classic number puzzle to boost logic and focus.',
    description:
      'Z.Sudoku offers classic Sudoku puzzles in varying levels to sharpen focus, logic, and problem-solving while keeping the mind entertained.',
    features: [
     
      'Daily Challenges – Keep your mind active every day',
      'Hints & Notes – Learn strategies while solving',
      'Timer Mode – Test speed and accuracy under pressure',
      'Progress Tracker – Monitor improvement and achievements' 
    ],
    image: sudokoImg, // Replace with your Sudoku image
    ctaText: 'Play Sudoku',
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
              {/* <p className={`${styles.homeSubtitle} lead fw-semibold mb-4`}>
                Fun meets learning at Station-S.
              </p>
              <p className={`${styles.homeDescription} mb-5`}>
                With Z.games, Station-S transforms into a hub of interactive entertainment and
                skill-building. From thrilling community games like Tambola and Treasure Hunt to
                brain-teasing puzzles and coding quizzes, Z.games ensures there’s something for
                everyone. Come, challenge your friends and celebrate the joy of play!
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className={`${styles.contentSection} py-5`}>
        <div className="container">
          <div className="row g-4">
            {engageData.map((item, index) => (
              <div key={item.id} className="col-lg-4 d-flex align-items-stretch">
                <div className={styles.gameCard}>
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
                  <div className={`${styles.contentWrapper} h-100 d-flex flex-column justify-content-center`}>
                    <h2 className={`${styles.sectionTitle} display-6 fw-bold mb-3`}>
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
                          className={`${styles.featureItem} d-flex align-items-center mb-2`}
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
                    <div className="mt-auto">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Zgames;