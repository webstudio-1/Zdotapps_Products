import React, { useState } from "react";
import hireLogo from "./images/z_hire_white.svg";
import hireLogo1 from "../../../images/hire_wlogo.png";
import zHireBg from "./images/z_hire.png";

const Zhire = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We will get back to you soon.");
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // ✅ Real Z.hire marketing content
  const features = [
    {
      title: "Streamlined Sourcing",
      text: "Your talent pipeline is automatically fed from multiple platforms, so you can stop searching and start hiring.",
    },
    {
      title: "Intelligent Matching",
      text: "Our AI-powered engine goes beyond keywords, intelligently scoring and categorizing candidates to find the perfect fit, every time.",
    },
    {
      title: "Automated Shortlisting",
      text: "Effortlessly narrow down your candidate pool. Our system provides a curated shortlist so you can focus on who truly matters.",
    },
    {
      title: "Seamless Communication",
      text: "Keep everyone in the loop with automated candidate notifications and scheduled recruiter calls, all in one place.",
    },

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

      <style>{`
        :root { --header-height: 80px; }
        .hero-background {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          height: calc(100svh - var(--header-height));
          position: relative;
          display: flex;
          align-items: stretch;
          margin-bottom: -1px;
        }
        .overlay { position: absolute; inset: 0; background-color: rgba(0,0,0,0.6); z-index: 1; }
        .content { position: relative; z-index: 5; width: 100%; }
        .inner-wrap { height: 100%; }
        .glass-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(16px); border: 1px solid rgba(255,193,7,0.3); border-radius: 20px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); }
        .glass-input { background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); color: white; }
        .glass-input::placeholder { color: rgba(255,255,255,0.7); }
        .glass-input:focus { background: rgba(255,255,255,0.15); border-color: rgba(255,193,7,0.5); box-shadow: 0 0 0 0.2rem rgba(255,193,7,0.25); color: white; }
        .feature-check { width: 32px; height: 32px; background-color: #ffc107; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .brand-text { font-size: 3rem; font-weight: bold; white-space: nowrap; }
        .brand-logo { height: 50px; max-width: 100%; object-fit: contain; }
        .yellow-text { color: #ffc107; }
        .feature-title { font-weight: 600; font-size: 1.25rem; color: #ffc107; }
        .feature-text { font-size: 1.125rem; line-height: 1.6; }
        .cta-text { font-size: 1.5rem; }
        .cta-subtitle { font-size: 1.125rem; color: #d1d5db; }
        .form-title { font-size: 2rem; font-weight: bold; }
        .btn-yellow { background-color: #ffc107; border-color: #ffc107; color: #000; font-weight: 500; transition: all 0.3s ease; }
        .btn-yellow:hover { background-color: #ffca2c; border-color: #ffca2c; color: #000; }
        @media (max-width: 991.98px) { .brand-text { font-size: clamp(1.6rem, 5vw, 2.25rem); } .brand-logo { height: 70px; } }
      `}</style>

      <div className="hero-background" style={{ backgroundImage: `url(${zHireBg})` }}>
        <div className="overlay"></div>

        <div className="container-fluid content d-flex align-items-start">
          <div className="container inner-wrap px-0 mt-5">
            <div className="text-center">
              <img src={hireLogo} alt="z.hire logo" className="brand-logo mt-2" style={{ height: "80px" }} />
            </div>

            <div className="row h-100 gx-3 gx-lg-4 align-items-start justify-content-between mt-3">
              {/* Left content with real copy */}
              <div className="col-lg-6 d-flex">
                <div className="p-3 ps-0">
                  <div className="mb-3">
                    <h1 className="brand-text text-white mb-0">
                      <span className="yellow-text">Z.hire</span> – Hiring Reimagined
                    </h1>
                  </div>

                  {features.map((f, i) => (
                    <div key={i} className="d-flex align-items-start mb-4">
                      <div className="feature-check me-3 mt-1">
                        <span style={{ fontSize: 20, color: "#000" }}>✓</span>
                      </div>
                      <div>
                        <p className="feature-title mb-1">{f.title}</p>
                        <p className="feature-text text-white mb-0">{f.text}</p>
                      </div>
                    </div>
                  ))}

                  <div className="pt-1">
                    <p className="cta-text text-white mb-3">
                      Ready to revolutionize your hiring process?
                    </p>
    <p className="cta-subtitle mb-0">
  Smarter hiring starts here{" "}
  <a
    href="https://zdotapps.com/zdotHire/login.php"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-warning btn-lg fw-bold ms-2"
  >
    Login to Z.hire
  </a>
</p>


                  </div>
                </div>
              </div>

              {/* Right-side form unchanged */}
              <div className="col-lg-5 d-flex justify-content-lg-end">
                <div className="p-3 p-lg-4 w-100 d-flex justify-content-lg-end pe-0">
                  <div style={{ maxWidth: "420px", width: "100%" }}>
                    <h2 className="form-title text-white text-center mb-3 mt-2">
                      Start Your Talent Hunt With <span className="yellow-text fw-bold">Z.hire!</span>
                    </h2>
                    <div className="card glass-card border-0">
                      <div className="card-body">
                        <form onSubmit={handleSubmit}>
                               <div className="mb-3">
                            <label htmlFor="email" className="form-label text-white">Full Name</label>
                            <input
                              type="name"
                              className="form-control glass-input"
                              id="email"
                              placeholder="Enter your name"
                              value={formData.email}
                              onChange={(e) => handleChange("email", e.target.value)}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label text-white">Email Address</label>
                            <input
                              type="email"
                              className="form-control glass-input"
                              id="email"
                              placeholder="Enter your email"
                              value={formData.email}
                              onChange={(e) => handleChange("email", e.target.value)}
                              required
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="phone" className="form-label text-white">Phone Number</label>
                            <input
                              type="tel"
                              className="form-control glass-input"
                              id="phone"
                              placeholder="Enter your phone number"
                              value={formData.phone}
                              onChange={(e) => handleChange("phone", e.target.value)}
                            />
                          </div>
                             <div className="mb-3">
  <label htmlFor="message" className="form-label text-white">Message</label>
  <textarea
    className="form-control glass-input"
    id="message"
    placeholder="Enter your message"
    value={formData.message}
    onChange={(e) => handleChange("message", e.target.value)}
    rows={4} // adjust height
  />
</div>

                          <div className="text">
                            <button type="submit" className="btn btn-yellow px-4 py-2 w-100">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Zhire;
