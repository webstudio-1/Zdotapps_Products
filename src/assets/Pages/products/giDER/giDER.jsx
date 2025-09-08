import React, { useState } from 'react';
import styles from './giDER.module.css';
import giderImg from './images/giDER.png'; // Replace with an actual authentication-related image

const engageData = [
  {
    id: 1,
    title: 'giDER – Smart Expense & Reimbursement Management',
    subtitle: 'Simplifying expense tracking for teams and businesses',
    description:
      'giDER is a modern expense and reimbursement management solution that helps organizations control spending, streamline approvals, and ensure compliance. From startups to enterprises, giDER makes expense reporting effortless, transparent, and efficient. With automation, real-time insights, and digital workflows, giDER eliminates paperwork and empowers smarter financial decisions.',
    features: [
      'Automated Expense Tracking – Capture and manage expenses instantly',
      'Digital Approvals – Fast, paperless reimbursement workflows',
      'Policy Compliance – Ensure every claim follows company rules',
      'Receipt Upload & OCR – Scan, upload, and verify receipts with ease',
      'Real-time Insights & Reports – Track spending across teams',
      'Seamless Integrations – Connect with payroll and accounting tools'
    ],
    image: giderImg, // Replace with the correct giDER image import
    ctaText: 'Start Using giDER',
    ctaLink: 'https://zdotapps.com/gidER/login.php',
    downloadLink: '#' // Replace with real link
  }
];


const GiDER = () => {
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
      {/* Z.auth Home Section */}
      <section className={styles.homeSection}>
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-md-11">
            <h1 className={`${styles.homeTitle} display-3 fw-bold mb-4`}>
                Simplify. Track. <span className={styles.highlightText}>giDER</span>
            </h1>
            <p className={`${styles.homeSubtitle} lead fw-semibold mb-4`}>
                Smart expense and reimbursement management for modern teams.
            </p>
            <p className={`${styles.homeDescription} mb-5`}>
                giDER helps organizations streamline expense reporting, control budgets, 
                and ensure compliance with ease. With automated tracking, digital approvals, 
                and real-time insights, giDER reduces manual effort and delivers complete 
                transparency — so your team can focus on what truly matters.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

                  {/* CTA Button */}
                  <a
                    href={item.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.downloadButton}
                  >
                    <i className="bi bi-shield-lock"></i>
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
                            index === 0 ? '2563EB' : '10B981'
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

export default GiDER;
