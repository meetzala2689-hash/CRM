import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/"); 
  };

  return (
    <div
      className="text-dark p-3 vh-100 d-flex flex-column bg-white shadow-sm border-end"
      style={{ width: "250px" }}
    >
      <h4>CRM Admin</h4>

      <ul className="list-unstyled mt-4 flex-grow-1">
        <li className="mb-2">
          <Link className="text-dark text-decoration-none" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link className="text-dark text-decoration-none" to="/users">
            Users
          </Link>
        </li>
        <li className="mb-2">
          <Link className="text-dark text-decoration-none" to="/products">
            Products
          </Link>
        </li>
      </ul>

      <button
        className="btn w-100 mt-auto fw-semibold"
        style={{
           background: "linear-gradient(135deg, #fd0000, #f39898)",
           border: "none",
        }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;