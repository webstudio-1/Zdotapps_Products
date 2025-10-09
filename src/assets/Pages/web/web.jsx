import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// Using global Header/Footer from LayoutWrapper; keep page content only

// Import your custom components here
// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import FeaturesSection from './components/FeaturesSection';
// import TrendingSection from './components/TrendingSection';
// import SpecialtiesSection from './components/SpecialtiesSection';
// import CallToActionSection from './components/CallToActionSection';
// import DeliverySection from './components/DeliverySection';
// import ResultsSection from './components/ResultsSection';
// import TestimonialsSection from './components/TestimonialsSection';
// import Footer from './components/Footer';
import updated_logoImage from '../../images/updated_logo.png';
import updated_k_logoImage from '../../images/updated_k_logo.png';
import ecomerceImage from '../../images/ecomerce.png';
import custom_buildImage from '../../images/custom_build.png';


function App() {
  const navigate = useNavigate();
  return (
    <div className="App" style={{ backgroundColor: '#0b0b0b', color: '#ffffff' }}>

      {/* Hero Section */}
      <section className="hero-section py-5 position-relative" style={{ background: '#0b0b0b', minHeight: '60vh', display: 'flex', alignItems: 'center', backgroundImage: 'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=1920&auto=format&fit=crop&q=60)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="fw-bold" style={{ color: '#F2C94C', fontSize: 56, lineHeight: 1.1 }}>
                Web Studio-We
                <br />engineer your web
                <br />vision
              </h1>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <p className="mb-4" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 18 }}>
                We craft platforms that scale, perform, and inspire. From concept to code, our studio blends design precision with engineering excellence to help you launch faster, grow smarter, and stay unforgettable.
              </p>
              <button className="btn btn-lg rounded-pill px-4" style={{ backgroundColor: '#F2C94C', color: '#0b0b0b', border: 'none' }} onClick={() => navigate('/studios/web/custom-build')}>
                Start Your Project <FaArrowRight style={{ marginLeft: 6 }} />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Built to cater to your requirement section */}
<section
  className="py-5"
  style={{
    backgroundColor: '#0f0f0f',
    backgroundImage:
      'radial-gradient(1200px 300px at 50% 0%, rgba(242,201,76,0.08), rgba(0,0,0,0)), radial-gradient(800px 200px at 50% 100%, rgba(242,201,76,0.06), rgba(0,0,0,0))'
  }}
>
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="fw-bold mb-2" style={{ color: '#ffffff', fontSize: 40 }}>
        Built to cater to your requirement-
      </h2>
      <div className="fw-bold" style={{ color: '#F2C94C', fontSize: 40 }}>
        Quick and reliable models.
      </div>
      <p
        className="mt-3"
        style={{
          color: 'rgba(255,255,255,0.8)',
          maxWidth: 900,
          margin: '0 auto'
        }}
      >
        Pick a template and go live in minutes, or let us craft a fully custom project
        designed around your brand and goals.
      </p>
    </div>

    <div className="row g-4 justify-content-center">
      {/* Ready to use */}
      <div className="col-md-6 col-lg-3 col-xl-4">
        <div className="h-100 p-3 position-relative">
          <img
            src={custom_buildImage}
            alt="Custom Build Image"
            className="img-fluid rounded mb-3 w-100"
            style={{
              border: '1px solid rgba(242,201,76,0.15)',
              height: 320,
              objectFit: 'cover',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))',
              borderRadius: 27,
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              overflow: 'hidden',
             
          
            }}
          />

          {/* Overlay Text */}
          <div
            className="position-absolute start-0 top-0 p-3 text-start text-white mt-3 py-3"
            style={{ zIndex: 1 }}
          >
            <h5 className="fw-bold mb-2" style={{ color: '#F2C94C', fontSize: 28, padding: '20px'}}>
              Ready to use
            </h5>
            <p className="mb-2" style={{ color: 'rgba(255,255,255,0.8)', padding: '20px',  marginTop: '-40px', fontSize: 16 }}>
              Pick from our library of templates<br></br> and launch your website in minutes fully customizable and responsive.
            </p>
            <button className="btn btn-outline-warning btn-lg mt-5 ms-3" onClick={() => navigate('/studios/web/custom-build')}>explore now ↗</button>
          </div>
        </div>
      </div>

      {/* Custom Build */}
      <div className="col-md-6 col-lg-4 col-xl-4">
        <div className="h-100 p-3 position-relative">
          <img
            src={custom_buildImage}
            alt="Custom Build Image"
            className="img-fluid rounded mb-3 w-100"
            style={{
              border: '1px solid rgba(242,201,76,0.15)',
              height: 320,
              objectFit: 'cover',
              borderRadius: 27,
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              overflow: 'hidden',
            }}
          />

          {/* Overlay Text */}
          <div
            className="position-absolute start-0 top-0 p-3 text-start text-white mt-3 py-3"
            style={{ zIndex: 1}}
          >
            <h5 className="fw-bold mb-2" style={{ color: '#F2C94C', fontSize: 28,  padding: '20px' }}>
              Custom Build
            </h5>
            <p className="mb-2" style={{ color: 'rgba(255,255,255,0.8)',  padding: '20px', marginTop: '-40px', fontSize: 16}}>
              We craft solutions from scratch <br></br>to match your exact needs engineered, designed, and optimized for impact.
            </p>
             <button className="btn btn-outline-warning btn-lg mt-5 ms-3" onClick={() => navigate('/studios/web/custom-build')}>explore now ↗</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Trending Ready-to-use Websites section */}
      <section className="py-5 text-center" style={{ backgroundColor: '#0f0f0f' }}>
        <div className="container">
          <h2 className="fw-bold mb-5" style={{ color: '#ffffff' }}>Trending Ready-to-Use <span style={{ color: '#F2C94C' }}>Websites</span></h2>
          <div className="row g-4 justify-content-center">
            {/* Card 1 - Eco mall (Ready to use style) */}
            <div className="col-md-6 col-lg-3">
              <div className="h-100 p-4" style={{ backgroundColor: '#191919', borderRadius: 20, boxShadow: '0 20px 50px rgba(0,0,0,0.45)', border: '1px solid rgba(242,201,76,0.12)', height: 360, display: 'flex', flexDirection: 'column' }}>
                   <div className="mb-4 d-flex justify-content-end">
  <div className="d-inline-flex align-items-center justify-content-center rounded-3" style={{ width: 74, height: 74, backgroundColor: '#2a2a2a', border: '1px solid rgba(255,255,255,0.08)' }}>
   <img src={updated_logoImage} alt="Z Logo" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
  </div>
