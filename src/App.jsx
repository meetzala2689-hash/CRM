import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Reset from "./pages/Reset";
import "./App.css";
import Project from "./pages/Project";
import ProjectModule from "./pages/ProjectModule";
import Pinnacle from "./pages/Pinnacle";
import Leads from "./pages/Leads";
import Sidebar from "./components/Sidebar";

function App() {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("projects");
    return saved ? JSON.parse(saved) : [];
  });

  const addProject = (project) => {
    const updated = [...projects, project];
    setProjects(updated);
    localStorage.setItem("projects", JSON.stringify(updated));
  };
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <div className="d-flex">
                <div className="flex-grow-1">
                  <Navbar />
                  <div className="">
                    <Routes>
                      <Route
                        path="/dashboard"
                        element={
                          <PrivateRoute>
                            <Dashboard />
                          </PrivateRoute>
                        }
                      />
                      <Route path="users" element={<Users />} />
                      <Route path="products" element={<Products />} />
                      <Route path="/pinnacle" element={<Pinnacle />} />
                      <Route path="leads" element={<Leads />}/>
                      <Route
                        path="/project"
                        element={<Project projects={projects} />}
                      />

                      <Route
                        path="/ProjectModule"
                        element={<ProjectModule addProject={addProject} />}
                      />
                    </Routes>
                  </div>
                </div>
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
