import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  const [dateTime, setDateTime] = useState(new Date());
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const users = [
    { id: 1, name: "Meet", email: "meet@gmail.com", number: "39294478747", details: "IT" },
    { id: 2, name: "John", email: "john@gmail.com", number: "1234567890", details: "HR" },
    { id: 3, name: "Alice", email: "alice@gmail.com", number: "9876543210", details: "Finance" },
    { id: 4, name: "Bob", email: "bob@gmail.com", number: "5556667777", details: "IT" },
    { id: 5, name: "Eve", email: "eve@gmail.com", number: "1112223333", details: "Marketing" },
    { id: 6, name: "Charlie", email: "charlie@gmail.com", number: "4445556666", details: "HR" },
  ];

  const departments = ["All", "IT", "HR", "Finance", "Marketing"];

  const getBadgeClass = (dept) => {
    switch (dept) {
      case "IT":
        return "bg-primary";
      case "HR":
        return "bg-success";
      case "Finance":
        return "bg-warning text-dark";
      case "Marketing":
        return "bg-info text-dark";
      default:
        return "bg-secondary";
    }
  };

  const filteredUsers = users.filter(
    (u) =>
      (filterDept === "All" || u.details === filterDept) &&
      (u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="container-fluid p-4">

      {/* Navbar */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Dashboard</h2>

        <div className="d-flex align-items-center gap-3">
          <span>🔔 Notifications</span>
          <span>{dateTime.toLocaleTimeString()}</span>

          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary"
          >
            + Add Employee
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card text-center shadow-sm p-3">
            <h6>Total Products</h6>
            <h3>45</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow-sm p-3">
            <h6>Total Users</h6>
            <h3>120</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow-sm p-3">
            <h6>Total Sales</h6>
            <h3>$9,500</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow-sm p-3">
            <h6>Active Orders</h6>
            <h3>24</h3>
          </div>
        </div>
      </div>

      {/* User Management Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <h4 className="text-primary mb-0">User Management</h4>

        <div className="d-flex gap-2 flex-wrap">

          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ minWidth: "200px" }}
          />

          <select
            className="form-select form-select-sm"
            value={filterDept}
            onChange={(e) => setFilterDept(e.target.value)}
          >
            {departments.map((dept) => (
              <option key={dept}>{dept}</option>
            ))}
          </select>

          <button
            className={`btn btn-sm ${view === "grid" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setView("grid")}
          >
            Grid
          </button>

          <button
            className={`btn btn-sm ${view === "list" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setView("list")}
          >
            List
          </button>
        </div>
      </div>

      {/* GRID VIEW */}
      {view === "grid" && (
        <div className="row g-4">
          {filteredUsers.map((user) => (
            <div key={user.id} className="col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm border-0 text-center p-3">

                <div
                  className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center mx-auto mb-3"
                  style={{ width: 70, height: 70, fontSize: "1.5rem" }}
                >
                  {user.name.charAt(0).toUpperCase()}
                </div>

                <h5>{user.name}</h5>
                <p className="text-muted mb-1">{user.email}</p>
                <p>{user.number}</p>

                <span className={`badge ${getBadgeClass(user.details)} mb-3`}>
                  {user.details}
                </span>

                <button className="btn btn-outline-primary btn-sm w-100">
                  View Profile
                </button>

              </div>
            </div>
          ))}
        </div>
      )}

      {/* LIST VIEW */}
      {view === "list" && (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.number}</td>

                  <td>
                    <span className={`badge ${getBadgeClass(user.details)}`}>
                      {user.details}
                    </span>
                  </td>

                  <td>
                    <button className="btn btn-sm btn-primary">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}

    </div>
  );
}

export default Dashboard;