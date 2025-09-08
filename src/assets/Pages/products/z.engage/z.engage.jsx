import React, { useState } from 'react';
import styles from './z.engage.module.css';
import carelon from './images/CE.webp'
import lifecykul from './images/LC.webp'
import campuslife from './images/CL.webp'

const engageData = [
  {
    id: 1,
    title: 'Carelon.Engage – Employee Wellbeing',
    subtitle: 'Holistic engagement through fitness, arts & recreation',
    description:
      'Carelon.Engage is a comprehensive platform that blends physical activity tracking with creative, recreational, and social modules. It motivates employees with leaderboards, fitness challenges, and community-driven events.',
    features: [
      'Fitness tracking (steps, walking, running, cycling)',
      'Integration with Fitbit, Garmin, Apple, Health Connect',
      'Arts & recreation (music, painting, cooking, sports)',
      'Leaderboards & peer challenges'
    ],
    image: carelon,
    ctaText: 'Explore App',
    ctaLink: 'https://play.google.com/store/apps/details?id=com.carelon.service.app&hl=en_IN',
    downloadLink: 'https://play.google.com/store/apps/details?id=com.carelon.service.app&hl=en_IN'
  },
  {
    id: 2,
    title: 'LifeCykul – Fitness & Challenges',
    subtitle: 'Stay fit, join challenges, and win rewards',
    description:
      'LifeCykul encourages healthy living by making fitness fun. Users can track their walks, runs, or cycling sessions, join competitive challenges, and even win rewards while staying active.',
    features: [
      'Track walking, running, and cycling',
      'Participate in challenges & leaderboards',
      'Attractive prizes for winners',
      'Clean, gamified fitness experience'
    ],
    image: lifecykul,
    ctaText: 'Explore App',
    ctaLink: 'https://play.google.com/store/apps/details?id=life.cykul.com.lifeCykul&hl=en_IN',
    downloadLink: 'https://play.google.com/store/apps/details?id=life.cykul.com.lifeCykul&hl=en_IN'
  },
  {
    id: 3,
    title: 'Campus.Life – Student Engagement',
    subtitle: 'Connect, participate, and organize campus activities',
    description:
      'Campus.Life is designed for students, faculty, and administrators to stay engaged with campus events, book facilities, and receive personalized notifications for everything happening on campus.',
    features: [
      'Event updates & notifications',
      'Facility booking (gyms, halls, sports arenas)',
      'Skill competitions & campus-wide activities',
      'User-friendly campus management'
    ],
    image: campuslife,
    ctaText: 'Explore App',
    ctaLink: 'https://play.google.com/store/apps/details?id=com.campus.life.app&hl=en_IN',
    downloadLink: 'https://play.google.com/store/apps/details?id=com.campus.life.app&hl=en_IN'
  }
];

const Zengage = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors(prev => ({
      ...prev,
      [id]: true
    }));
  };

  const getFallbackImage = (title, color) => {
    return `https://via.placeholder.com/300x400/${color}/FFFFFF?text=${encodeURIComponent(title)}`;
  };

  return (
    <div className={styles.engagePage}>
      {/* New Home Section for Z.engage */}
      <section className={styles.homeSection}>
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-md-11">
              <h1 className={`${styles.homeTitle} display-3 fw-bold mb-4`}>
                Unlock Engagement. Empower Communities. <br /> Discover <span className={styles.highlightText}>Z.engage</span>.
              </h1>
              <p className={`${styles.homeSubtitle} lead fw-semibold mb-4`}>
                Your All-in-One Platform for Holistic Engagement, Wellbeing, and Vibrant Community Building.
              </p>
              <p className={`${styles.homeDescription} mb-5`}>
                Z.engage is a versatile and dynamic suite of applications designed to foster deeper connections, promote healthier lifestyles, and streamline community interactions across various domains. Whether it's enhancing employee wellbeing, energizing campus life, or making fitness a rewarding journey, Z.engage provides tailored experiences that drive participation and create thriving environments.
              </p>
              {/* Optional Call to Action */}
              {/* <a href="#solutions" className={styles.homeCtaButton}>Explore Our Solutions</a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Existing Engagement Sections */}
      {engageData.map((item, index) => (
        <section key={item.id} className={`${styles.contentSection} py-5`}>
          <div className="container py-5">
            <div className={`row align-items-center g-4 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              
              {/* Text Column */}
              <div className="col-lg-6">
                <div className={`${styles.contentWrapper} h-100 d-flex flex-column justify-content-center`}>
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
                      <li key={featureIndex} className={`${styles.featureItem} d-flex align-items-center mb-3`}>
                        <div className="me-3">
                          <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

export default Zengage;