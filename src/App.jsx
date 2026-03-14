import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
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
// import Leads from "./pages/Leads";
// import Opportunities from "./pages/Opportunities";
// import Contacts from "./pages/Contacts";
// import Events from "./pages/Events";
// import Properties from "./pages/Properties";
// import Areas from "./pages/Areas";
// import Units from "./pages/Units";
// import Tasks from "./pages/Tasks";
// import Sidebar from "./components/Sidebar";
import Analytics from "./pages/Dashboard/Analytics";
import Finance from "./pages/Dashboard/Finance";
import Projects from "./pages/Dashboard/Projects";
import CRM from "./pages/Dashboard/CRM";
import Cart from "./pages/Ecommerce/Cart";
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
                  <div>
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
                      {/* <Route path="leads" element={<Leads />}/> */}
                      {/* <Route path="/opprtunities" element={<Opportunities />}/> */}
                      {/* <Route path="/contacts" element={<Contacts />} /> */}
                      {/* <Route path="/tasks" element={<Tasks />} /> */}
                      {/* <Route path="/events" element={<Events />} /> */}
                      {/* <Route path="/properties" element={<Properties />} /> */}
                      {/* <Route path="/areas"  element={<Areas />}/> */}
                      {/* <Route path="/units"  element={<Units />}/> */}
                      <Route path="/finance" element={<Finance />} />
                      <Route path="/crm" element={<CRM />} />
                      <Route path="/projects2" element={<Projects />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route
                        path="/dashboard-analytics.html"
                        element={<Analytics />}
                      />
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
