import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Reset from "./pages/Reset";
// import PrivateRoute from "./components/PrivateRoute";
import './App.css'
function App() {
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
                {/* <Sidebar /> */}
                <div className="flex-grow-1">
                  <Navbar />
                  <div className="p-4">
                    <Routes>
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="users" element={<Users />} />
                      <Route path="products" element={<Products />} />
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
