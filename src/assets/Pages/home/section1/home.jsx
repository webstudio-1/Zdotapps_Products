import React from 'react';
import styles from './home.module.css';

function Home1() {
  return (
    <main 
      className="d-flex flex-column justify-content-center align-items-center text-center" 
      style={{ 
        minHeight: '100vh', 
        background: 'radial-gradient(circle at center, #0b0b3d 0%, #050517 100%)', // Dark blue gradient
        position: 'relative',
        overflow: 'hidden'
      }}
    >
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
