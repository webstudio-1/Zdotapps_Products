import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./careers.module.css";

// Job data
const jobData = [
  {
    id: 1,
    title: "Product Manager",
    department: "Management",
    experience: "5 to 9 years",
    availability: "Immediate Joinees",
    openings: "Multiple openings",
  },
  {
    id: 2,
    title: "Senior Android Developer",
    department: "Technology",
    experience: "4 to 9 years",
    availability: "Immediate Joinees",
    openings: "Multiple openings",
  },
  {
    id: 3,
    title: "Senior iOS Developer",
    department: "Technology",
    experience: "4 to 9 years",
    availability: "Immediate Joinees",
    openings: "Multiple openings",
  },
  {
    id: 4,
    title: "UI/UX Developer",
    department: "Creative & Design",
    experience: "2 to 6 years",
    availability: "Immediate Joinees",
    openings: "Multiple openings",
  },
];

const departments = ["All Departments", "Technology", "Management", "Creative & Design"];

export default function Careers() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
  const [filteredJobs, setFilteredJobs] = useState(jobData);

  const filteredJobsMemo = useMemo(() => {
    return jobData.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDepartment =
        selectedDepartment === "All Departments" || job.department === selectedDepartment;

      return matchesSearch && matchesDepartment;
    });
  }, [searchTerm, selectedDepartment]);

  useEffect(() => {
    setFilteredJobs(filteredJobsMemo);
  }, [filteredJobsMemo]);

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleDepartmentFilter = (e) => setSelectedDepartment(e.target.value);
  const handleViewToggle = (mode) => setViewMode(mode);
  const handleApplyNow = (jobId) => {
    const job = jobData.find((j) => j.id === jobId);
    navigate("/careers/details", { state: { job } });
  };

  return (
    <div className={`container mt-4 ${styles.page}`}>
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold text-dark mt-5 py-3">Career Opportunities at Z.Apps</h1>
        <p className="text-muted mb-0" style={{ maxWidth: 900, marginInline: "auto" }}>
          Join our innovative team and work on cutting-edge projects in a dynamic, collaborative environment. We're
          looking for passionate professionals to help shape the future of our company.
        </p>
      </div>

      {/* Search and Filter */}
<div className="mb-4">
  <div className="border rounded-3 p-4" style={{ backgroundColor: "#ffffffff" }}>
    <div className="row g-2 align-items-center">
      <div className="col-12 col-lg-8">
        <div className="input-group">
          <span className="input-group-text bg-light border-0 text-muted">
            <i className="bi bi-search"></i>
          </span>
          <input
            className="form-control bg-light border-0"
            placeholder="Search jobs by title, department, skills, or experience..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="col-8 col-lg-3">
        <div className="input-group">
          <span className="input-group-text bg-light border-0 text-muted">
            <i className="bi bi-building"></i>
          </span>
          <select
            className="form-select bg-light border-0"
            value={selectedDepartment}
            onChange={handleDepartmentFilter}
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="col-4 col-lg-1 d-flex justify-content-end gap-2">
        <button
          className={`btn ${viewMode === "grid" ? "btn-warning" : "btn-outline-secondary"} text-dark`}
          onClick={() => handleViewToggle("grid")}
        >
          <i className="bi bi-grid-3x3-gap"></i>
        </button>
        <button
          className={`btn ${viewMode === "list" ? "btn-warning" : "btn-outline-secondary"} text-dark`}
          onClick={() => handleViewToggle("list")}
        >
          <i className="bi bi-list"></i>
        </button>
      </div>
    </div>
    <div className={`mt-2 small ${styles.resultsText}`}>All jobs</div>
  </div>
</div>


      {/* Job Cards */}
      <div className="row g-4 mb-4">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className={viewMode === "grid" ? "col-12 col-md-6 col-lg-4 mb-4" : "col-12"}
          >
            <div className={`${styles.card} ${viewMode === "list" ? styles.listCard : ""}`}>
              <div className={viewMode === "list" ? styles.listContent : ""}>
                <span className={styles.deptBadge}>{job.department.toUpperCase()}</span>
                <h3 className={`h5 fw-bold ${styles.title}`}>{job.title}</h3>
                <div className={styles.metaWrap}>
                  <span className={styles.pill}>
                    <i className={`bi bi-briefcase me-1 ${styles.pillIcon}`}></i>
                    {job.experience}
                  </span>
                  <span className={styles.pill}>
                    <i className={`bi bi-clock me-1 ${styles.pillIcon}`}></i>
                    {job.availability}
                  </span>
                  <span className={styles.pill}>
                    <i className={`bi bi-people me-1 ${styles.pillIcon}`}></i>
                    {job.openings}
                  </span>
                </div>
                <div className={styles.actions}>
                  <button className={`btn fw-semibold ${styles.applyBtn}`} onClick={() => handleApplyNow(job.id)}>
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
