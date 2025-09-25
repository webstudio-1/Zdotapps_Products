import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Corrected path
// import zflowSideImage from './images/zflow_hp_bg.png';

import meritLogo from '../../../images/merit.png';
import meritLogo1 from '../../../images/merit_wlogo.png';

const Zmerit = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Advanced Proctoring',
      desc: 'Tab-switch detection, facial movement tracking, and camera-based monitoring.'
    },
    {
      title: 'Plug-and-Play Setup',
      desc: 'Quick deployment, no complex integrations needed.'
    },
    {
      title: 'Rich Evaluation Metrics',
      desc: 'Beyond scores: evaluate knowledge depth, behavior, and integrity.'
    },
    {
      title: 'Scalable & Secure',
      desc: 'Supports large-scale testing with enterprise-grade security.'
    },
    {
      title: 'Customizable Experience',
      desc: 'Enable/disable proctoring features as per test requirements.'
    }
  ];

  return (
    <>
      {/* Bootstrap 5 CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />

      {/* Local fixes: keep content below fixed header and prevent horizontal overflow */}
      <style>{`
        :root { --header-height: 0px; }
        .zmerit-page { padding-top: var(--header-height); overflow-x: hidden; }
        .zmerit-hero { min-height: calc(100svh - var(--header-height)); display: flex; align-items: center; background-color: #111318; color: #ffffff; }
        .feature-icon { width: 28px; height: 28px; }
        .zmerit-illustration { max-height: calc(100svh - var(--header-height) - 24px); width: 100%; height: auto; object-fit: contain; object-position: right top; display: block; margin-left: auto; }
        .glass-card { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.25); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-radius: 16px; box-shadow: 0 8px 30px rgba(0,0,0,0.25); min-height: 520px; }
        .glass-input { background: rgba(0,0,0,0.25); color: #ffffff; border-color: rgba(255,255,255,0.35); }
        .glass-input::placeholder { color: rgba(255,255,255,0.7); }
        .form-overlay { width: 460px; max-width: 98%; }
      `}</style>

        <section className="zmerit-page zmerit-hero">
          <div className="container">
          <div className="row align-items-center">
            {/* Left content */}
            <div className="col-lg-7 col-xl-7">
              <div className="mb-3 pe-5">
                <img src={meritLogo1} alt="Z.merit" style={{ height: 84, marginLeft: -25, marginTop: -150 }} />
              </div>
              <h1 className="display-3 fw-bold mb-5 text-white" style={{ lineHeight: 1.1, marginTop: -60 }}>
                <span>Assess.</span>{' '}
                <span className="text-warning">Trust.</span>{' '}
                <span>Improve.</span>
              </h1>
              <p className="lead fs-4 mb-4 text-white-50" style={{ maxWidth: 800 }}>
                <strong>Z.Merit – Intelligent, secure, and plug-and-play merit evaluation that measures more than just answers.</strong>
              </p>
              <div className="d-flex flex-column gap-3 mb-4">
                {/* Four highlighted points with outlined icons */}
                <div className="d-flex align-items-start">
                  <svg className="feature-icon me-3 mt-1" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="7"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                  <p className="mb-0 fs-5 text-white"><strong className="text-warning">Advanced Proctoring</strong> – Tab-switch detection, facial movement tracking, and camera-based monitoring.</p>
                </div>
                <div className="d-flex align-items-start">
                  <svg className="feature-icon me-3 mt-1" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 2v4M15 2v4"/>
                    <path d="M7 8h10v3a5 5 0 0 1-5 5h-1v6H9v-6a5 5 0 0 1-5-5V8h3"/>
                  </svg>
                  <p className="mb-0 fs-5 text-white"><strong className="text-warning">Plug-and-Play Setup</strong> – Quick deployment, no complex integrations needed.</p>
                </div>
                <div className="d-flex align-items-start">
                  <svg className="feature-icon me-3 mt-1" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                  <p className="mb-0 fs-5 text-white"><strong className="text-warning">Rich Evaluation Metrics</strong> – Beyond scores: evaluate knowledge depth, behavior, and integrity.</p>
                </div>
                <div className="d-flex align-items-start">
                  <svg className="feature-icon me-3 mt-1" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="10" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <p className="mb-0 fs-5 text-white"><strong className="text-warning">Scalable & Secure</strong> – Supports large-scale testing with enterprise-grade security.</p>             
                </div>
         <div className="d-flex align-items-start mt-3 ">
  <p className="mb-0 fs-3 text-white">
    <strong className="text-warning">
      <a
        href="https://zdotapps.com/ZdotMerit/screening"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-warning btn-lg text-decoration-none"
      >
        Login to Z.merit
      </a>
    </strong>
  </p>
</div>


              </div>

              {/* CTA removed; form is shown on the right image */}
            </div>
            {/* Right image with glass form overlay */}
            <div className="col-lg-5 col-xl-5 d-none d-lg-block pe-0">
              <div className="d-flex justify-content-end">
                <div className="form-overlay">
                <div className="card glass-card border-0">
                  <div className="card-header bg-transparent border-0 text-center pt-4">
                    <h6 className="mb-1 text-white fw-bold fs-3 mt-3">Start Your Talent Hunt With Z.hire</h6>
                  </div>
                  <div className="card-body pb-4 text-white-75">
                    <form onSubmit={(e)=>e.preventDefault()}>
                      <div className="mb-3">
                        <input type="text" className="form-control glass-input py-2" placeholder="Your full name" required />
                      </div>
                      <div className="mb-3">
                        <input type="text" className="form-control glass-input py-2" placeholder="Company name" />
                      </div>
                      <div className="mb-3">
                        <input type="email" className="form-control glass-input py-2" placeholder="you@example.com" required />
                      </div>
                      <div className="mb-4">
                        <input type="tel" className="form-control glass-input py-2" placeholder="e.g. +91 555 123 4567" />
                      </div>
                      <div className="form-check mb-4">
                        <input className="form-check-input" type="checkbox" id="agreeMerit" />
                        <label className="form-check-label text-white" htmlFor="agreeMerit">I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a></label>
                      </div>
                      <button type="submit" className="btn btn-warning w-50 d-block mx-auto rounded-pill py-2">Get started</button>
                    </form>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bootstrap 5 JS */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default Zmerit;