</div>
                <h3 className="fw-bold mb-3" style={{ color: '#ffffff', textAlign: 'left' }}>Eco mall</h3>
              <p className="mb-3 text-start" style={{ color: 'rgba(255,255,255,0.75)' }}>
  A smart hiring platform to simplify recruitment and connect the right candidates faster.
</p>

                <div className="text-start">
                  <a href="#" className="text-decoration-none" style={{ color: '#F2C94C', fontWeight: 600 }}>Try now ↗</a>
                </div>
              </div>
            </div>

            {/* Card 2 - Mall 360 */}
            <div className="col-md-6 col-lg-3">
              <div className="h-100 p-4" style={{ backgroundColor: '#191919', borderRadius: 20, boxShadow: '0 20px 50px rgba(0,0,0,0.45)', border: '1px solid rgba(242,201,76,0.12)', height: 360, display: 'flex', flexDirection: 'column' }}>
           <div className="mb-4 d-flex justify-content-end">
  <div className="d-inline-flex align-items-center justify-content-center rounded-3" style={{ width: 74, height: 74, backgroundColor: '#2a2a2a', border: '1px solid rgba(255,255,255,0.08)' }}>
   <img src={updated_logoImage} alt="Z Logo" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
  </div>
</div>

                <h3 className="fw-bold mb-3" style={{ color: '#ffffff', textAlign: 'left' }}>Mall 360</h3>
                 <p className="mb-3 text-start" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Style or customise your own apparel and merchandise on the
                  Mall360 platform based on the industry, and requirement.
                </p>
                <div className="text-start">
                  <a href="#" className="text-decoration-none" style={{ color: '#F2C94C', fontWeight: 600 }}>Try now ↗</a>
                </div>
              </div>
            </div>

            {/* Card 3 - Kirazee */}
            <div className="col-md-6 col-lg-3">
              <div className="h-100 p-4" style={{ backgroundColor: '#191919', borderRadius: 20, boxShadow: '0 20px 50px rgba(0,0,0,0.45)', border: '1px solid rgba(242,201,76,0.12)', height: 360, display: 'flex', flexDirection: 'column' }}>
               <div className="mb-4 d-flex justify-content-end">
  <div className="d-inline-flex align-items-center justify-content-center rounded-3" style={{ width: 74, height: 74, backgroundColor: '#2a2a2a', border: '1px solid rgba(255,255,255,0.08)' }}>
   <img src={updated_k_logoImage} alt="Z Logo" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
  </div>
