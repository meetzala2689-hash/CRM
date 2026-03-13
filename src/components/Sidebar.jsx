import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaUsers,
  FaTasks,
  FaCalendarAlt,
  FaBuilding,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // mobile
  const [isCollapsed, setIsCollapsed] = useState(false); // desktop collapse
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [hoveredIdx, setHoveredIdx] = useState(null); // track hover for smooth transition
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { title: "Dashboard", path: "/pinnacle", icon: <FaHome /> },
    { section: "SALES" },
    { title: "Leads", path: "/leads", icon: <FaUsers /> },
    { title: "Opportunities", path: "/opprtunities", icon: <FaUsers /> },
    { title: "Contacts", path: "/contacts", icon: <FaUsers /> },
    { section: "PLANNING" },
    { title: "Tasks", path: "/tasks", icon: <FaTasks /> },
    { title: "Events", path: "/events", icon: <FaCalendarAlt /> },
    { section: "PROPERTY" },
    { title: "Properties", path: "/properties", icon: <FaBuilding /> },
    { title: "Areas", path: "/areas", icon: <FaMapMarkerAlt /> },
    { title: "Units", path: "/units", icon: <FaBuilding /> },
  ];

  const sidebarStyle = {
    width: isCollapsed ? "70px" : "240px",
    minHeight: "100vh",
    background: "linear-gradient(180deg, #ffffff, #f1f4f8)",
    borderRight: "1px solid #e0e0e0",
    padding: "20px 15px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: isDesktop ? "relative" : "fixed",
    top: 0,
    left: isDesktop ? 0 : isOpen ? 0 : "-300px",
    transition: "all 0.3s ease",
    zIndex: 1000,
    boxShadow: !isDesktop && isOpen ? "2px 0 12px rgba(0,0,0,0.15)" : "none",
    overflowY: "auto",
  };

  const overlayStyle = {
    display: !isDesktop && isOpen ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 900,
    transition: "opacity 0.3s",
  };

  const linkStyle = (path) => ({
    textDecoration: "none",
    color: location.pathname === path ? "#fff" : "#333",
    backgroundColor: location.pathname === path ? "#0d6efd" : "transparent",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "10px 15px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 500,
    justifyContent: isCollapsed ? "center" : "flex-start",
    transition: "background-color 0.3s ease, color 0.3s ease",
    cursor: "pointer",
  });

  return (
    <>
      {/* Hamburger for mobile */}
      {!isDesktop && (
        <div
          style={{
            left: "15px",
            fontSize: "24px",
            cursor: "pointer",
            zIndex: 1100,
            color: "#0d6efd",
            position: "fixed",
            top: "15px",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </div>
      )}

      {/* Overlay */}
      <div style={overlayStyle} onClick={() => setIsOpen(false)}></div>

      <div style={sidebarStyle}>
        {/* Logo + Collapse Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: isCollapsed ? "center" : "space-between",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#0d6efd",
              whiteSpace: "nowrap",
              transition: "opacity 0.3s",
              opacity: isCollapsed ? 0 : 1,
            }}
          >
            Paces
          </div>
          {isDesktop && (
            <div
              style={{
                cursor: "pointer",
                fontSize: "18px",
                color: "#0d6efd",
                transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s",
              }}
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              &#9664;
            </div>
          )}
        </div>

        {/* Menu Items */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {menuItems.map((item, idx) => {
            if (item.section) {
              return (
                <p
                  key={idx}
                  style={{
                    marginTop: "25px",
                    marginBottom: "8px",
                    fontSize: "12px",
                    color: "#6c757d",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    textAlign: isCollapsed ? "center" : "left",
                  }}
                >
                  {isCollapsed ? item.section[0] : item.section}
                </p>
              );
            }

            return (
              <li key={idx} style={{ marginBottom: "10px" }}>
                <Link
                  to={item.path}
                  style={{
                    ...linkStyle(item.path),
                    backgroundColor:
                      location.pathname === item.path
                        ? "#0d6efd"
                        : hoveredIdx === idx
                        ? "#e7f1ff"
                        : "transparent",
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => !isDesktop && setIsOpen(false)}
                >
                  <span
                    style={{
                      display: "inline-block",
                      transition: "transform 0.3s",
                      transform: hoveredIdx === idx ? "scale(1.2)" : "scale(1)",
                    }}
                  >
                    {item.icon}
                  </span>
                  {!isCollapsed && item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;