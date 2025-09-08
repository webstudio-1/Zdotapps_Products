import React, { useState } from 'react';
import styles from './z.merit.module.css';
import meritImg from './images/Zmerit.jpeg'; // Replace with actual MERIT image

const engageData = [
  {
    id: 1,
    title: 'MERIT – Measure, Evaluate & Rank IT Talent',
    subtitle: 'Smart assessments for web developers',
    description:
      'MERIT is an intelligent exam and evaluation platform designed to test, analyze, and rank web developers on a scale of 1 to 10. By conducting structured assessments, MERIT identifies technical strengths, highlights areas for improvement, and helps individuals and organizations benchmark talent effectively.',
    features: [
      'Customizable online exams for web developers',
      'Skill-based evaluation with coding challenges',
      'AI-driven ranking on a 1–10 performance scale',
      'Detailed reports with insights & growth roadmap'
    ],
    image: meritImg,
    // ctaText: 'Start Assessment',
    ctaLink: '#',
    downloadLink: '#' // Replace with real link
  }
];

const Zmerit = () => {
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
      {/* MERIT Home Section */}
      <section className={styles.homeSection}>
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-md-11">
              <h1 className={`${styles.homeTitle} display-3 fw-bold mb-4`}>
                Evaluate Your Skills with <span className={styles.highlightText}>MERIT</span>
              </h1>
              <p className={`${styles.homeSubtitle} lead fw-semibold mb-4`}>
                Conduct. Analyze. Rank. Improve.
              </p>
              <p className={`${styles.homeDescription} mb-5`}>
                MERIT is more than just an exam system – it’s a complete assessment framework for web
                developers. From technical quizzes to coding challenges, MERIT helps you understand
                your current standing, ranks you on a scale of 1–10, and provides actionable insights
                for your career growth.
              </p>
              {/* Optional CTA */}
              {/* <a href="#solutions" className={styles.homeCtaButton}>Take Your Test</a> */}
            </div>
          </div>
        </div>
      </section>

      {/* MERIT Assessment Section */}
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
                  {/* <a
                    href={item.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.downloadButton}
                  >
                    <i className="bi bi-download"></i>
                    {item.ctaText}
                  </a> */}
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

export default Zmerit;
