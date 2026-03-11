import React, { useState, useEffect, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  const [dateTime, setDateTime] = useState(new Date());
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editUserId, setEditUserId] = useState(null);

  // const [users, setUsers] = useState([]);
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const departments = ["All", "IT", "HR", "Finance", "Marketing"];

  const initialEmployeeState = {
    // name: "",
    organization: "",
    email: "",
    number: "",
    details: "IT",
    country: "",
    state: "",
    city: "",
    street: "",
    postalCode: "",
  };

  const [newEmployee, setNewEmployee] = useState(initialEmployeeState);

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

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

  const filteredUsers = useMemo(() => {
    return users.filter(
      (u) =>
        (filterDept === "All" || u.details === filterDept) &&
        (u.name.toLowerCase().includes(search.toLowerCase()) ||
          u.email.toLowerCase().includes(search.toLowerCase())),
    );
  }, [users, filterDept, search]);

  const handleSave = () => {
    if (!newEmployee.name || !newEmployee.email || !newEmployee.number) {
      alert("Please fill all required fields!");
      return;
    }

    if (editUserId) {
      // Editing existing user
      setUsers(
        users.map((u) => (u.id === editUserId ? { ...u, ...newEmployee } : u)),
      );
      setEditUserId(null);
    } else {
      // Adding new user
      setUsers([...users, { id: Date.now(), ...newEmployee }]);
    }

    setNewEmployee(initialEmployeeState);
    setIsModalOpen(false);
  };

  const handleEdit = (user) => {
    setNewEmployee(user);
    setEditUserId(user.id);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  return (
    <div className="container-fluid p-4">
      {/* Navbar */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Dashboard</h2>
        <div className="d-flex align-items-center gap-3 m-2">
          <span>🔔 Notifications</span>
          <span>{dateTime.toLocaleTimeString()}</span>
          <button
            onClick={() => {
              setNewEmployee(initialEmployeeState);
              setEditUserId(null);
              setIsModalOpen(true);
            }}
            className="btn btn-primary"
          >
            + Create Organization
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
            <h3>{users.length}</h3>
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
            className={`btn btn-sm ${
              view === "grid" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setView("grid")}
          >
            Grid
          </button>
          <button
            className={`btn btn-sm ${
              view === "list" ? "btn-primary" : "btn-outline-primary"
            }`}
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
            <div
              key={user.id}
              className="col-sm-6 col-md-4 col-lg-3 shadow-lg "
              style={{ width: "340px", height: "300px" }}
            >
              <div className="card h-100 shadow-sm border-0 text-center p-3">
                <div
                  className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center mx-auto mb-3"
                  style={{ width: 40, height: 40, fontSize: "1.5rem" }}
                >
                  {user.name.charAt(0).toUpperCase()}
                </div>
                {/* <h5>{user.name}</h5> */}
                <h5>{user.name}</h5>
                <p className="mb-1">
                  <strong>Organization:</strong> {user.organization}
                </p>
                <p className="text-muted mb-1">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="mb-1">
                  <strong>Phone:</strong> {user.number}
                </p>
                <p className="mb-1">
                  <strong>Address:</strong> {user.street}, {user.city},{" "}
                  {user.state}, {user.country} - {user.postalCode}
                </p>
                <span className={`badge ${getBadgeClass(user.details)} mb-3`}>
                  {user.details}
                </span>
                <span className={`badge ${getBadgeClass(user.details)} mb-3`}>
                  {user.details}
                </span>
                <div className="d-flex gap-2">
                   <button
                    className="btn btn-outline-primary btn-sm w-50"
                    // onClick={ }
                  >
                    View
                  </button>
                  <button
                    className="btn btn-outline-primary btn-sm w-50"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                </div>
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
                  <td>{user.organization}</td>
                  <td>{user.email}</td>
                  <td>{user.number}</td>
                  <td>{user.details}</td>
                  <td>{user.country}</td>
                  <td>{user.state}</td>
                  <td>{user.city}</td>
                  <td>{user.street}</td>
                  <td>{user.postalCode}</td>
                  <td className="d-flex gap-2">
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ADD/EDIT EMPLOYEE MODAL */}
      {isModalOpen && (
        <>
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog modal-lg">
              <div className="modal-content p-3">
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Organization Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newEmployee.organization || ""}
                      onChange={(e) =>
                        setNewEmployee({
                          ...newEmployee,
                          organization: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newEmployee.name}
                      onChange={(e) =>
                        setNewEmployee({ ...newEmployee, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={newEmployee.email}
                      onChange={(e) =>
                        setNewEmployee({
                          ...newEmployee,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newEmployee.number}
                      onChange={(e) =>
                        setNewEmployee({
                          ...newEmployee,
                          number: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Department</label>
                    <select
                      className="form-select"
                      value={newEmployee.details}
                      onChange={(e) =>
                        setNewEmployee({
                          ...newEmployee,
                          details: e.target.value,
                        })
                      }
                    >
                      {departments
                        .filter((d) => d !== "All")
                        .map((d) => (
                          <option key={d}>{d}</option>
                        ))}
                    </select>
                  </div>

                  {/* Address Information */}
                  <h6 className="mt-4">Address Information</h6>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        value={newEmployee.country || ""}
                        onChange={(e) =>
                          setNewEmployee({
                            ...newEmployee,
                            country: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">State</label>
                      <input
                        type="text"
                        className="form-control"
                        value={newEmployee.state || ""}
                        onChange={(e) =>
                          setNewEmployee({
                            ...newEmployee,
                            state: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        className="form-control"
                        value={newEmployee.city || ""}
                        onChange={(e) =>
                          setNewEmployee({
                            ...newEmployee,
                            city: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Street Address</label>
                      <input
                        type="text"
                        className="form-control"
                        value={newEmployee.street || ""}
                        onChange={(e) =>
                          setNewEmployee({
                            ...newEmployee,
                            street: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Postal Code</label>
                      <input
                        type="text"
                        className="form-control"
                        value={newEmployee.postalCode || ""}
                        onChange={(e) =>
                          setNewEmployee({
                            ...newEmployee,
                            postalCode: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setIsModalOpen(false);
                      setEditUserId(null);
                    }}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSave}
                  >
                    {editUserId ? "Update" : "Save"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
