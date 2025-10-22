import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Step 1: Import useNavigate
import exampleImage from '../../../images/forms.png';
import zformsLogo from '../../../images/forms_v2_wlogo.png';
import zformsLogo1 from '../../../images/forms.png';

// Bootstrap 5 based Z.forms landing + lead capture form
export default function Zform() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate();  // Step 2: Get the navigate function

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest in Z.forms! We will contact you soon.');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  const handleLoginRedirect = () => {
    navigate('/login'); // Step 3: Redirect to the Gider login page
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{ background: 'linear-gradient(135deg, #000 0%, #FFF8DC 50%, #000 100%)' }}
    >
      <div className="container py-4 py-md-5 mt-5">
        <div className="row g-0 shadow-lg rounded-4 overflow-hidden bg-white mt-5" style={{ minHeight: 600 }}>
          {/* Left Section - Hero (Glassmorphism only) */}
          <div className="col-12 col-lg-6 position-relative d-flex align-items-center justify-content-center" style={{ minHeight: 600 }}>
            <div
              className="text-center p-4 p-md-5 rounded-4"
              style={{
                maxWidth: 560,
                background: 'transparent',
                borderColor: 'transparent',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              {/* Z.forms logo */}
              <img src={zformsLogo1} alt="Z.forms" width={200} className="" />
              <p className="text-warning fs-3 mb-2 mt-2">Interactive Online Forms for Businesses</p>
              <p
                className="text-dark fs-5 mb-5"
              >
                Enable data collection, surveys, and workflows with simplicity and flexibility for your
                business success.
              </p>
              <hr className="border-warning opacity-75" />
              <ul
                className="list-unstyled text-start text-dark m-0 fs-5"
              >
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle-fill text-warning me-2"></i>
                  Custom Form Builder
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-graph-up-arrow text-warning me-2"></i>
                  Advanced Analytics
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-diagram-3-fill text-warning me-2"></i>
                  Workflow Integration
                </li>
               <li className="d-flex align-items-center">
                  <i className="bi bi-shield-lock-fill text-warning me-2"></i>
                  Secure Data Collection
                </li>

                <div className="mt-4">
                  <button onClick={handleLoginRedirect} className="btn btn-warning btn-lg">
                    Login to Z.forms
                  </button>
                </div>

              </ul>
            </div>
          </div>

          {/* Right Section - Registration Form */}
          <style>{`
            .bg-black .form-control::placeholder { color: #ffffff !important; opacity: 1; }
            .bg-black .form-control:-ms-input-placeholder { color: #ffffff !important; }
            .bg-black .form-control::-ms-input-placeholder { color: #ffffff !important; }
          `}</style>
          <div className="col-12 col-lg-6 bg-black text-white d-flex align-items-center">
            <div className="p-4 p-md-5 w-100" style={{ maxWidth: 480, marginInline: 'auto' }}>
              {/* Replace heading with logo */}
              <div className="text-center mb-2">
                <img src={zformsLogo} alt="Z.forms" width={192} />
              </div>
              <p className="text-white-50 mb-4 text-center">Start building professional forms for your business</p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-control bg-transparent text-white border-secondary"
                    placeholder="First Name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-control bg-transparent text-secondary border-secondary"
                    placeholder="Last Name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control bg-transparent text-secondary border-secondary"
                    placeholder="Email ID"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-control bg-transparent text-secondary border-secondary"
                    placeholder="Message"
                    rows="3"
                  />
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-warning text-black fw-bold px-4 py-2 rounded-pill" style={{ width: '50%' }}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
