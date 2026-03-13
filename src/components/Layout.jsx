// src/components/Layout.js
import React from "react";
import Sidebar from "./Sidebar";
import "../assets/theme/assets/css/vendors.min.css";
import "../assets/theme/assets/css/app.min.css";

function Layout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh", margin: 0 }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div style={{ flexGrow: 1, padding: 20, backgroundColor: "#f8f9fa" }}>
        {children}
      </div>
    </div>
  );
}

export default Layout;