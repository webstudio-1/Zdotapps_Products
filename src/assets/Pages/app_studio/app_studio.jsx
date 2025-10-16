import React, { useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Import your existing images
import custom_buildImage from '../../images/custom_build.png';
import ready_to_useImage from '../../images/ready_to_use.png';
import com_leftImage from '../../images/com_left.jpg';
import bespokeImage from '../../images/bespoke.png';
import ui_uxImage from '../../images/ui_ux.png';
import seoImage from '../../images/seo.png';
import maintanceImage from '../../images/maintenance.png';
import digitalImage from '../../images/digital.png';
import performanceImage from '../../images/performance.png';
import multi_languageImage from '../../images/multi_language.png';
import scalingImage from '../../images/scaling.png';

// Import the 12 icon images for the "Solutions for Every Industry" section.
import ecomerceIcon from '../../images/ecomerce.png';
import eventsIcon from '../../images/events.png';
import hospitalIcon from '../../images/hospital.png';
import universityIcon from '../../images/university.png';
import hotelIcon from '../../images/hotel.png';
import food_courtIcon from '../../images/food_court.png';
import technologyIcon from '../../images/technology.png';
import manufacturingIcon from '../../images/manufacturing.png';
import sportsIcon from '../../images/sports.png';
import shopIcon from '../../images/shop.png';
import schoolsIcon from '../../images/schools.png';
import child_careIcon from '../../images/child_care.png';


// --- SEARCH COMPONENT ---
const StudioSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [studioSelected, setStudioSelected] = useState(false);
  const navigate = useNavigate();

  const studios = ["Ready to use", "Custom Build"];

  const handleSelectStudio = (studio) => {
    setSearchTerm(studio);
    setStudioSelected(studio);
    setIsFocused(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 150);
  };

  const renderButtons = (studio) => {
    if (studio === "Ready to use") {
      return (
        <div className="studio-buttons-container ready-to-use">
          <button className="studio-button" onClick={() => navigate('/ready')}>Products</button>
          <button className="studio-button" onClick={() => navigate('/ready')}>Services</button>
        </div>
      );
    }
    if (studio === "Custom Build") {
      return (
        <div className="studio-buttons-container">
          <button className="studio-button" onClick={() => navigate('/studios/web/custom-build')}>Products</button>
          <button className="studio-button" onClick={() => navigate('/studios/web/custom-build')}>Services</button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="studio-search-wrapper">
      <div className="studio-search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            if (studioSelected) setStudioSelected(false);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          placeholder="Search Studio..."
          className="studio-search-input"
        />
        <button className="studio-search-button">
          Search
        </button>
      </div>

      {isFocused && !studioSelected && (
        <div className="studio-suggestions-dropdown">
          {studios
            .filter(studio => studio.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(studio => (
              <div
                key={studio}
                onMouseDown={() => handleSelectStudio(studio)}
                className="suggestion-item"
              >
                {studio}
              </div>
            ))}
        </div>
      )}
      {studioSelected && renderButtons(studioSelected)}
    </div>
  );
};


// --- INDUSTRY SOLUTIONS SECTION ---
const IndustrySolutions = () => {
  const industries = [
    { icon: ecomerceIcon, title: 'E-Commerce' }, { icon: eventsIcon, title: 'Events' },
    { icon: hospitalIcon, title: 'Hospital' }, { icon: universityIcon, title: 'University' },
    { icon: hotelIcon, title: 'Resorts & Hotels' }, { icon: food_courtIcon, title: 'Food-Court' },
    { icon: technologyIcon, title: 'Technology' }, { icon: manufacturingIcon, title: 'Manufacturing' },
    { icon: sportsIcon, title: 'Sports' }, { icon: shopIcon, title: 'Retail Shop' },
    { icon: schoolsIcon, title: 'Schools' }, { icon: child_careIcon, title: 'Child Care' },
  ];

  return (
    <section className="industry-solutions py-5">
      <div className="container mx-auto">
        <div className="text-center mb-5">
          <h2 className="section-title-light">Solutions for Every <span className="text-accent">Industry</span></h2>
          <p className="section-subtitle-light mx-auto">
            From startups to enterprises, we deliver tailored digital solutions that fit your world.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {industries.map((item, index) => (
            <div key={index} className="col-lg-2 col-md-4 col-sm-6 col-6">
              <div className="industry-card">
                <div className="industry-icon">
                  <img src={item.icon} alt={`${item.title} Icon`} width="60" />
                </div>
                <h3 className="industry-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Helper component for Testimonials ---
const StarRow = () => (<div className="mb-3 text-accent">★★★★★</div>);

// --- TESTIMONIALS SECTION ---
const Testimonials = () => {
  const testimonials = [
    { img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&auto=format&fit=crop&q=60', quote: "We love Z.apps! Our designers were using it for their projects, so we already knew what kind of design they want.", name: 'Jenny Wilson', company: 'Grower.io' },
    { img: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&auto=format&fit=crop&q=60', quote: "We love z.apps! Our designers were using it for their projects, so we already knew what kind of design they want.", name: 'Devon Lane', company: 'DLDesign.co' },
    { img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60', quote: "Outstanding quality and great flexibility. It helped our team move much faster.", name: 'Courtney Henry', company: 'Stark Ltd' },
  ];

  const [index, setIndex] = useState(0);

  const handlePrev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);

  const left = testimonials[index % testimonials.length];
  const right = testimonials[(index + 1) % testimonials.length];

  return (
    <>
      <div className="row g-5 align-items-center justify-content-center">
        {[left, right].map((t, i) => (
          <div key={i} className="col-md-6">
            <div className="d-flex gap-4 align-items-center">
              <img src={t.img} alt={t.name} className="testimonial-img rounded" />
              <div className="text-start">
                <StarRow />
                <p className="testimonial-quote mb-3">"{t.quote}"</p>
                <div className="testimonial-author">{t.name} <span className="ms-2 text-accent">{t.company}</span></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-between mt-4">
        <button className="testimonial-nav-btn" onClick={handlePrev} aria-label="Previous">←</button>
        <div className="testimonial-dots">
          {testimonials.map((_, dotIndex) => (
            <span key={dotIndex} className={`dot ${index === dotIndex ? 'active' : ''}`} />
          ))}
        </div>
        <button className="testimonial-nav-btn" onClick={handleNext} aria-label="Next">→</button>
      </div>
    </>
  );
};


// --- MAIN APPSTUDIO COMPONENT ---
function AppStudio() {
  const navigate = useNavigate();

  const servicesData = [
    { title: 'Bespoke Websites', image: bespokeImage }, { title: 'UI/UX', image: ui_uxImage },
    { title: 'SEO', image: seoImage }, { title: 'Maintenance', image: maintanceImage },
    { title: 'Digital Optimization', image: digitalImage }, { title: 'Performance & Security', image: performanceImage },
    { title: 'Multi Language Support', image: multi_languageImage }, { title: 'Scaling', image: scalingImage },
  ];

  return (
    <div className="app-studio-page">
    
      {/* Embedded Styles */}
      <style>{`
        /* --- GLOBAL & UTILITY STYLES --- */
        .app-studio-page {
          background-color: #0b0b0b;
          color: #ffffff;
          overflow-x: hidden; /* Prevent horizontal scroll */
        }
        .text-accent { color: #F2C94C; }
        .bg-darkest { background-color: #0b0b0b; }
        .bg-off-black { background-color: #0f0f0f; }
        .bg-medium-gray { background-color: #343434; }
        .bg-dark-gray { background-color: #424242; }
        .section-title-light {
          font-weight: 700; color: #ffffff; font-size: 2.5rem;
        }
        .section-subtitle-light {
          font-size: 1.25rem; max-width: 42rem; color: rgba(255, 255, 255, 0.8);
        }

        /* --- HERO SECTION --- */
        .hero-section {
          position: relative; background-color: #0b0b0b; min-height: 100vh; display: flex;
          align-items: center; background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=1920&auto=format&fit=crop&q=60);
          background-size: cover; background-position: center;
        }
        .hero-title-main {
          font-weight: 700; text-align: center; color: #F2C94C;
          font-size: 65px; line-height: 1.2; position: relative; top: -20px;
        }
        .hero-title {
          font-weight: 700; color: #F2C94C; font-size: 65px; line-height: 1.2;
        }
        .hero-subtitle {
          color: rgba(255, 255, 255, 0.85); font-size: 24px; margin-bottom: 1.5rem;
        }
        .btn-primary-action {
          background-color: #F2C94C; color: #0b0b0b; border: none; font-size: 1.1rem;
          border-radius: 50px; padding: 12px 24px; font-weight: bold; cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .btn-primary-action:hover { background-color: #e0b845; }

        /* --- STUDIO SEARCH COMPONENT --- */
        .studio-search-wrapper { position: relative; max-width: 500px; margin: auto; }
        .studio-search-bar { display: flex; align-items: center; background-color: #ffffff; border-radius: 50px; padding: 4px; }
        .search-icon { color: #aaaaaa; margin: 0 10px; }
        .studio-search-input { flex-grow: 1; background: transparent; border: none; color: black; font-size: 1rem; outline: none; }
        .studio-search-button {
          background-color: #383838; color: #ffffff; border: none; border-radius: 50px;
          padding: 10px 24px; font-weight: bold; cursor: pointer;
        }
        .studio-suggestions-dropdown {
          background-color: #474642; border-radius: 14px; margin-top: 10px; padding: 10px 0;
          position: absolute; width: 100%; z-index: 10;
        }
        .suggestion-item { padding: 12px 20px; color: white; cursor: pointer; transition: background-color 0.2s ease; }
        .suggestion-item:hover { background-color: #555; }
        .studio-buttons-container { margin-top: 20px; display: flex; gap: 15px; }
        .studio-buttons-container.ready-to-use { width: 65%; }
        .studio-button {
          flex: 1; background-color: #F2C94C; color: #0b0b0b; border: 1px solid #666;
          border-radius: 30px; padding: 12px; font-weight: 500; cursor: pointer;
          transition: all 0.3s ease;
        }
        .studio-button:hover { background-color: #383838; color: #ffffff; transform: translateY(-2px); }

        /* --- FEATURE SECTION ("Choose the Website") --- */
        .feature-title { color: #ffffff; font-size: 2.25rem; font-weight: 300; line-height: 1.5; }

        /* --- SERVICES SECTION --- */
        .service-card {
          display: flex; align-items: center; justify-content: center; text-align: center; padding: 1rem;
          height: 100%; background-size: cover; background-position: center; border-radius: 16px; min-height: 220px;
          color: #F2C94C; transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; cursor: pointer;
        }
        .service-card:hover { transform: scale(1.03); box-shadow: 0 0px 20px rgba(242, 201, 76, 0.7); }

        /* --- INDUSTRY SOLUTIONS SECTION --- */
        .industry-solutions { background-color: #2a2a2a; }
        .industry-card {
          background-color: #333333; border-radius: 1rem; padding: 1.5rem; height: 100%; display: flex;
          flex-direction: column; align-items: center; justify-content: center; text-align: center;
          transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease; cursor: pointer;
        }
        .industry-card:hover { transform: translateY(-5px); background-color: #444444; box-shadow: 0 8px 20px rgba(242, 201, 76, 0.5); }
        .industry-icon { width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; }
        .industry-title { font-size: 1.1rem; font-weight: 600; color: #FFFFFF; }

        /* --- "WE DELIVER" SECTION --- */
        .deliver-img { border-radius: 20px; height: 420px; object-fit: cover; }
        .scroll-container { height: 420px; overflow-y: hidden; position: relative; }
        .scroll-container:hover .scroll-content { animation-play-state: paused; }
        .scroll-content { animation: scroll 10s linear infinite; display: flex; flex-direction: column; }
        @keyframes scroll { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
        .deliver-card {
          padding: 1.5rem; background: rgba(21, 21, 21, 0.85); border-radius: 16px;margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);
        }
        .text-light-emphasis { color: rgba(255, 255, 255, 0.8); }

        /* --- CASE STUDIES SECTION --- */
        .case-study-img { border-radius: 18px; height: 240px; object-fit: cover; width: 100%; }
        .case-study-meta { color: #F2C94C; font-weight: 600; }
        .case-study-title { color: #ffffff; font-size: 1.2rem; }
        .btn-outline-accent {
          border: 2px solid #F2C94C; color: #F2C94C; background: transparent; border-radius: 50px;
          padding: 10px 20px; transition: all 0.3s ease;
        }
        .btn-outline-accent:hover { background-color: #F2C94C; color: #0b0b0b; }

        /* --- TESTIMONIALS SECTION --- */
        .testimonial-img { width: 230px; height: 230px; object-fit: cover; }
        .testimonial-quote { color: rgba(255, 255, 255, 0.85); max-width: 520px; }
        .testimonial-author { font-weight: bold; color: #ffffff; }
        .testimonial-nav-btn {
          width: 44px; height: 44px; border: 2px solid #F2C94C; color: #F2C94C; border-radius: 50%;
          background: transparent; display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem; transition: all 0.3s ease;
        }
        .testimonial-nav-btn:hover { background-color: #F2C94C; color: #0b0b0b; }
        .testimonial-dots { display: flex; }
        .dot {
          display: inline-block; width: 10px; height: 10px; margin: 0 6px; border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.25); transition: background-color 0.3s ease;
        }
        .dot.active { background-color: #F2C94C; }

        /* --- CTA SECTION --- */
        .cta-section { background-color: #F2C94C; }
        .cta-title { font-weight: 700; font-size: 42px; margin-bottom: 1rem; }
        .cta-subtitle { max-width: 760px; margin: 0 auto; font-size: 25px; margin-bottom: 1.5rem; }
        .cta-features { max-width: 900px; margin: 0 auto; }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mb-5">
          <h1 className="hero-title-main">App Studio</h1>
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mt-5">
              <h1 className="hero-title">We Engineer<br /> Your App Vision</h1>
              <div className="col-lg-12 mt-4 mt-lg-0">
                <p className="hero-subtitle">We build high‑performance mobile and web apps to help you launch faster and scale smarter.</p>
                <button className="btn-primary-action" onClick={() => navigate('/contact')}>
                  Start Your Project <FaArrowRight style={{ marginLeft: 6 }} />
                </button>
              </div>
            </div>
            <div className="col-lg-6 mt-5"><StudioSearch /></div>
          </div>
        </div>
      </section>

      {/* Choose Website Section */}
      <section className="py-5 bg-dark-gray">
        <div className="container">
          <h2 className="section-title-light text-center mb-5">
            Choose the Website <span className="text-accent">That Works for You</span>
          </h2>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src={com_leftImage} alt="Designer choosing a website template" className="img-fluid rounded-4" />
            </div>
            <div className="col-lg-6 ps-lg-5">
              <h3 className="feature-title">
                From startups to enterprises <br />
                <span className="fw-bold text-accent">we've got a template for every need.</span>
              </h3>
              <ul className="list-unstyled mt-4">
                {["Basic Websites", "Corporate Websites", "E-Commerce Websites", "Content Management Websites"].map((item, index) => (
                  <li key={index} className="d-flex align-items-center mb-3 fs-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F2C94C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="me-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-medium-gray">
        <div className="container">
          <h2 className="section-title-light text-center mb-5">
            Services That Power <span className="text-accent">Your Growth</span>
          </h2>
          <div className="row g-4">
            {servicesData.map((service, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div className="service-card" style={{ backgroundImage: `url(${service.image})` }}>
                  <h4 className="fw-bold m-0 mt-5">{service.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industry Solutions Section */}
      <IndustrySolutions />

      {/* We Deliver Section */}
      <section className="py-5 bg-off-black">
        <div className="container">
          <h2 className="section-title-light text-center mb-4">
            We Don’t Just Say It, <span className="text-accent">We Deliver</span>
          </h2>
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-6">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop&q=60" alt="Support team" className="img-fluid w-100 deliver-img" />
            </div>
            <div className="col-lg-6 d-flex flex-column gap-3">
              <div className="scroll-container">
                <div className="scroll-content">
                  {[...Array(2)].flatMap(() => [
                    { title: 'Quick around Cycles', text: 'We understand the importance of speed and efficiency. Our quick turnovers ensure a seamless, hassle-free experience every time.' },
                    { title: 'Built for Scale', text: 'Our teams work at godspeed to deliver results for scaling businesses, ensuring fast, efficient, and hassle-free solutions every time.' },
                    { title: 'Reliable Support', text: 'Get expert guidance whenever you need it, ensuring smooth operations and seamless support for your business at every step.' }
                  ]).map((card, idx) => (
                    <div key={idx} className="deliver-card">
                      <h4 className="fw-bold mb-2">{card.title}</h4>
                      <p className="mb-0 text-white">{card.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-5 bg-off-black">
        <div className="container">
          <h2 className="section-title-light text-center mb-5">
            Discover How We Deliver <span className="text-accent">Outstanding Results</span>
          </h2>
          <div className="row g-5 justify-content-center">
            {[
              { img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=60", cat: "E-Commerce", title: "How We Achieved Results for [Project Name]" },
              { img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&auto=format&fit=crop&q=60", cat: "Health care", title: "How We really achieved Results for [Project Name]" },
              { img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop&q=60", cat: "Tech", title: "How We Achieved Results for [Project Name]" }
            ].map((card, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="h-100">
                  <img src={card.img} alt={`Case study ${index + 1}`} className="case-study-img" />
                  <div className="case-study-meta mt-3">
                    <span>Case study</span><span className="mx-2">•</span><span>{card.cat}</span>
                  </div>
                  <div className="case-study-title fw-bold mt-2">{card.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button className="btn-outline-accent">
              View all <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-darkest">
        <div className="container">
          <div className="text-center mb-2 text-accent">3940+ Happy Z.apps users</div>
          <h2 className="section-title-light text-center mb-5">Don't just take our <span className="text-accent">words</span></h2>
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-dark text-center cta-section">
        <div className="container py-4">
          <h2 className="cta-title">Ready to Build the Future?</h2>
          <p className="cta-subtitle">World Class Apps, Built to Last.</p>
          <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
            <button className="btn btn-dark rounded-pill px-4 py-2">Get In Touch →</button>
          </div>
          <div className="row g-4 justify-content-center text-start cta-features">
            <div className="col-12 col-md-4">
              <div className="fw-bold">Free Consultation</div>
              <div className="text-muted">30–minute strategy call</div>
            </div>
            <div className="col-12 col-md-4">
              <div className="fw-bold">Fast Delivery</div>
              <div className="text-muted">MVP in 4–8 weeks</div>
            </div>
            <div className="col-12 col-md-4">
              <div className="fw-bold">Full Support</div>
              <div className="text-muted">Launch & maintenance included</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AppStudio;