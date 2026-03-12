import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="bg-white border-end p-2"
      style={{ width: "260px", minHeight: "100vh" }}
    >
      <div className="p-3 fw-bold fs-5 text-dark">Paces</div>

      <ul className="nav flex-column px-2">

        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/pinnacle">Dashboard</Link>
        </li>

        <p className="text-muted small mt-3 fw-bold">SALES</p>

        <li className="nav-item">
          <Link className="nav-link text-dark" to="/leads">Leads</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-dark" to="/opportunities">Opportunities</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-dark" to="/contacts">Contacts</Link>
        </li>

        <p className="text-muted small mt-3 fw-bold">PLANNING</p>

        <li className="nav-item">
          <Link className="nav-link text-dark" to="/tasks">Tasks</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-dark" to="/events">Events</Link>
        </li>

        <p className="text-muted small mt-3 fw-bold">PROPERTY</p>

        <li className="nav-item">
          <Link className="nav-link text-dark" to="/properties">Properties</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-dark" to="/areas">Areas</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-dark" to="/units">Units</Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;