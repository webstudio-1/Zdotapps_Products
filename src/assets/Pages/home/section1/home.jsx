import React from 'react';
import Bg from '../../../images/HomeBanner.jpg';
import styles from './home.module.css';

function Home1() {
  const bgImageTopMargin = '50px'; // Define your desired margin-top here

  return (
    <main
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        minHeight: '100vh',
        position: 'relative', // Keep 'relative' for absolute children positioning
        overflow: 'hidden'
      }}
    >
      {/* Background Image Container */}
<div
  style={{
    position: 'absolute',
    top: bgImageTopMargin, // This acts as your margin-top for the background image
    left: '0',
    width: '100%',
    // Adjust height to ensure the image fits within the main container
    // and accounts for the top margin, preventing overflow.
    height: 'calc(100% + 315px)', // Corrected: 'calc()' expressions must be strings in JSX style objects.
    backgroundImage: `url(${Bg})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: -1, // Ensures the background image stays behind the content
  }}
></div>

      <div className="container my-auto">
        <h1
          className="fw-bold text-white mb-4"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1.3' }}
        >
          Unleash the Power of<br />AI Automation Today
        </h1>

        <button
          className={`${styles.ctaButton} btn btn-lg rounded-pill px-5 py-3`}
        >
          Get Started For Free
        </button>
      </div>

      {/* Glowing light effect */}
      <div className={`${styles.lightEffect} position-absolute bottom-0 mb-5`}></div>
    </main>
  );
}

export default Home1;