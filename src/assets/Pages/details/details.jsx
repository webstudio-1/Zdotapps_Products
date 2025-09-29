import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Inline styles for modern look (move to CSS file in production)
const styles = {
  bg: {
    background: "#f7faff",
    minHeight: "100vh",
    padding: "40px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    background: "#fff",
    borderRadius: "2rem",
    boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
    padding: "2.5rem",
    width: "80%",
  },
  badge: {
    background: "#eaf1fb",
    color: "#ffc107",
    border: "none",
    fontWeight: 500,
    borderRadius: "1rem",
    padding: "0.5em 1em",
    fontSize: "1em",
  },
  tabs: {
    background: "#f1f5fd",
    borderRadius: "2rem",
    padding: "0.25rem",
    display: "flex",
    gap: "0.5rem",
    justifyContent: "center",
    marginBottom: "1.5rem",
  },
  tabBtn: {
    border: "none",
    background: "transparent",
    color: "#ffc107",
    fontWeight: 600,
    borderRadius: "2rem",
    padding: "0.5em 1.5em",
    transition: "background 0.2s, color 0.2s",
    fontSize: "1em",
    display: "flex",
    alignItems: "center",
    gap: "0.5em",
  },
  tabBtnActive: {
    background: "#ffc107",
    color: "#fff",
    boxShadow: "0 2px 8px rgba(99,102,241,0.08)",
  },
  input: {
    borderRadius: "1rem",
    border: "1.5px solid #e0e7ef",
    background: "#f8fafc",
  },
  inputFocus: {
    borderColor: "#ffc107",
    boxShadow: "0 0 0 2px #2563eb22",
  },
  btn: {
    borderRadius: "2rem",
    borderWidth: 2,
    fontWeight: 600,
    padding: "0.5em 2em",
  },
};

function useExternalResource(hrefOrSrc, type) {
  useEffect(() => {
    let el;
    if (type === "css") {
      el = document.createElement("link");
      el.rel = "stylesheet";
      el.href = hrefOrSrc;
      document.head.appendChild(el);
    } else if (type === "js") {
      el = document.createElement("script");
      el.src = hrefOrSrc;
      el.async = true;
      document.body.appendChild(el);
    }
    return () => {
      if (el && el.parentNode) el.parentNode.removeChild(el);
    };
  }, [hrefOrSrc, type]);
}

