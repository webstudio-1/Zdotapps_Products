import React, { useState } from 'react';
import styles from './z.engage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import yfsImage from './images/yfs.png';
import lifeImage from './images/life.webp';
import carelonImage from './images/carelon.webp';
import campus_lifeImage from './images/campus_life.webp';
import swagramImage from './images/swagram.png';
import iosBadge from './images/ios.png';
import playstoreBadge from './images/playstore.png';

const cardsData = [
  {
    title: 'Carelon',
    bgColor: '#7952E0',
    features: [
      'Track progress visually across stages.',
      'Customize for sales, marketing, or service.',
      'Filter opportunities by criteria.',
      'Collaborate with your team in real-time.',
    ],
    image: carelonImage,
    alt: 'Mobile App Pipelines',
    iosLink: 'https://apps.apple.com/in/app/carelon-engage/id1668110764',
    androidLink: 'https://play.google.com/store/apps/details?id=com.carelon.service.app&hl=en_IN',
  },
  {
    title: 'CampusLife',
    bgColor: '#5009B5',
    features: [
      'See full customer history at a glance.',
      'Integrate emails, calls, and notes.',
      'Never miss a follow-up again.',
      'Personalize outreach with context.',
    ],
    image: campus_lifeImage,
    alt: 'Customer 360 View',
    iosLink: 'https://apps.apple.com/in/app/campus-life/id6737402090',
    androidLink: 'https://play.google.com/store/apps/details?id=com.campus.life.app&hl=en_IN',
  },
  {
    title: 'LifeCykul',
    bgColor: '#32a739',
    features: [
      'Manage WhatsApp, Email, Calls in one place.',
      'Auto-log every customer interaction.',
      'Respond faster with templates.',
      'Track response times and SLAs.',
    ],
    image: lifeImage,
    alt: 'WhatsApp Chat',
    iosLink: 'https://apps.apple.com/in/app/life-cykul/id1410238739',
    androidLink: 'https://play.google.com/store/apps/details?id=life.cykul.com.lifeCykul&hl=en_IN',
  },
  {
    title: 'Swagraam',
    bgColor: '#fe7200',
    features: [
      'Set triggers for follow-ups and reminders.',
      'Auto-assign leads to the right rep.',
      'Send welcome emails or SMS automatically.',
      'Reduce manual work by 70%.',
    ],
    image: swagramImage,
    alt: 'Workflow Automation',
    androidLink: 'https://play.google.com/store/apps/details?id=com.swagraam.service.app&hl=en_IN',
  },
  {
    title: 'Youth for Seva',
    bgColor: '#8b0205',
    features: [
      'Access CRM on iOS and Android.',
      'Log calls, update deals, add notes on the go.',
      'Works offline — syncs when back online.',
      'Mobile-optimized for speed and ease.',
    ],
    image: yfsImage,
    alt: 'Mobile CRM App',
    iosLink: 'https://apps.apple.com/in/app/youth-for-seva/id6443999296',
    androidLink: 'https://play.google.com/store/apps/details?id=com.youthfor.seva.app&hl=en_IN',
  },
];

const Zengage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => setCurrentIndex(index);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % cardsData.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);

  return (
    <div className={styles.container}>
  <h1 className={styles.h1}>Platform from all your engagements</h1>
  <p className={styles.tagline}>
    Streamline your workflow, boost productivity, and close more deals.
  </p>

  {/* Navigation Tabs */}
  <div className={styles['nav-tabs']}>
    {cardsData.map((card, index) => (
      <button
        key={index}
        className={styles['tab-btn']}
        onClick={() => goToSlide(index)}
        style={{
          backgroundColor: currentIndex === index ? card.bgColor : '#fff',
          color: currentIndex === index ? '#fff' : '#000',
        }}
      >
        {card.title}
      </button>
    ))}
  </div>

  {/* Side-by-side layout */}
  <div className={styles['side-by-side']}>
    {/* Carousel */}
    <div className={styles['carousel-container']}>
      <div
        className={styles['carousel-wrapper']}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={styles['feature-card']}
            style={{ backgroundColor: currentIndex === index ? card.bgColor : '#fffdf2' }}
          >
            <div className={styles['feature-text']}>
              <h2 className={styles['feature-text-h2']}>{card.title}</h2>
              <ul>
                {card.features.map((feature, i) => (
                  <li key={i} className={styles['feature-text-li']}>{feature}</li>
                ))}
              </ul>

              {/* Store badges */}
              <div className={styles.storeBadges}>
                {card.iosLink && (
                  <a href={card.iosLink} target="_blank" rel="noopener noreferrer">
                    <img src={iosBadge} alt="Download on the App Store" />
                  </a>
                )}
                {card.androidLink && (
                  <a href={card.androidLink} target="_blank" rel="noopener noreferrer">
                    <img src={playstoreBadge} alt="Get it on Google Play" />
                  </a>
                )}
              </div>

              <button className={styles['btn-primary']}>Download Now</button>

              {/* Dots inside the card */}
              <div className={styles.cardDots}>
                {cardsData.map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`${styles.dot} ${currentIndex === dotIndex ? styles.active : ''}`}
                    onClick={() => goToSlide(dotIndex)}
                  />
                ))}
              </div>
            </div>

            <div className={styles['image-wrapper']}>
              <img src={card.image} alt={card.alt} />
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls */}
      <div className={styles.controls}>
        <button
          type="button"
          className={styles['control-btn']}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          type="button"
          className={styles['control-btn']}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>

    {/* Contact form */}
    <div className={styles.contactFormWrapper}>
      <h2>Contact Us</h2>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className={styles['btn-primary']}>Submit</button>
      </form>
    </div>
  </div>
</div>

  );
};

export default Zengage;
