import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Project() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="box d-flex align-items-center gap-5 ">
        <h1 className="me-5">Welcome to your Project</h1>
        <div className="box d-flex align-items-center gap-3 shadow p-2 pe-4 ps-4 rounded-5 justify-content-end ms-5">
          <p className="mb-0 d-flex align-items-center">
            <i className="bi bi-building me-2 fs-5"></i>
            Pinnacle Solutions 221
          </p>

          <button
          onClick={() => navigate("/ProjectModule")}
            className="ps-3 pe-3 text-white border-0 rounded fw-bold d-flex align-items-center gap-2"
            style={{ background: "rgb(59 108 255)" }}
          >
            <i className="bi bi-plus-lg"></i>
            New Project
          </button>

          <p className="mb-0 d-flex align-items-center">
            <i className="bi bi-bar-chart-line me-2 fs-5"></i>
            Common Dashboard
          </p>

          <p className="mb-0 d-flex align-items-center">
            <i className="bi bi-arrow-left-right me-2 fs-5"></i>
            Change
          </p>
        </div>
      </div>
      <h6 className="mb-5 mt-3">
        Select a project to view its dashboard, or create a new one to get
        started.
      </h6>
      {/* Search bar */}
      <div
        className="input-group input-group-sm shadow rounded-5 mt-5 p-2  "
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
        <span className="input-group-text border-0 bg-transparent ps-3">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="form-control p-2 ps-3 border-0 rounded-5 fw-bold"
          placeholder="Search by"
          aria-label="Search"
        />
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div
          onClick={() => navigate("/ProjectModule")}
          className="card text-center p-4 shadow rounded-4 d-flex flex-column align-items-center justify-content-center"
          style={{ cursor: "pointer", maxWidth: "250px" }}
        >
          <i className="bi bi-plus-circle fs-1 text-secondary opacity-50 animate__animated animate__pulse animate__infinite mb-3"></i>
          <h5 className="mb-2 fw-bold">Create New Project</h5>
          <p className="text-muted mb-0">Start from scratch</p>
        </div>
      </div>
      
    </div>
  );
}

export default Project;
