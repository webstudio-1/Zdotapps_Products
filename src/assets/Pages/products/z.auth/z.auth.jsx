import React, { useState } from 'react';
import styles from './z.auth.module.css';
import authImg from './images/authentication.jpg'; // Replace with an actual authentication-related image

const engageData = [
  {
    id: 1,
    title: 'Z.auth – Secure Identity & Access Management',
    subtitle: 'Protecting your digital world with seamless authentication',
    description:
      'Z.auth is a next-generation authentication and authorization platform designed to keep your applications and data secure. From enterprises to startups, Z.auth provides scalable, reliable, and user-friendly security solutions. With advanced protocols, real-time monitoring, and adaptive authentication, we make security effortless while ensuring trust.',
    features: [
      'Single Sign-On (SSO) – One login for all your apps',
      'Multi-Factor Authentication (MFA) – Extra layer of protection',
      'Role-Based Access Control – Manage permissions with ease',
      'Biometric & Passwordless Login – Future-ready authentication',
      'API Security & OAuth 2.0 Support – Secure app integrations',
      'Real-time Threat Detection – Stay ahead of breaches'
    ],
    image: authImg,
    ctaText: 'Get Started',
    ctaLink: '#',
    downloadLink: '#' // Replace with real link
  }
];

const Zauth = () => {
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
                Authenticate. Authorize. <span className={styles.highlightText}>Z.auth</span>
              </h1>
              <p className={`${styles.homeSubtitle} lead fw-semibold mb-4`}>
                Secure, seamless, and scalable identity solutions.
              </p>
              <p className={`${styles.homeDescription} mb-5`}>
                Z.auth empowers organizations to safeguard user accounts, protect sensitive data, 
                and deliver frictionless access experiences. By combining modern authentication 
                technologies with real-time analytics, Z.auth ensures that only the right people 
                get the right access at the right time — securely and effortlessly.
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
                    href={item.downloadLink}
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

export default Zauth;
