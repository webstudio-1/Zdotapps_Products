import React, { useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa"; // Added FaSearch
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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


// --- NEW SEARCH COMPONENT ---
const StudioSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [studioSelected, setStudioSelected] = useState(false);

  const studios = ["Ready to use", "Custom Build"];

  const handleSelectStudio = (studio) => {
    setSearchTerm(studio);
    setStudioSelected(studio);
    setIsFocused(false);
  };

  // Using a timeout to allow the click on a suggestion to register before the suggestions disappear on blur.
  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 150);
  };

  const renderButtons = (studio) => {
    switch (studio) {
      case "Ready to use":
        return (
          <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
            <button style={buttonStyle}>Products</button>
            <button style={buttonStyle}>Services</button>
          </div>
        );
      case "Custom Build":
        return (
          <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
            <button style={buttonStyle}>Products</button>
            <button style={buttonStyle}>Services</button>
          </div>
        );
      // case "Agentic Studio":
      //   return (
      //     <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
      //       <button style={buttonStyle}>Products</button>
      //       <button style={buttonStyle}>Services</button>
      //     </div>
      //   );
      default:
        return null;
    }
  };

  const buttonStyle = {
    flex: 1,
    backgroundColor: '#F2C94C',
    color: '#0b0b0b',
    border: '1px solid #666',
    borderRadius: '12px',
    padding: '12px 20px',
    fontWeight: '500',
    cursor: 'pointer',
  };

  return (
    <div style={{ position: 'relative', maxWidth: '500px', margin: 'auto' }}>
      {/* Search Bar Input */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#333',
        borderRadius: '50px',
        padding: '8px',
        //  border: '1px solid #F2C94C'
      }}>
        <FaSearch style={{ color: '#aaa', margin: '0 10px' }} />
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
          style={{
            flexGrow: 1,
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '1rem',
            outline: 'none'
          }}
        />
        <button style={{
          backgroundColor: '#F2C94C',
          color: '#0b0b0b',
          border: 'none',
          borderRadius: '50px',
          padding: '10px 24px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Search
        </button>
      </div>

      {/* Suggestions Dropdown */}
      {isFocused && !studioSelected && (
        <div style={{
          backgroundColor: '#333',
          borderRadius: '16px',
          marginTop: '10px',
          padding: '10px 0',
          position: 'absolute',
          width: '100%',
          zIndex: 10
        }}>
          {studios
            .filter(studio => studio.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(studio => (
              <div
                key={studio}
                onMouseDown={() => handleSelectStudio(studio)}
                style={{
                  padding: '12px 20px',
                  color: 'white',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#444'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {studio}
              </div>
            ))}
        </div>
      )}

      {/* Conditional Buttons */}
      {studioSelected && renderButtons(studioSelected)}
    </div>
  );
};


// --- Industry Solutions Section ---
const ProcessFlow = () => {
  return (
  <section className="industry-solutions py-5" style={{ backgroundColor: '#2a2a2a' }}>
      <div className="container mx-auto">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#ffffff', fontSize: 40 }}>Solutions for Every <span style={{ color: '#F2C94C' }}>Industry</span></h2>
          <p className="mx-auto" style={{ fontSize: '1.25rem', maxWidth: '42rem', color: 'rgba(255, 255, 255, 0.8)' }}>
            From startups to enterprises, we deliver tailored digital solutions that fit your world.
          </p>
        </div>
        <div className="row g-4 industry-cards">
            {/* Industry Cards Data */}
            {[
                { icon: ecomerceIcon, title: 'E-Commerce' },
                { icon: eventsIcon, title: 'Events' },
                { icon: hospitalIcon, title: 'Hospital' },
                { icon: universityIcon, title: 'University' },
                { icon: hotelIcon, title: 'Resorts & Hotels' },
                { icon: food_courtIcon, title: 'Food-Court' },
                { icon: technologyIcon, title: 'Technology' },
                { icon: manufacturingIcon, title: 'Manufacturing' },
                { icon: sportsIcon, title: 'Sports' },
                { icon: shopIcon, title: 'Retail Shop' },
                { icon: schoolsIcon, title: 'Schools' },
                { icon: child_careIcon, title: 'Child Care' },
            ].map((item, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12">
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


// --- Testimonials Section ---
const Testimonials = () => {
  const testimonials = [
    {
      img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&auto=format&fit=crop&q=60',
      quote: "We love Z.apps! Our designers were using it for their projects, so we already knew what kind of design they want.",
      name: 'Jenny Wilson',
      company: 'Grower.io',
    },
    {
      img: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&auto=format&fit=crop&q=60',
      quote: "We love z.apps! Our designers were using it for their projects, so we already knew what kind of design they want.",
      name: 'Devon Lane',
      company: 'DLDesign.co',
    },
    {
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60',
      quote: "Outstanding quality and great flexibility. It helped our team move much faster.",
      name: 'Courtney Henry',
      company: 'Stark Ltd',
    },
  ];

  const [index, setIndex] = useState(0);
  const left = testimonials[index % testimonials.length];
  const right = testimonials[(index + 1) % testimonials.length];
  const StarRow = () => (<div className="mb-3" style={{ color: '#F2C94C' }}>★★★★★</div>);

  return (
    <>
      <div className="row g-5 align-items-center justify-content-center">
        {[left, right].map((t, i) => (
          <div key={i} className="col-md-6">
            <div className="d-flex gap-4 align-items-center">
              <img src={t.img} alt={t.name} className="rounded" style={{ width: 230, height: 230, objectFit: 'cover' }} />
              <div className="text-start">
                <StarRow />
                <p className="mb-3" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 520 }}>
                  "{t.quote}"
                </p>
                <div className="fw-bold" style={{ color: '#ffffff' }}>{t.name} <span className="ms-2" style={{ color: '#F2C94C' }}>{t.company}</span></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-between mt-4">
        <button className="btn rounded-circle" onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)} style={{ width: 44, height: 44, border: '2px solid #F2C94C', color: '#F2C94C' }} aria-label="Previous">
          ←
        </button>
        <div>
          {[...Array(testimonials.length)].map((_, d) => (
            <span key={d} style={{ display: 'inline-block', width: 10, height: 10, margin: '0 6px', borderRadius: '50%', backgroundColor: index % testimonials.length === d ? '#F2C94C' : 'rgba(255,255,255,0.25)' }} />
          ))}
        </div>
        <button className="btn rounded-circle" onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)} style={{ width: 44, height: 44, border: '2px solid #F2C94C', color: '#F2C94C' }} aria-label="Next">
          →
        </button>
      </div>
    </>
  );
};


// --- Main AppStudio Component ---
function AppStudio() {
  const navigate = useNavigate();

  const servicesData = [
    { title: 'Bespoke Websites', image: bespokeImage },
    { title: 'UI/UX', image: ui_uxImage },
    { title: 'SEO', image: seoImage },
    { title: 'Maintenance', image: maintanceImage },
    { title: 'Digital Optimization', image: digitalImage },
    { title: 'Performance & Security', image: performanceImage },
    { title: 'Multi Language Support', image: multi_languageImage },
    { title: 'Scaling', image: scalingImage },
  ];

  return (
    <div className="App" style={{ backgroundColor: '#0b0b0b', color: '#ffffff' }}>

      {/* Hero Section */}
      <section className="hero-section position-relative" style={{ background: '#0b0b0b', minHeight: '100vh', display: 'flex', alignItems: 'center', backgroundImage: 'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=1920&auto=format&fit=crop&q=60)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mb-5">
            <h1 className="fw-bold text-center" style={{ color: '#F2C94C', fontSize: 65, lineHeight: 1.2, position: 'relative', top: '-20px' }}>
                App Studio
            </h1>
          <div className="row align-items-center mb-5">
            {/* Left Column: Text Content */}
            <div className="col-lg-6 mt-5">
              <h1 className="fw-bold" style={{ color: '#F2C94C', fontSize: 65, lineHeight: 1.2 }}>
                 We Engineer
                <br /> Your App Vision
              </h1>
              <div className="col-lg-12 mt-4 mt-lg-0">
                  <p className="mb-4" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 24 }}>
                    We build high‑performance mobile and web apps to help you launch faster and scale smarter.
                  </p>
                  <button className="btn btn-lg rounded-pill px-4" style={{ backgroundColor: '#F2C94C', color: '#0b0b0b', border: 'none' }} onClick={() => navigate('/contact')}>
                    Start Your Project <FaArrowRight style={{ marginLeft: 6 }} />
                  </button>
              </div>
            </div>
            
            {/* Right Column: Search Bar Component */}
            <div className="col-lg-6 mt-5">
                <StudioSearch />
            </div>
          </div>
        </div>
      </section>
      
      {/* Built to cater to your requirement section */}
      <section className="py-5" style={{ backgroundColor: '#444444' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-0" style={{ color: '#ffffff', fontSize: 40 }}>
              Built to cater to your requirement-
            </h2>
            <div className="fw-bold" style={{ color: '#F2C94C', fontSize: 40 }}>
              Quick and reliable models.
            </div>
            <p className="mt-0" style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: 900, margin: '0 auto', fontSize: '24px' }}>
              Pick a template and go live in minutes, or let us craft a fully custom project designed around your brand and goals.
            </p>
          </div>
          <div className="row g-4 justify-content-center align-items-stretch">
            {/* Card 1: Ready to use */}
            <div className="col-12 col-md-6 col-lg-4">
              <Link to="/ready" style={{ textDecoration: "none" }}>
                <div
                  className="d-flex flex-column justify-content-end text-white h-100"
                  style={{ borderRadius: "24px", padding: "2.5rem", minHeight: "450px", background: `linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%), url(${ready_to_useImage})`, backgroundSize: "cover", backgroundPosition: "center", cursor: "pointer", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <h3 className="fw-bold mb-3" style={{ color: "#F2C94C", fontSize: "2rem" }}>Ready to use</h3>
                  <p className="mb-4" style={{ fontSize: "1.05rem", maxWidth: "480px" }}>Pick from our library of templates and launch your website in minutes — fully customizable and responsive.</p>
                  <span className="fw-bold" style={{ color: "#F2C94C", fontSize: "1.1rem" }}>explore now ↗</span>
                </div>
              </Link>
            </div>
            {/* Card 2: Custom Build */}
            <div className="col-12 col-md-6 col-lg-4">
              <Link to="/studios/web/custom-build" style={{ textDecoration: "none" }}>
                <div
                  className="d-flex flex-column justify-content-end text-white h-100"
                  style={{ borderRadius: "24px", padding: "2.5rem", minHeight: "450px", background: `linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%), url(${custom_buildImage})`, backgroundSize: "cover", backgroundPosition: "center", cursor: "pointer", transition: "transform 0.3s ease, boxShadow 0.3s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <h3 className="fw-bold mb-3" style={{ color: "#F2C94C", fontSize: "2rem" }}>Custom Build</h3>
                  <p className="mb-4" style={{ fontSize: "1.05rem", maxWidth: "480px" }}>We craft websites from scratch to match your exact needs — designed, developed, and optimized for impact.</p>
                  <span className="fw-bold" style={{ color: "#F2C94C", fontSize: "1.1rem" }}>explore now ↗</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Ready-to-use Websites section */}
      <section className="py-5" style={{ backgroundColor: '#424242' }}>
        <div className="container">
          <h2 className="fw-bold mb-5 text-center" style={{ color: '#ffffff' }}>
            Choose the Website <span style={{ color: '#F2C94C' }}>That Works for You</span>
          </h2>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src={com_leftImage} alt="Designer choosing a website template" className="img-fluid rounded-4" />
            </div>
            <div className="col-lg-6 ps-lg-5">
              <h3 className="fw-normal lh-base" style={{ color: '#ffffff', fontSize: '2.25rem' }}>
                From startups to enterprises <br />
                <span className="fw-bold" style={{ color: '#F2C94C' }}>
                  we've got a template for every need.
                </span>
              </h3>
              <ul className="list-unstyled mt-4">
                {[ "Basic Websites", "Corporate Websites", "E-Commerce Websites", "Content Management Websites" ].map((item, index) => (
                    <li key={index} className="d-flex align-items-center mb-3 fs-5" style={{ color: '#ffffff' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F2C94C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="me-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        {item}
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services That Power Your Growth section */}
      <section className="py-5" style={{ backgroundColor: '#343434' }}>
        <div className="container">
          <h2 className="fw-bold text-center mb-5" style={{ color: '#ffffff' }}>
            Services That Power <span style={{ color: '#F2C94C' }}>Your Growth</span>
          </h2>
          <div className="row g-4">
            {servicesData.map((service, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div
                  className="d-flex align-items-center justify-content-center text-center p-3 h-100"
                  style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '16px', minHeight: '220px', color: '#F2C94C', transition: 'transform 0.3s ease-in-out', cursor: 'pointer' }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <h4 className="fw-bold m-0 mt-5">{service.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industry Solutions Section */}
      <ProcessFlow />

      {/* We Don't Just Say It, We Deliver section */}
      <section className="py-5" style={{ backgroundColor: '#0f0f0f' }}>
        <div className="container">
          <h2 className="fw-bold text-center mb-4" style={{ color: '#ffffff' }}>
            We Don’t Just Say It, <span style={{ color: '#F2C94C' }}>We Deliver</span>
          </h2>
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-6">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop&q=60" alt="Support team" className="img-fluid w-100" style={{ borderRadius: 20, height: 420, objectFit: 'cover' }} />
            </div>
            <div className="col-lg-6 d-flex flex-column gap-3">
              <div className="scroll-container" style={{ height: '410px', overflowY: 'hidden', position: 'relative' }}>
                <div className="scroll-content" style={{ animation: 'scroll 10s linear infinite', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[...Array(2)].flatMap(() => [
                    { title: 'Quick around Cycles', text: 'We understand the importance of speed and efficiency. Our quick turnovers ensure a seamless, hassle-free experience every time.' }, 
                    { title: 'Built for Scale', text: 'Our teams work at godspeed to deliver results for scaling businesses, ensuring fast, efficient, and hassle-free solutions every time.' }, 
                    { title: 'Reliable Support', text: 'Get expert guidance whenever you need it, ensuring smooth operations and seamless support for your business at every step.' }
                  ]).map((card, idx) => (
                    <div key={idx} className="p-4" style={{ background: 'rgba(21,21,21,0.85)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 10px 24px rgba(0,0,0,0.45)' }}>
                      <h4 className="fw-bold mb-2" style={{ color: '#ffffff' }}>{card.title}</h4>
                      <p className="mb-0" style={{ color: 'rgba(255,255,255,0.8)' }}>{card.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Keyframes for scrolling animation */}
      <style>{`
        @keyframes scroll { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
        .scroll-container:hover .scroll-content { animation-play-state: paused; }
      `}</style>

      {/* Discover How We Deliver Outstanding Results section */}
      <section className="py-5" style={{ backgroundColor: '#0f0f0f' }}>
        <div className="container">
          <h2 className="fw-bold text-center mb-5" style={{ color: '#ffffff' }}>
            Discover How We Deliver <span style={{ color: '#F2C94C' }}>Outstanding Results</span>
          </h2>
          <div className="row g-5 justify-content-center">
            {/* Case Study Cards */}
            {[
                {img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=60", cat: "E-Commerce", title: "How We Achieved Results for [Project Name]"},
                {img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&auto=format&fit=crop&q=60", cat: "Health care", title: "How We really achieved Results for [Project Name]"},
                {img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop&q=60", cat: "Tech", title: "How We Achieved Results for [Project Name]"}
            ].map((card, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                    <div className="h-100">
                    <img src={card.img} alt={`Case study ${index+1}`} className="img-fluid w-100" style={{ borderRadius: 18, height: 240, objectFit: 'cover' }} />
                    <div className="mt-3" style={{ color: '#F2C94C', fontWeight: 600 }}>
                        <span>Case study</span><span className="mx-2">•</span><span>{card.cat}</span>
                    </div>
                    <div className="fw-bold mt-2" style={{ color: '#ffffff' }}>{card.title}</div>
                    </div>
                </div>
            ))}
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button className="btn rounded-pill px-4 py-2" style={{ borderColor: '#F2C94C', color: '#F2C94C', borderWidth: 2, background: 'transparent' }}>
              View all <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Don't just take our word for it section */}
      <section className="py-5" style={{ backgroundColor: '#0b0b0b', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="text-center mb-2" style={{ color: '#F2C94C' }}>3940+ Happy Z.apps users</div>
          <h2 className="fw-bold text-center mb-5" style={{ color: '#ffffff' }}>Don't just take our <span style={{ color: '#F2C94C' }}>words</span></h2>
          <Testimonials />
        </div>
      </section>

      {/* Ready to Build the Future? section */}
      <section className="py-5 text-dark text-center" style={{ backgroundColor: '#F2C94C' }}>
        <div className="container py-4">
          <h2 className="fw-bold mb-3" style={{ fontSize: 42 }}>Ready to Build the Future?</h2>
          <p className="mb-4" style={{ maxWidth: 760, margin: '0 auto', fontSize: 25 }}>
           World Class Apps, Built to Last.
          </p>
          <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
            <button className="btn btn-dark rounded-pill px-4 py-2">Get In Touch →</button>
          </div>
          <div className="row g-4 justify-content-center text-start" style={{ maxWidth: 900, margin: '0 auto' }}>
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

      {/* Added Styles for the Industry Section */}
      <style>{`
        .industry-card {
          background-color: #343434;
          border-radius: 16px;
          padding: 2rem 1.5rem;
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .industry-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.25);
        }
        .industry-icon {
          margin-bottom: 1.5rem;
        }
        .industry-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #ffffff;
        }
      `}</style>

    </div>
  );
}

export default AppStudio;