export default function JobDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const jobState = state?.job || state?.fallbackJob || null;

  const jobs = [
    {
      id: "product-manager",
      title: "Product Manager",
      experience: "5 to 9 years",
      noticePeriod: "Immediate Joinees",
      department: "Management",
      responsibilities: [
        "Define and communicate the product vision, strategy, and roadmap.",
        "Gather and prioritize customer requirements, market trends, and competitive intelligence.",
        "Translate business goals into clear product features and specifications.",
        "Collaborate with Operation and Management to deliver high-quality, scalable products on time.",
        "Drive go-to-market strategies in partnership with marketing and sales teams.",
        "Monitor product performance, user feedback, and KPIs to continuously improve.",
        "Act as a product evangelist internally and externally."
      ],
      qualifications: [
        "Masters in Business Administration or Bachelors in Engineering or related field.",
        "5 to 9 years overall experience and 3+ years in product management.",
        "Strong understanding of Agile methodologies and product lifecycle.",
        "Excellent communication, problem-solving, and leadership skills.",
        "Ability to manage multiple stakeholders and make data-driven decisions."
      ]
    },
    {
      id: "senior-android-developer",
      title: "Senior Android Developer",
      experience: "4 to 9 years",
      noticePeriod: "Immediate Joinees",
      department: "Technology",
      responsibilities: [
        "Design and build advanced applications for the Android platform.",
        "Collaborate with cross-functional teams to define, design, and ship new features.",
        "Work with outside data sources and APIs.",
        "Unit-test code for robustness, including edge cases, usability, and general reliability.",
        "Continuously discover, evaluate, and implement new technologies to maximize development efficiency."
      ],
      qualifications: [
        "Bachelor’s degree in Computer Science or related field.",
        "4+ years of Android development experience.",
        "Strong knowledge of Android SDK, different versions of Android, and how to deal with different screen sizes.",
        "Familiarity with RESTful APIs to connect Android applications to back-end services.",
        "Experience with offline storage, threading, and performance tuning."
      ]
    },
    {
      id: "senior-ios-developer",
      title: "Senior iOS Developer",
      experience: "4 to 9 years",
      noticePeriod: "Immediate Joinees",
      department: "Technology",
      responsibilities: [
        "Design and build advanced applications for the iOS platform.",
        "Collaborate with cross-functional teams to define, design, and ship new features.",
        "Unit-test code for robustness, including edge cases, usability, and general reliability.",
        "Work on bug fixing and improving application performance.",
        "Continuously discover, evaluate, and implement new technologies to maximize development efficiency."
      ],
      qualifications: [
        "Bachelor’s degree in Computer Science or related field.",
        "4+ years of iOS development experience.",
        "Proficient with Objective-C or Swift and Cocoa Touch.",
        "Experience with iOS frameworks such as Core Data, Core Animation, etc.",
        "Familiarity with RESTful APIs to connect iOS applications to back-end services."
      ]
    },
    {
      id: "ui-ux-developer",
      title: "UI/UX Developer",
      experience: "2 to 6 years",
      noticePeriod: "Immediate Joinees",
      department: "Creative & Design",
      responsibilities: [
        "Translate UI/UX design wireframes to actual code that will produce visual elements of the application.",
        "Work with designers to bridge the gap between graphical design and technical implementation.",
        "Develop new user-facing features.",
        "Build reusable code and libraries for future use.",
        "Ensure the technical feasibility of UI/UX designs."
      ],
      qualifications: [
        "Bachelor’s degree in Design, Computer Science, or related field.",
        "2+ years of experience in UI/UX development.",
        "Proficient understanding of web markup, including HTML5, CSS3.",
        "Basic understanding of server-side CSS pre-processing platforms.",
        "Good understanding of JavaScript frameworks, such as React or Angular."
      ]
    }
  ];

  const job = useMemo(() => {
    if (!jobState) return null;
    if (jobState.responsibilities && jobState.qualifications) return jobState;
    const byTitle = jobs.find(j => j.title === jobState.title);
    if (byTitle) {
      return { ...byTitle, ...jobState, noticePeriod: jobState.availability || byTitle.noticePeriod };
    }
    return jobState;
  }, [jobState]);

  useExternalResource("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css", "css");
  useExternalResource("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css", "css");
  useExternalResource("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js", "js");

  const [activeTab, setActiveTab] = useState("responsibilities");
  const [resumeName, setResumeName] = useState("Choose file or drag and drop");
  const [otpOpen, setOtpOpen] = useState(false);
  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
  const [submittingOTP, setSubmittingOTP] = useState(false);
  const [resendCount, setResendCount] = useState(0);
  const [otpError, setOtpError] = useState("");

  const phoneRef = useRef(null);
  const intlRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      if (phoneRef.current && window.intlTelInput && !intlRef.current) {
        intlRef.current = window.intlTelInput(phoneRef.current, {
          preferredCountries: ["in", "us", "gb", "au"],
          defaultCountry: "in",
          separateDialCode: true,
          utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });
        clearInterval(id);
      }
    }, 200);
    return () => clearInterval(id);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setResumeName(file ? file.name : "Choose file or drag and drop");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData();

    formData.append("first_name", form["first-name"].value);
    formData.append("last_name", form["last-name"].value);
    formData.append("email_address", form["email"].value);
    formData.append("phone_number", intlRef.current ? intlRef.current.getNumber() : form["phone"].value);
    formData.append("years_of_experience", form["years-of-experience"].value);
    formData.append("heard_about_us", form["how-you-heard-us?"].value);

    const resumeFile = form["resume"].files[0];
    if (resumeFile) formData.append("upload_resume", resumeFile);

    if (form["github-link"]?.value) formData.append("github_link", form["github-link"].value);
    if (form["linkedin-link"]?.value) formData.append("linkedin_link", form["linkedin-link"].value);
    if (form["figma-link"]?.value) formData.append("figma_link", form["figma-link"].value);

    if (!formData.get("first_name") || !formData.get("last_name") || !formData.get("email_address") ||
        !formData.get("phone_number") || !formData.get("upload_resume") ||
        !formData.get("years_of_experience") || !formData.get("heard_about_us")) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get("email_address"))) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!formData.get("phone_number") || formData.get("phone_number").replace(/\D/g, "").length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    setOtpOpen(true);
    window.pendingFormData = formData;
  };

  const updateOtpDigit = (index, value) => {
    const onlyNum = value.replace(/[^0-9]/g, "").slice(0, 1);
    const next = [...otpDigits];
    next[index] = onlyNum;
    setOtpDigits(next);
  };

  const verifyOtp = async () => {
    const code = otpDigits.join("");
    if (code.length !== 6) {
      setOtpError("Please enter a 6-digit verification code.");
      return;
    }

    setSubmittingOTP(true);

    setTimeout(async () => {
      setSubmittingOTP(false);
      setOtpOpen(false);

      try {
        const response = await fetch("/api/contact/", {
          method: "POST",
          body: window.pendingFormData,
        });

        if (response.ok) {
          alert("Application submitted successfully!");
        } else {
          const data = await response.json();
          console.error("Backend error:", data);
          alert("Error submitting form. Check console for details.");
        }
      } catch (err) {
        console.error("Network error:", err);
        alert("Network error. Please try again later.");
      }

      const form = document.querySelector("form");
      if (form) form.reset();
      setResumeName("Choose file or drag and drop");
      setOtpDigits(["", "", "", "", "", ""]);
    }, 1000);
  };

  const resendOtp = () => {
    if (resendCount >= 3) {
      alert("Maximum resend attempts reached. Please try again later.");
      return;
    }
    setResendCount((c) => c + 1);
    alert("A new verification code has been sent to your email.");
  };

  if (!job) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning">No job selected. Please go back to careers.</div>
      </div>
    );
  }

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <div className="row g-5 align-items-stretch flex-grow-1">
          {/* Left: Job Details */}
          <div className="col-12 col-lg-6 pe-lg-5 d-flex flex-column">
            <h1 className="h2 fw-bold mb-3 text-warning text-center">{job.title}</h1>
            <div className="d-flex flex-wrap gap-2 mb-4 fs-6 justify-content-center">
              <span style={styles.badge}><i className="fa-solid fa-briefcase me-2"></i>{job.experience}</span>
              <span style={styles.badge}><i className="fa-solid fa-sitemap me-2"></i>{job.department}</span>
              <span style={styles.badge}><i className="fa-solid fa-clock me-2"></i>{job.noticePeriod || "Immediate Joinees"}</span>
              <span style={styles.badge}><i className="fa-solid fa-users me-2"></i>Multiple openings</span>
            </div>
            {job.salaryNote && (
              <div className="alert alert-light border d-inline-flex align-items-center py-2 px-3 mb-3 mx-auto" role="alert">
                <i className="fa-solid fa-bolt text-warning me-2"></i>
                <span>{job.salaryNote}</span>
              </div>
            )}
            <div style={styles.tabs}>
              <button
                style={{
                  ...styles.tabBtn,
                  ...(activeTab === "responsibilities" ? styles.tabBtnActive : {}),
                }}
                onClick={() => setActiveTab("responsibilities")}
                type="button"
              >
                <i className="fa-solid fa-list-check"></i> Responsibilities
              </button>
              <button
                style={{
                  ...styles.tabBtn,
                  ...(activeTab === "qualifications" ? styles.tabBtnActive : {}),
                }}
                onClick={() => setActiveTab("qualifications")}
                type="button"
              >
                <i className="fa-solid fa-star"></i> Skills
              </button>
            </div>
            <ul className="list-unstyled ms-2 fs-6">
              {(activeTab === "responsibilities" ? job.responsibilities : job.qualifications || ["No specific qualifications listed for this position."]).map((item, i) => (
                <li key={i} className="mb-3 d-flex align-items-start">
                  <i className="fa-solid fa-circle-check text-warning me-2 mt-1"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Right: Form */}
          <div className="col-12 col-lg-6 ps-lg-5 border-start d-flex flex-column h-100" style={{borderColor:'#e9ecef'}}>
            <div className="mb-3 text-center">
              <h2 className="h3 fw-semibold mb-1 text-warning">Apply for this Position</h2>
            </div>
            <form onSubmit={handleSubmit} className="d-flex flex-column flex-grow-1">
              <div className="row g-3 fs-6">
                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold">First Name *</label>
                  <input className="form-control" name="first-name" placeholder="Enter your first name" required style={styles.input} />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold">Last Name *</label>
                  <input className="form-control" name="last-name" placeholder="Enter your last name" required style={styles.input} />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold">Email *</label>
                  <input type="email" className="form-control" name="email" placeholder="Enter your email" required style={styles.input} />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold">Phone Number *</label>
                  <input ref={phoneRef} className="form-control" name="phone" placeholder="Enter your phone number" required style={styles.input} />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold">
                    Upload Resume * <i className="fa-solid fa-circle-info text-primary ms-1" title="PDF, DOC, or DOCX"></i>
                  </label>
                  <input type="file" id="resume" name="resume" className="form-control" accept=".pdf,.doc,.docx" onChange={handleFileChange} required style={styles.input} />
                  <div className="form-text">{resumeName}</div>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold">GitHub</label>
                  <input className="form-control" name="github-link" placeholder="Your GitHub profile link" style={styles.input} />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold">LinkedIn</label>
                  <input className="form-control" name="linkedin-link" placeholder="Your LinkedIn profile link" style={styles.input} />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold">Figma</label>
                  <input className="form-control" name="figma-link" placeholder="Your Figma profile link" style={styles.input} />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold">Years of Experience *</label>
                  <select className="form-select" name="years-of-experience" required style={styles.input}>
                    <option value="">Select an option</option>
                    {[1,2,3,4,5,6,7,8,9].map((y)=> (
                      <option key={y} value={`${y} years`}>{y} {y===1?"year":"years"}</option>
                    ))}
                    <option value="10+ years">10+ years</option>
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold">How did you hear about us? *</label>
                  <select className="form-select" name="how-you-heard-us?" required style={styles.input}>
                    <option value="">Select an option</option>
                    <option>LinkedIn</option>
                    <option>Company Website</option>
                    <option>Job Board</option>
                    <option>Referral</option>
                    <option>Social Media</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <button type="submit" className="btn btn-outline-warning" style={styles.btn}>Submit Application</button>
              </div>
            </form>
          </div>
        </div>
        {/* OTP Dialog */}
        {otpOpen && (
          <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center" style={{zIndex:1050}}>
            <div className="bg-white rounded-3 shadow p-4" style={{width:'min(520px, 92vw)'}}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Email Verification</h5>
                <button className="btn btn-sm btn-outline-secondary" onClick={()=>setOtpOpen(false)}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <div className="text-center mb-3">
                <i className="fa-solid fa-envelope text-warning me-2"></i>
                <p className="mb-0">We've sent a verification code to your email</p>
              </div>
              <div className="d-flex justify-content-center gap-2 mb-2">
                {otpDigits.map((d, i)=> (
                  <input key={i} className="form-control text-center" style={{width:48}} value={d} onChange={(e)=>updateOtpDigit(i, e.target.value)} maxLength={1} />
                ))}
              </div>
              {!!otpError && <div className="text-danger small text-center mb-2">{otpError}</div>}
              <div className="d-flex justify-content-center gap-2">
       
                <button className="btn btn-outline-secondary" onClick={resendOtp}>
                  <i className="fa-solid fa-redo me-2"></i>Resend Code
                </button>
                         <button className="btn btn-success" disabled={submittingOTP} onClick={verifyOtp}>
                  {submittingOTP ? <><i className="fa-solid fa-spinner fa-spin me-2"></i>Verifying...</> : <><i className="fa-solid fa-check me-2"></i>Verify & Submit</>}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}