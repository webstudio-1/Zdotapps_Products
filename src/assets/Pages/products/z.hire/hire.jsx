import React, { useState } from 'react';
import styles from './hire.module.css';
import station from './images/SS.jpeg';
import FACT from './images/FACT.webp';
import Zdot from './images/Zdotapps.webp';

const hireData = [ // Renamed engageData to hireData for clarity within this component
  {
    id: 1,
    title: 'Station-S – Startup Studio',
    subtitle: 'Live. Work. Learn. Play. Thrive.',
    description:
      'Station-S is a fully integrated Startup Studio in Sri City that nurtures ventures with programs, facilities, and platforms. It provides startups access to capability centers in design, software, hardware, finance, and recruitment – enabling faster innovation and growth.',
    features: [
      'Startup Programs (UI/UX, iOS, Android, Full Stack, Hardware)',
      'Capability Centers: Software, Hardware, Maker Shops, Design',
      'Talent development & career-oriented training',
      'Community-driven innovation hub in Sri City'
    ],
    image: station,
    ctaText: 'Explore Station-S',
    ctaLink: 'https://station-s.com/',
    downloadLink: 'https://station-s.com/'
  },
  {
    id: 2,
    title: 'FACT-Ops – Professional Services',
    subtitle: 'Formation, Accounting, Compliance, Taxation',
    description:
      'FACT-Ops delivers end-to-end professional services for startups and enterprises. From company formation to accounting, compliance, and taxation, FACT-Ops ensures efficiency, quality, and affordability in managing critical business operations.',
    features: [
      'Company Formation & Legal Setup',
      'End-to-end Accounting & Bookkeeping',
      'Regulatory Compliance & Documentation',
      'Comprehensive Tax Services (GST, IT, TDS)'
    ],
    image: FACT,
    ctaText: 'Visit FACT-Ops',
    ctaLink: 'https://fact-ops.com/home.html',
    downloadLink: 'https://fact-ops.com/home.html'
  },
  {
    id: 3,
    title: 'Z.APPS – Rapid App Development',
    subtitle: 'Your Own Capability Centers, Configured by You',
    description:
      'Z.APPS is a next-gen technology company offering rapid and scalable app development across Android, iOS, Web, AI, DevOps, and CloudOps. With its modular “capability centers” model, clients can configure customized services for their digital transformation journey.',
    features: [
      'Android & iOS App Development',
      'Full Stack Web Applications',
      'AI-powered Solutions & Copilots',
      'DevOps & CloudOps for scale & efficiency'
    ],
    image: Zdot,
    ctaText: 'Discover Z.APPS',
    ctaLink: 'https://zdotapps.com/',
    downloadLink: '/'
  }
];

const Zhire = () => {
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
    <div className={styles.hirePage}> {/* Changed to hirePage for semantic consistency */}
      {/* New Home Section for Z.hire */}
      <section className={styles.homeSection}>
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-md-11">
              <h1 className={`${styles.homeTitle} display-3 fw-bold mb-4`}>
                Build Your Vision. Scale Your Success. With <span className={styles.highlightText}>Z.hire</span>.
              </h1>
              <p className={`${styles.homeSubtitle} lead fw-semibold mb-4`}>
                Your Gateway to Innovation, Professional Services, and Rapid Development.
              </p>
              <p className={`${styles.homeDescription} mb-5`}>
                Z.hire brings together a powerful ecosystem of specialized services designed to accelerate your business growth. From nurturing innovative startups in our studio, to providing comprehensive professional and compliance services, and delivering cutting-edge rapid application development, Z.hire is your strategic partner for achieving operational excellence and digital transformation.
              </p>
              {/* Optional Call to Action */}
              {/* <a href="#solutions" className={styles.homeCtaButton}>Explore Our Services</a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Existing Hire Sections */}
      {hireData.map((item, index) => (
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
                  <h2
                    className={`${styles.sectionTitle} display-5 fw-bold mb-3`}
                  >
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
                    className={`img-fluid rounded-3 shadow-lg ${styles.hireImage}`} 
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

export default Zhire;