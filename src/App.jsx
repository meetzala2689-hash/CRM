import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
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
import Orders from "./pages/Ecommerce/Orders/Orders";
import OrderDetails from "./pages/Ecommerce/Orders/OrderDetails";
import AddEditOrder from "./pages/Ecommerce/Orders/AddEditOrder";
import AddProduct from "./pages/Ecommerce/Products/AddProduct";
import ProductsDetails from "./pages/Ecommerce/Products/ProductsDetails";
import ProductsGrid from "./pages/Ecommerce/Products/ProductsGrid";
import EcomProducts from "./pages/Ecommerce/Products/Products";
import Sellers from "./pages/Ecommerce/Sellers/Sellers";
import SellersDetails from './pages/Ecommerce/Sellers/SellersDetails';
import Category from "./pages/Ecommerce/Category";
import Checkout from "./pages/Ecommerce/Checkout";
import Customers from "./pages/Ecommerce/Customers";
import Refunds from "./pages/Ecommerce/Refunds";
import Reviews from "./pages/Ecommerce/Reviews";
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
                      <Route path="pinnacle" element={<Pinnacle />} />
                      {/* <Route path="leads" element={<Leads />}/> */}
                      {/* <Route path="/opprtunities" element={<Opportunities />}/> */}
                      {/* <Route path="/contacts" element={<Contacts />} /> */}
                      {/* <Route path="/tasks" element={<Tasks />} /> */}
                      {/* <Route path="/events" element={<Events />} /> */}
                      {/* <Route path="/properties" element={<Properties />} /> */}
                      {/* <Route path="/areas"  element={<Areas />}/> */}
                      {/* <Route path="/units"  element={<Units />}/> */}

                      {/* Dashboard */}
                      {/* <Route path="analytics" element={<Analytics />} /> */}
                      <Route
                        path="dashboard-analytics"
                        element={<Analytics />}
                      />
                      <Route path="crm" element={<CRM />} />
                      <Route path="finance" element={<Finance />} />
                      <Route path="projects2" element={<Projects />} />

                      {/* Ecommerce */}
                      <Route path="cart" element={<Cart />} />
                      <Route path="category" element={<Category />}/>
                      <Route path="checkout" element={<Checkout />}/>
                      <Route path="customers" element={<Customers />}/>
                      <Route path="refunds" element={<Refunds />}/>
                      <Route path="reviews" element={<Reviews />}/>
                      {/* Orders */}
                      <Route path="orders" element={<Orders />} />
                      <Route
                        path="orderDetails"
                        element={<OrderDetails />}
                      />
                      <Route
                        path="addEditOrder"
                        element={<AddEditOrder />}
                      />

                      {/* Product */}
                      <Route path="addproduct" element={<AddProduct />} />
                      <Route
                        path="productDetails"
                        element={<ProductsDetails />}
                      />
                      <Route path="productGrid" element={<ProductsGrid />} />
                      <Route path="products" element={<EcomProducts />} />

                      {/* Sellers */}
                      <Route path="sellers" element={<Sellers />}/>
                      <Route path="sellersDetails" element={<SellersDetails />} />

                      <Route
                        path="project"
                        element={<Project projects={projects} />}
                      />
                      <Route
                        path="ProjectModule"
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
