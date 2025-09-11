import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import the useNavigate hook
import Bg from '../../../images/HomeBanner.jpg';
import styles from './home.module.css';

function Home1() {
  const bgImageTopMargin = '50px';
  const navigate = useNavigate(); // 2. Initialize the navigate function

  // 3. Create a function to handle the button click
  const handleGetStartedClick = () => {
    navigate('/login'); // This will navigate to the /login route
  };

  return (
    <main
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Image Container */}
      <div
        style={{
          position: 'absolute',
          top: bgImageTopMargin,
          left: '0',
          width: '100%',
          height: 'calc(100% + 315px)',
          backgroundImage: `url(${Bg})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: -1,
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
          onClick={handleGetStartedClick} // 4. Add the onClick event handler to the button
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