</div>
                <h3 className="fw-bold mb-3" style={{ color: '#ffffff', textAlign: 'left' }}>Kirazee</h3>
          <p className="mb-3 text-start" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  It builds flexible software solutions for retail outfits based on the
                  industry, scale and requirement.
                </p>
                <div className="text-start">
                  <a href="#" className="text-decoration-none" style={{ color: '#F2C94C', fontWeight: 600 }}>Try now ↗</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors We Specialize in section */}
    <section className="py-5" style={{ backgroundColor: '#0b0b0b' }}>
      <div className="container">
        <h2 className="fw-bold text-center mb-5" style={{ color: '#ffffff' }}>
          Sectors We <span style={{ color: '#F2C94C' }}>Specialize In</span>
        </h2>
     <div className="row g-4">
  {[
    { title: 'E-Commerce', image: ecomerceImage },
    { title: 'Health care', image: ecomerceImage },
    { title: 'Manufacturing', image: ecomerceImage },
    { title: 'Edu Tech', image: ecomerceImage },
    { title: 'Finance', image: ecomerceImage },
    { title: 'Sports', image: ecomerceImage },
  ].map((item) => (
    <div key={item.title} className="col-md-6 col-lg-4">
      <div
        className="p-4 position-relative h-100"
        style={{
          background: 'radial-gradient(800px 300px at 50% -20%, rgba(242,201,76,0.06), rgba(0,0,0,0))',
          backgroundColor: '#151515',
          borderRadius: 16,
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* top-right image badge */}
        <div className="position-absolute" style={{ right: 16, top: 16 }}>
          <div
            className="rounded-3 overflow-hidden"
            style={{
              width: 64,
              height: 64,
              backgroundColor: '#1f1f1f',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>

        <h5 className="fw-bold mb-3" style={{ color: '#ffffff', marginTop: '5rem' }}>
          {item.title}
        </h5>

        <div className="d-flex flex-column gap-2" style={{ fontWeight: 600, marginTop: 'auto' }}>
          <a href="#" className="text-decoration-none" style={{ color: '#F2C94C' }}>
            Mall 360 ↗
          </a>
          <a href="#" className="text-decoration-none" style={{ color: '#F2C94C' }}>
            Eco Mall ↗
          </a>
          <a href="#" className="text-decoration-none" style={{ color: '#F2C94C' }}>
            RK stores ↗
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
      {/* We Don't Just Say It, We Deliver section */}
  <section className="py-5" style={{ backgroundColor: '#0f0f0f' }}>
  <div className="container">
    <h2 className="fw-bold text-center mb-4" style={{ color: '#ffffff' }}>
      We Don’t Just Say It, <span style={{ color: '#F2C94C' }}>We Deliver</span>
    </h2>
    <div className="row g-4 align-items-stretch">
      {/* Left image */}
      <div className="col-lg-6">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop&q=60"
          alt="Support team"
          className="img-fluid w-100"
          style={{ borderRadius: 20, height: 420, objectFit: 'cover' }}
        />
      </div>
      {/* Right stacked cards with vertical scrolling */}
      <div className="col-lg-6 d-flex flex-column gap-3">
        <div
          className="scroll-container"
          style={{
            height: '410px',
            overflowY: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            className="scroll-content"
            style={{
              animation: 'scroll 10s linear infinite',
              display: 'flex',
              flexDirection: 'column',
              gap:'20px',
            }}
          >
            {[{
              title: 'Quick around Cycles',
              text: 'We understand the importance of speed and efficiency. Our quick turnovers ensure a seamless, hassle-free experience every time.'
            }, {
              title: 'Built for Scale',
              text: 'Our teams work at godspeed to deliver results for scaling businesses, ensuring fast, efficient, and hassle-free solutions every time.'
            }, {
              title: 'Reliable Support',
              text: 'Get expert guidance whenever you need it, ensuring smooth operations and seamless support for your business at every step.'
            }, {
              title: 'Built for Scale',
              text: 'Our teams work at godspeed to deliver results for scaling businesses, ensuring fast, efficient, and hassle-free solutions every time.'
            }].map((card, idx) => (
              <div
                key={idx}
                className="p-4"
                style={{
                  background: 'rgba(21,21,21,0.85)',
                  borderRadius: 16,
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 10px 24px rgba(0,0,0,0.45)',
                }}
              >
                <h4 className="fw-bold mb-2" style={{ color: '#ffffff' }}>
                  {card.title}
                </h4>
                <p className="mb-0" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style jsx>{`
  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }
`}</style>


      {/* Discover How We Deliver Outstanding Results section */}
      <section className="py-5" style={{ backgroundColor: '#0f0f0f' }}>
        <div className="container">
          <h2 className="fw-bold text-center mb-5" style={{ color: '#ffffff' }}>
            Discover How We Deliver <span style={{ color: '#F2C94C' }}>Outstanding Results</span>
          </h2>
          <div className="row g-5 justify-content-center">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="h-100">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=60"
                  alt="Case study 1"
                  className="img-fluid w-100"
                  style={{ borderRadius: 18, height: 240, objectFit: 'cover' }}
                />
                <div className="mt-3" style={{ color: '#F2C94C', fontWeight: 600 }}>
                  <span>Case study</span>
                  <span className="mx-2" style={{ color: '#F2C94C' }}>•</span>
                  <span style={{ color: '#F2C94C' }}>E-Commerce</span>
                </div>
                <div className="fw-bold mt-2" style={{ color: '#ffffff' }}>
                  How We Achieved Results for
                  <br />[Project Name]
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="h-100">
                <img
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=60"
                  alt="Case study 2"
                  className="img-fluid w-100"
                  style={{ borderRadius: 18, height: 240, objectFit: 'cover' }}
                />
                <div className="mt-3" style={{ color: '#F2C94C', fontWeight: 600 }}>
                  <span>Case study</span>
                  <span className="mx-2" style={{ color: '#F2C94C' }}>•</span>
                  <span style={{ color: '#F2C94C' }}>Health care</span>
                </div>
                <div className="fw-bold mt-2" style={{ color: '#ffffff' }}>
                  How We really achieved Results for
                  <br />[Project Name]
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="h-100">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop&q=60"
                  alt="Case study 3"
                  className="img-fluid w-100"
                  style={{ borderRadius: 18, height: 240, objectFit: 'cover' }}
                />
                <div className="mt-3" style={{ color: '#F2C94C', fontWeight: 600 }}>
                  <span>Case study</span>
                  <span className="mx-2" style={{ color: '#F2C94C' }}>•</span>
                  <span style={{ color: '#F2C94C' }}>Tech</span>
                </div>
                <div className="fw-bold mt-2" style={{ color: '#ffffff' }}>
                  How We Achieved Results for
                  <br />[Project Name]
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end mt-4">
            <button className="btn rounded-pill px-4 py-2" style={{ borderColor: '#F2C94C', color: '#F2C94C', borderWidth: 2, borderStyle: 'solid', background: 'transparent' }}>
              View all <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Don't just take our word for it section */}
      <section className="py-5" style={{ backgroundColor: '#0b0b0b', minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="text-center mb-2" style={{ color: '#F2C94C' }}>3940+ Happy Z.apps users</div>
          <h2 className="fw-bold text-center mb-5" style={{ color: '#ffffff' }}>Don't just take our <span style={{ color: '#F2C94C' }}>words</span></h2>

          {(() => {
            const testimonials = [
              {
                img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&auto=format&fit=crop&q=60',
                quote:
                  "We love Z.apps! Our designers were using it for their projects, so we already knew what kind of design they want.",
                name: 'Jenny Wilson',
                company: 'Grower.io',
              },
              {
                img: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&auto=format&fit=crop&q=60',
                quote:
                  "We love z.apps! Our designers were using it for their projects, so we already knew what kind of design they want.",
                name: 'Devon Lane',
                company: 'DLDesign.co',
              },
              {
                img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60',
                quote:
                  "Outstanding quality and great flexibility. It helped our team move much faster.",
                name: 'Courtney Henry',
                company: 'Stark Ltd',
              },
            ];

            const [index, setIndex] = useState(0);
            const left = testimonials[index % testimonials.length];
            const right = testimonials[(index + 1) % testimonials.length];

            const StarRow = () => (
              <div className="mb-3" style={{ color: '#F2C94C' }}>★★★★★</div>
            );

            return (
              <>
                <div className="row g-5 align-items-center justify-content-center">
                  {[left, right].map((t, i) => (
                    <div key={i} className="col-md-6">
                      <div className="d-flex gap-4 align-items-center">
                        <img
                          src={t.img}
                          alt={t.name}
                          className="rounded"
                          style={{ width: 230, height: 230, objectFit: 'cover' }}
                        />
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
                  <button
                    className="btn rounded-circle"
                    onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                    style={{ width: 44, height: 44, border: '2px solid #F2C94C', color: '#F2C94C' }}
                    aria-label="Previous"
                  >
                    ←
                  </button>
                  <div>
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        style={{
                          display: 'inline-block',
                          width: 10,
                          height: 10,
                          margin: '0 6px',
                          borderRadius: '50%',
                          backgroundColor: index % testimonials.length === d ? '#F2C94C' : 'rgba(255,255,255,0.25)'
                        }}
                      />
                    ))}
                  </div>
                  <button
                    className="btn rounded-circle"
                    onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
                    style={{ width: 44, height: 44, border: '2px solid #F2C94C', color: '#F2C94C' }}
                    aria-label="Next"
                  >
                    →
                  </button>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* Ready to Build the Future? section */}
      <section className="py-5 text-dark text-center" style={{ backgroundColor: '#F2C94C' }}>
        <div className="container py-4">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill mb-3" style={{ backgroundColor: 'rgba(0,0,0,0.08)', color: '#0b0b0b', fontWeight: 600 }}>
            <span>⚡</span>
            <span>Ready to get started?</span>
          </div>
          <h2 className="fw-bold mb-3" style={{ fontSize: 42 }}>Ready to Build the Future?</h2>
          <p className="mb-4" style={{ maxWidth: 760, margin: '0 auto' }}>
            Let's transform your ideas into powerful applications that drive real business results. Our team is ready to make it happen.
          </p>
          <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
            <button className="btn btn-dark rounded-pill px-4 py-2">Get In Touch →</button>
            <button className="btn btn-outline-dark rounded-pill px-4 py-2" style={{ borderWidth: 2 }}>View Our Work</button>
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

    </div>
  );
}

export default App;