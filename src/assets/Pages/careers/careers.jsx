import React from "react";

export default function Careers() {
  return (
    <section className="bg-dark py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="display-5 fw-bold text-white">Career Opportunities at Z.Apps</h1>
          <p className="text-white-50 mb-0" style={{ maxWidth: 900, marginInline: 'auto' }}>
            Join our innovative team and work on cutting-edge projects in a dynamic, collaborative environment.
            We're looking for passionate professionals to help shape the future of our company.
          </p>
        </div>

        {/* Search / Filters */}
        <div className="bg-dark rounded-3 mb-4">
          <div className="row g-2 align-items-center">
            <div className="col-12 col-lg-8">
              <div className="input-group">
                <span className="input-group-text bg-secondary border-0 text-white-50"><i className="bi bi-search"></i></span>
                <input className="form-control bg-secondary border-0 text-white" placeholder="Search jobs by title, department, skills, or experience..." />
              </div>
            </div>
            <div className="col-8 col-lg-3">
              <div className="input-group">
                <span className="input-group-text bg-secondary border-0 text-white-50"><i className="bi bi-building"></i></span>
                <select className="form-select bg-secondary border-0 text-white">
                  <option>All Departments</option>
                  <option>Technology</option>
                  <option>Management</option>
                  <option>Creative & Design</option>
                </select>
              </div>
            </div>
            <div className="col-4 col-lg-1 d-flex justify-content-end gap-2">
              <button className="btn btn-secondary text-white"><i className="bi bi-grid-3x3-gap"></i></button>
              <button className="btn btn-secondary text-white"><i className="bi bi-list"></i></button>
            </div>
          </div>
          <div className="mt-2 small text-white-50">All jobs</div>
        </div>

        {/* Job Cards */}
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-white rounded-3 shadow-sm p-3 h-100">
              <span className="badge bg-light text-secondary border mb-2">MANAGEMENT</span>
              <h3 className="h5 mb-3">Product Manager</h3>
              <div className="d-flex flex-wrap gap-2 mb-2">
                <span className="badge bg-light text-secondary"><i className="bi bi-clock me-1"></i>5 to 9 years</span>
                <span className="badge bg-light text-secondary"><i className="bi bi-lightning-charge me-1"></i>Immediate Joinees</span>
              </div>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-light text-secondary"><i className="bi bi-people me-1"></i>Multiple openings</span>
              </div>
              <button className="btn btn-warning text-dark fw-semibold">Apply Now</button>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-white rounded-3 shadow-sm p-3 h-100">
              <span className="badge bg-light text-secondary border mb-2">TECHNOLOGY</span>
              <h3 className="h5 mb-3">Senior Android Developer</h3>
              <div className="d-flex flex-wrap gap-2 mb-2">
                <span className="badge bg-light text-secondary"><i className="bi bi-clock me-1"></i>5 to 9 years</span>
                <span className="badge bg-light text-secondary"><i className="bi bi-lightning-charge me-1"></i>Immediate Joinees</span>
              </div>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-light text-secondary"><i className="bi bi-people me-1"></i>Multiple openings</span>
              </div>
              <button className="btn btn-warning text-dark fw-semibold">Apply Now</button>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-white rounded-3 shadow-sm p-3 h-100">
              <span className="badge bg-light text-secondary border mb-2">TECHNOLOGY</span>
              <h3 className="h5 mb-3">Senior iOS Developer</h3>
              <div className="d-flex flex-wrap gap-2 mb-2">
                <span className="badge bg-light text-secondary"><i className="bi bi-clock me-1"></i>5 to 9 years</span>
                <span className="badge bg-light text-secondary"><i className="bi bi-lightning-charge me-1"></i>Immediate Joinees</span>
              </div>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-light text-secondary"><i className="bi bi-people me-1"></i>Multiple openings</span>
              </div>
              <button className="btn btn-warning text-dark fw-semibold">Apply Now</button>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-white rounded-3 shadow-sm p-3 h-100">
              <span className="badge bg-light text-secondary border mb-2">CREATIVE & DESIGN</span>
              <h3 className="h5 mb-3">UI/UX Developer</h3>
              <div className="d-flex flex-wrap gap-2 mb-2">
                <span className="badge bg-light text-secondary"><i className="bi bi-clock me-1"></i>2 to 6 years</span>
                <span className="badge bg-light text-secondary"><i className="bi bi-lightning-charge me-1"></i>Immediate Joinees</span>
              </div>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-light text-secondary"><i className="bi bi-people me-1"></i>Multiple openings</span>
              </div>
              <button className="btn btn-warning text-dark fw-semibold">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


