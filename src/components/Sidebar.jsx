import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div>
        <div
          className="sidenav-menu sidebar bg-light vh-100 overflow-auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            overflow: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {/* Logo */}
          <a href="index.html" className="logo">
            <span className="logo logo-light">
              <span className="logo-lg">
                <img src="assets/images/logo.png" alt="logo" />
              </span>
              <span className="logo-sm">
                <img src="assets/images/logo-sm.png" alt="small logo" />
              </span>
            </span>

            <span className="logo logo-dark">
              {/* <span className="logo-lg"><img src="assets/images/logo-black.png" alt="dark logo" /></span> */}
              <span className="logo-sm">
                <img src="assets/images/logo-sm.png" alt="small logo" />
              </span>
            </span>
          </a>

          <button className="button-on-hover">
            <span className="btn-on-hover-icon"></span>
          </button>

          <button className="button-close-offcanvas">
            <i className="ti ti-menu-4 align-middle"></i>
          </button>

          <div className="scrollbar" data-simplebar="">
            <div
              id="user-profile-settings"
              className="sidenav-user"
              style={{ background: "url(assets/images/user-bg-pattern.svg)" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <a href="#!" className="link-reset">
                    <img
                      src="assets/images/users/user-1.jpg"
                      alt="user-image"
                      className="rounded-circle mb-2 avatar-md"
                    />
                    <span className="sidenav-user-name fw-bold">David Dev</span>
                    <span className="fs-12 fw-semibold" data-lang="user-role">
                      Art Director
                    </span>
                  </a>
                </div>
                
                <div>
                  <a
                    className="dropdown-toggle drop-arrow-none link-reset sidenav-user-set-icon"
                    data-bs-toggle="dropdown"
                    data-bs-offset="0,12"
                    href="#!"
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                    <i className="ti ti-settings fs-24 align-middle ms-1"></i>
                  </a>

                  <div className="dropdown-menu">
                    <div className="dropdown-header noti-title">
                      <h6 className="text-overflow m-0">Welcome back!</h6>
                    </div>

                    <a href="#!" className="dropdown-item">
                      <i className="ti ti-user-circle me-1 fs-lg align-middle"></i>
                      <span className="align-middle">Profile</span>
                    </a>

                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="ti ti-settings-2 me-1 fs-lg align-middle"></i>
                      <span className="align-middle">Account Settings</span>
                    </a>

                    <a href="auth-lock-screen.html" className="dropdown-item">
                      <i className="ti ti-lock me-1 fs-lg align-middle"></i>
                      <span className="align-middle">Lock Screen</span>
                    </a>

                    <a
                      href="javascript:void(0);"
                      className="dropdown-item text-danger fw-semibold"
                    >
                      <i className="ti ti-logout me-1 fs-lg align-middle"></i>
                      <span className="align-middle">Log Out</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div id="sidenav-menu">
              <ul className="side-nav">
                <li className="side-nav-title mt-2" data-lang="main">
                  Main
                </li>

                {/* Dashboard */}
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#dashboards" aria-expanded="false" aria-controls="dashboards" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-dashboard"></i></span>
                        <span className="menu-text" data-lang="dashboards">Dashboards</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="dashboards">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="index.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="dashboard-ecommerce">Ecommerce</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <Link to="/dashboard-analytics" className="side-nav-link">
                                    <span className="menu-text" data-lang="dashboard-analytics">Analytics</span>
                                </Link>
                            </li>
                            <li className="side-nav-item">
                                <a href="dashboard-crm.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="dashboard-crm">CRM</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="dashboard-finance.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="dashboard-finance">Finance</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="dashboard-projects.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="dashboard-projects">Projects</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li> 
             
                {/* Apps */}
                <li className="side-nav-title mt-2" data-lang="apps">
                  Apps
                </li>

                {/* Ecommerce */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#ecommerce"
                    aria-expanded="false"
                    aria-controls="ecommerce"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-basket"></i>
                    </span>
                    <span className="menu-text" data-lang="ecommerce">
                      Ecommerce
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="ecommerce">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a
                          data-bs-toggle="collapse"
                          href="#products"
                          aria-expanded="false"
                          aria-controls="products"
                          className="side-nav-link"
                        >
                          <span className="menu-text" data-lang="products">
                            Products
                          </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="products">
                          <ul className="sub-menu">
                            <li className="side-nav-item">
                              <a
                                href="apps-ecommerce-products.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-ecommerce-products"
                                >
                                  Products
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="apps-ecommerce-products-grid.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-ecommerce-products-grid"
                                >
                                  Products Grid
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="apps-ecommerce-product-details.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-ecommerce-product-details"
                                >
                                  Product Details
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="apps-ecommerce-product-add.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-ecommerce-product-add"
                                >
                                  Add Product
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-ecommerce-categories.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-ecommerce-categories"
                          >
                            Categories
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          data-bs-toggle="collapse"
                          href="#orders"
                          aria-expanded="false"
                          aria-controls="orders"
                          className="side-nav-link"
                        >
                          <span className="menu-text" data-lang="orders">
                            Orders
                          </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="orders">
                          <ul className="sub-menu">
                            <li className="side-nav-item">
                              <a
                                href="apps-ecommerce-orders.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-ecommerce-orders"
                                >
                                  Orders
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="apps-ecommerce-order-details.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-ecommerce-order-details"
                                >
                                  Order Details
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="apps-ecommerce-order-add.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-ecommerce-order-add"
                                >
                                  Add/Edit Order
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-ecommerce-customers.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-ecommerce-customers"
                          >
                            Customers
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-ecommerce-cart.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-ecommerce-cart"
                          >
                            Cart
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-ecommerce-checkout.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-ecommerce-checkout"
                          >
                            Checkout
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          data-bs-toggle="collapse"
                          href="#sellers"
                          aria-expanded="false"
                          aria-controls="sellers"
                          className="side-nav-link"
                        >
                          <span className="menu-text" data-lang="sellers">
                            Sellers
                          </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="sellers">
                          <ul className="sub-menu">
                            <li className="side-nav-item">
                              <a
                                href="apps-ecommerce-sellers.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-ecommerce-sellers"
                                >
                                  Sellers
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="apps-ecommerce-seller-details.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-ecommerce-seller-details"
                                >
                                  Sellers Details
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-ecommerce-refunds.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-ecommerce-refunds"
                          >
                            Refunds
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-ecommerce-reviews.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-ecommerce-reviews"
                          >
                            Reviews
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          data-bs-toggle="collapse"
                          href="#inventory"
                          aria-expanded="false"
                          aria-controls="inventory"
                          className="side-nav-link"
                        >
                          <span className="menu-text" data-lang="inventory">
                            Inventory
                          </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="inventory">
                          <ul className="sub-menu">
                            <li className="side-nav-item">
                              <a
                                href="apps-ecommerce-warehouse.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-ecommerce-warehouse"
                                >
                                  Warehouse
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="apps-ecommerce-product-stocks.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-ecommerce-product-stocks"
                                >
                                  Product Stocks
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="apps-ecommerce-purchased-orders.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-ecommerce-purchased-orders"
                                >
                                  Purchased Orders
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="side-nav-item">
                        <a
                          data-bs-toggle="collapse"
                          href="#reports"
                          aria-expanded="false"
                          aria-controls="reports"
                          className="side-nav-link"
                        >
                          <span className="menu-text" data-lang="reports">
                            Reports
                          </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="reports">
                          <ul className="sub-menu">
                            <li className="side-nav-item">
                              <a
                                href="apps-ecommerce-product-views.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-ecommerce-product-views"
                                >
                                  Product Views
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="apps-ecommerce-sales.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-ecommerce-sales"
                                >
                                  Sales
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-ecommerce-attributes.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-ecommerce-attributes"
                          >
                            Attributes
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-ecommerce-settings.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-ecommerce-settings"
                          >
                            Settings
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* chat */}
                <li className="side-nav-item">
                  <a href="apps-chat.html" className="side-nav-link">
                    <span className="menu-icon">
                      <i className="ti ti-message"></i>
                    </span>
                    <span className="menu-text" data-lang="apps-chat">
                      Chat
                    </span>
                  </a>
                </li>

                {/* Project */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#projects"
                    aria-expanded="false"
                    aria-controls="projects"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-briefcase"></i>
                    </span>
                    <span className="menu-text" data-lang="projects">
                      Projects
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="projects">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a
                          href="apps-projects-grid.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-projects-grid"
                          >
                            My Projects
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-projects-list.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-projects-list"
                          >
                            Projects List
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-projects-details.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-projects-details"
                          >
                            View Project
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-projects-kanban.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-projects-kanban"
                          >
                            Kanban Board
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-projects-team-board.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-projects-team-board"
                          >
                            Team Board
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-projects-activity.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-projects-activity"
                          >
                            Activity Steam
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Tasks */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#tasks"
                    aria-expanded="false"
                    aria-controls="tasks"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-list-check"></i>
                    </span>
                    <span className="menu-text" data-lang="tasks">
                      Tasks
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="tasks">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a href="apps-task-list.html" className="side-nav-link">
                          <span
                            className="menu-text"
                            data-lang="apps-task-list"
                          >
                            Task List
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-task-details.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-task-details"
                          >
                            Task Details
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-task-create.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-task-create"
                          >
                            Create Task
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Invoice */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#invoice"
                    aria-expanded="false"
                    aria-controls="invoice"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-invoice"></i>
                    </span>
                    <span className="menu-text" data-lang="invoice">
                      Invoice
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="invoice">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a
                          href="apps-invoice-list.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-invoice-list"
                          >
                            Invoices
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-invoice-details.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-invoice-details"
                          >
                            Single Invoice
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-invoice-create.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-invoice-create"
                          >
                            New Invoice
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* CRM */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#crm"
                    aria-expanded="false"
                    aria-controls="crm"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-heart-handshake"></i>
                    </span>
                    <span className="menu-text" data-lang="crm">
                      CRM
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="crm">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a
                          href="apps-crm-contacts.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-crm-contacts"
                          >
                            Contacts
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-crm-opportunities.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-crm-opportunities"
                          >
                            Opportunities
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="apps-crm-deals.html" className="side-nav-link">
                          <span
                            className="menu-text"
                            data-lang="apps-crm-deals"
                          >
                            Deals
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="apps-crm-leads.html" className="side-nav-link">
                          <span
                            className="menu-text"
                            data-lang="apps-crm-leads"
                          >
                            Leads
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-crm-pipeline.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-crm-pipeline"
                          >
                            Pipeline
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-crm-campaign.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-crm-campaign"
                          >
                            Campaign
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-crm-proposals.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-crm-proposals"
                          >
                            Proposals
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-crm-estimations.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-crm-estimations"
                          >
                            Estimations
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-crm-customers.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-crm-customers"
                          >
                            Customers
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-crm-activities.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-crm-activities"
                          >
                            Activities
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Users */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#users"
                    aria-expanded="false"
                    aria-controls="users"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-users"></i>
                    </span>
                    <span className="menu-text" data-lang="users">
                      Users
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="users">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a
                          href="apps-users-contacts.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-users-contacts"
                          >
                            Contacts
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-users-profile.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-users-profile"
                          >
                            Profile
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-users-account-settings.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-users-account-settings"
                          >
                            Account Settings
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-users-roles.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-users-roles"
                          >
                            Roles
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-users-role-details.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-users-role-details"
                          >
                            Role Details
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-users-permissions.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-users-permissions"
                          >
                            Permissions
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Finance */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#finance"
                    aria-expanded="false"
                    aria-controls="finance"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-wallet"></i>
                    </span>
                    <span className="menu-text" data-lang="finance">
                      Finance
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="finance">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a
                          data-bs-toggle="collapse"
                          href="#expenses"
                          aria-expanded="false"
                          aria-controls="expenses"
                          className="side-nav-link"
                        >
                          <span className="menu-text" data-lang="expenses">
                            Expenses
                          </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="expenses">
                          <ul className="sub-menu">
                            <li className="side-nav-item">
                              <a
                                href="apps-finance-expenses.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-finance-expenses"
                                >
                                  Expenses
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="apps-finance-expense-category.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-finance-expense-category"
                                >
                                  Expense Category
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-finance-income.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-finance-income"
                          >
                            Income
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-finance-transactions.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-finance-transactions"
                          >
                            Transactions
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-finance-banks-cards.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-finance-banks-cards"
                          >
                            Banks &amp; Cards
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* HRM */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#hrm"
                    aria-expanded="false"
                    aria-controls="hrm"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-accessible"></i>
                    </span>
                    <span className="menu-text" data-lang="hrm">
                      HRM
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="hrm">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a
                          data-bs-toggle="collapse"
                          href="#staffs"
                          aria-expanded="false"
                          aria-controls="staffs"
                          className="side-nav-link"
                        >
                          <span className="menu-text" data-lang="staffs">
                            Staffs
                          </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="staffs">
                          <ul className="sub-menu">
                            <li className="side-nav-item">
                              <a
                                href="apps-hrm-staffs.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-hrm-staffs"
                                >
                                  Staffs List
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="apps-hrm-staff-profile.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-hrm-staff-profile"
                                >
                                  Staff Profile
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="apps-hrm-staff-add.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-hrm-staff-add"
                                >
                                  Add Staffs
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-hrm-departments.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-hrm-departments"
                          >
                            Departments
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-hrm-attendance.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-hrm-attendance"
                          >
                            Attendance
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          data-bs-toggle="collapse"
                          href="#leaves"
                          aria-expanded="false"
                          aria-controls="leaves"
                          className="side-nav-link"
                        >
                          <span className="menu-text" data-lang="leaves">
                            Leaves
                          </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="leaves">
                          <ul className="sub-menu">
                            <li className="side-nav-item">
                              <a
                                href="apps-hrm-leaves.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-hrm-leaves"
                                >
                                  Leaves
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="apps-hrm-leave-add.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-hrm-leave-add"
                                >
                                  Add Leave
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-hrm-holidays.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-hrm-holidays"
                          >
                            Holidays
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-hrm-payroll.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-hrm-payroll"
                          >
                            Payroll
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-hrm-create-salary-slip.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-hrm-create-salary-slip"
                          >
                            Create Salary Slip
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Email */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#email"
                    aria-expanded="false"
                    aria-controls="email"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-mailbox"></i>
                    </span>
                    <span className="menu-text" data-lang="email">
                      Email
                    </span>
                    <span className="badge bg-danger text-white">New</span>
                  </a>
                  <div className="collapse" id="email">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a
                          href="apps-email-inbox.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-email-inbox"
                          >
                            Inbox
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-email-details.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-email-details"
                          >
                            Details
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-email-compose.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-email-compose"
                          >
                            Compose
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Support Center */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#support-center"
                    aria-expanded="false"
                    aria-controls="support-center"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-headset"></i>
                    </span>
                    <span className="menu-text" data-lang="support-center">
                      Support Center
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="support-center">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a
                          href="apps-ticket-list.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-ticket-list"
                          >
                            Ticket List
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-ticket-details.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-ticket-details"
                          >
                            Ticket Details
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-ticket-create.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-ticket-create"
                          >
                            New Ticket
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Promo */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#promo"
                    aria-expanded="false"
                    aria-controls="promo"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-discount"></i>
                    </span>
                    <span className="menu-text" data-lang="promo">
                      Promo
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="promo">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a
                          href="apps-promo-coupons.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-promo-coupons"
                          >
                            Coupons
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-promo-gift-cards.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-promo-gift-cards"
                          >
                            Gift Cards
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-promo-discounts.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-promo-discounts"
                          >
                            Discounts
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* More Apps */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#more-apps"
                    aria-expanded="false"
                    aria-controls="more-apps"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-apps"></i>
                    </span>
                    <span className="menu-text" data-lang="more-apps">
                      More Apps
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="more-apps">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a
                          href="apps-social-feed.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-social-feed"
                          >
                            Social Feed
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="apps-pro-ai.html" className="side-nav-link">
                          <span className="menu-text" data-lang="apps-pro-ai">
                            Pro AI
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-file-manager.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-file-manager"
                          >
                            File Manager
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="apps-calendar.html" className="side-nav-link">
                          <span className="menu-text" data-lang="apps-calendar">
                            Calendar
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="apps-companies.html" className="side-nav-link">
                          <span
                            className="menu-text"
                            data-lang="apps-companies"
                          >
                            Companies
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="apps-todo.html" className="side-nav-link">
                          <span className="menu-text" data-lang="apps-todo">
                            Todo
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="apps-pin-board.html" className="side-nav-link">
                          <span
                            className="menu-text"
                            data-lang="apps-pin-board"
                          >
                            Pin Board
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="apps-clients.html" className="side-nav-link">
                          <span className="menu-text" data-lang="apps-clients">
                            Clients
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="apps-outlook.html" className="side-nav-link">
                          <span className="menu-text" data-lang="apps-outlook">
                            Outlook View
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="apps-vote-list.html" className="side-nav-link">
                          <span
                            className="menu-text"
                            data-lang="apps-vote-list"
                          >
                            Vote List
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="apps-issue-tracker.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="apps-issue-tracker"
                          >
                            Issue Tracker
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="apps-api-keys.html" className="side-nav-link">
                          <span className="menu-text" data-lang="apps-api-keys">
                            API Keys
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="apps-manage.html" className="side-nav-link">
                          <span className="menu-text" data-lang="apps-manage">
                            Manage Apps
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          data-bs-toggle="collapse"
                          href="#blog"
                          aria-expanded="false"
                          aria-controls="blog"
                          className="side-nav-link"
                        >
                          <span className="menu-text" data-lang="blog">
                            Blog
                          </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="blog">
                          <ul className="sub-menu">
                            <li className="side-nav-item">
                              <a
                                href="apps-blog-list.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-blog-list"
                                >
                                  Blog List
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="apps-blog-grid.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-blog-grid"
                                >
                                  Blog Grid
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="apps-blog-article.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-blog-article"
                                >
                                  Article
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="apps-blog-add.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-blog-add"
                                >
                                  Add Article
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="side-nav-item">
                        <a
                          data-bs-toggle="collapse"
                          href="#forum"
                          aria-expanded="false"
                          aria-controls="forum"
                          className="side-nav-link"
                        >
                          <span className="menu-text" data-lang="forum">
                            Forum
                          </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="forum">
                          <ul className="sub-menu">
                            <li className="side-nav-item">
                              <a
                                href="apps-forum-view.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-forum-view"
                                >
                                  Forum View
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="apps-forum-post.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="apps-forum-post"
                                >
                                  Forum Post
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Custom Pages */}
                <li className="side-nav-title mt-2" data-lang="custom-pages">
                  Custom Pages
                </li>

                {/* Pages */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#pages"
                    aria-expanded="false"
                    aria-controls="pages"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-files"></i>
                    </span>
                    <span className="menu-text" data-lang="pages">
                      Pages
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="pages">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a href="pages-about-us.html" className="side-nav-link">
                          <span
                            className="menu-text"
                            data-lang="pages-about-us"
                          >
                            About Us
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="pages-contact-us.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="pages-contact-us"
                          >
                            Contact Us
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="pages-pricing.html" className="side-nav-link">
                          <span className="menu-text" data-lang="pages-pricing">
                            Pricing
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="pages-empty.html" className="side-nav-link">
                          <span className="menu-text" data-lang="pages-empty">
                            Empty Page
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="pages-timeline.html" className="side-nav-link">
                          <span
                            className="menu-text"
                            data-lang="pages-timeline"
                          >
                            Timeline
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="pages-gallery.html" className="side-nav-link">
                          <span className="menu-text" data-lang="pages-gallery">
                            Gallery
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="pages-faq.html" className="side-nav-link">
                          <span className="menu-text" data-lang="pages-faq">
                            FAQ
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="pages-sitemap.html" className="side-nav-link">
                          <span className="menu-text" data-lang="pages-sitemap">
                            Sitemap
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="pages-search-results.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="pages-search-results"
                          >
                            Search Results
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="pages-coming-soon.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="pages-coming-soon"
                          >
                            Coming Soon
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="pages-privacy-policy.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="pages-privacy-policy"
                          >
                            Privacy Policy
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="pages-terms-conditions.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="pages-terms-conditions"
                          >
                            Terms &amp; Conditions
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Plugins */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#plugins"
                    aria-expanded="false"
                    aria-controls="plugins"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-cpu"></i>
                    </span>
                    <span className="menu-text" data-lang="plugins">
                      Plugins
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="plugins">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a
                          href="plugins-sortable.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="plugins-sortable"
                          >
                            Sortable List
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="plugins-pdf-viewer.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="plugins-pdf-viewer"
                          >
                            PDF Viewer
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="plugins-i18.html" className="side-nav-link">
                          <span className="menu-text" data-lang="plugins-i18">
                            i18 Support
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="plugins-sweet-alerts.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="plugins-sweet-alerts"
                          >
                            Sweet Alerts
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="plugins-idle-timer.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="plugins-idle-timer"
                          >
                            Idle Timer
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="plugins-pass-meter.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="plugins-pass-meter"
                          >
                            Password Meter
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="plugins-clipboard.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="plugins-clipboard"
                          >
                            Clipboard
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="plugins-tree-view.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="plugins-tree-view"
                          >
                            Tree View
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="plugins-masonry.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="plugins-masonry"
                          >
                            Masonry
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="plugins-tour.html" className="side-nav-link">
                          <span className="menu-text" data-lang="plugins-tour">
                            Tour
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="plugins-animation.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="plugins-animation"
                          >
                            Animation
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="plugins-video-player.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="plugins-video-player"
                          >
                            Video Player
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Authentication */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#authentication"
                    aria-expanded="false"
                    aria-controls="authentication"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-password-user"></i>
                    </span>
                    <span className="menu-text" data-lang="authentication">
                      Authentication
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="authentication">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a
                          data-bs-toggle="collapse"
                          href="#auth-basic"
                          aria-expanded="false"
                          aria-controls="auth-basic"
                          className="side-nav-link"
                        >
                          <span className="menu-text" data-lang="auth-basic">
                            Basic
                          </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="auth-basic">
                          <ul className="sub-menu">
                            <li className="side-nav-item">
                              <a
                                href="auth-sign-in.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-sign-in"
                                >
                                  Sign In
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-sign-up.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-sign-up"
                                >
                                  Sign Up
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-reset-pass.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-reset-pass"
                                >
                                  Reset Password
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-new-pass.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-new-pass"
                                >
                                  New Password
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-two-factor.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-two-factor"
                                >
                                  Two Factor
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-lock-screen.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-lock-screen"
                                >
                                  Lock Screen
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-success-mail.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-success-mail"
                                >
                                  Success Mail
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-login-pin.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-login-pin"
                                >
                                  Login with PIN
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-delete-account.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-delete-account"
                                >
                                  Delete Account
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="side-nav-item">
                        <a
                          data-bs-toggle="collapse"
                          href="#auth-card"
                          aria-expanded="false"
                          aria-controls="auth-card"
                          className="side-nav-link"
                        >
                          <span className="menu-text" data-lang="auth-card">
                            Card
                          </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="auth-card">
                          <ul className="sub-menu">
                            <li className="side-nav-item">
                              <a
                                href="auth-card-sign-in.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-card-sign-in"
                                >
                                  Sign In
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-card-sign-up.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-card-sign-up"
                                >
                                  Sign Up
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-card-reset-pass.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-card-reset-pass"
                                >
                                  Reset Password
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-card-new-pass.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-card-new-pass"
                                >
                                  New Password
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-card-two-factor.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-card-two-factor"
                                >
                                  Two Factor
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-card-lock-screen.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-card-lock-screen"
                                >
                                  Lock Screen
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-card-success-mail.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-card-success-mail"
                                >
                                  Success Mail
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-card-login-pin.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-card-login-pin"
                                >
                                  Login with PIN
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-card-delete-account.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-card-delete-account"
                                >
                                  Delete Account
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="side-nav-item">
                        <a
                          data-bs-toggle="collapse"
                          href="#auth-split"
                          aria-expanded="false"
                          aria-controls="auth-split"
                          className="side-nav-link"
                        >
                          <span className="menu-text" data-lang="auth-split">
                            Split
                          </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="auth-split">
                          <ul className="sub-menu">
                            <li className="side-nav-item">
                              <a
                                href="auth-split-sign-in.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-split-sign-in"
                                >
                                  Sign In
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-split-sign-up.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-split-sign-up"
                                >
                                  Sign Up
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-split-reset-pass.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-split-reset-pass"
                                >
                                  Reset Password
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-split-new-pass.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-split-new-pass"
                                >
                                  New Password
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-split-two-factor.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-split-two-factor"
                                >
                                  Two Factor
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-split-lock-screen.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-split-lock-screen"
                                >
                                  Lock Screen
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-split-success-mail.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-split-success-mail"
                                >
                                  Success Mail
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-split-login-pin.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-split-login-pin"
                                >
                                  Login with PIN
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="auth-split-delete-account.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="auth-split-delete-account"
                                >
                                  Delete Account
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Error */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#error-pages"
                    aria-expanded="false"
                    aria-controls="error-pages"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-alert-triangle"></i>
                    </span>
                    <span className="menu-text" data-lang="error-pages">
                      Error Pages
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="error-pages">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a href="error-400.html" className="side-nav-link">
                          <span className="menu-text" data-lang="error-400">
                            400 Bad Request
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="error-401.html" className="side-nav-link">
                          <span className="menu-text" data-lang="error-401">
                            401 Unauthorized
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="error-403.html" className="side-nav-link">
                          <span className="menu-text" data-lang="error-403">
                            403 Forbidden
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="error-404.html" className="side-nav-link">
                          <span className="menu-text" data-lang="error-404">
                            404 Not Found
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="error-408.html" className="side-nav-link">
                          <span className="menu-text" data-lang="error-408">
                            408 Request Timeout
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="error-500.html" className="side-nav-link">
                          <span className="menu-text" data-lang="error-500">
                            500 Internal Server
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="error-maintenance.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="error-maintenance"
                          >
                            Maintenance
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Layout  */}
                <li className="side-nav-title mt-2" data-lang="layouts">
                  Layouts
                </li>

                {/* Layout Options */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#layout-options"
                    aria-expanded="false"
                    aria-controls="layout-options"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-layout"></i>
                    </span>
                    <span className="menu-text" data-lang="layout-options">
                      Layout Options
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="layout-options">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a
                          href="layouts-horizontal.html"
                          className="side-nav-link"
                          target="_blank"
                        >
                          <span
                            className="menu-text"
                            data-lang="layouts-horizontal"
                          >
                            Horizontal
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="layouts-boxed.html"
                          className="side-nav-link"
                          target="_blank"
                        >
                          <span className="menu-text" data-lang="layouts-boxed">
                            Boxed
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="layouts-scrollable.html"
                          className="side-nav-link"
                          target="_blank"
                        >
                          <span
                            className="menu-text"
                            data-lang="layouts-scrollable"
                          >
                            Scrollable
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="layouts-compact.html"
                          className="side-nav-link"
                          target="_blank"
                        >
                          <span
                            className="menu-text"
                            data-lang="layouts-compact"
                          >
                            Compact
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="layouts-preloader.html"
                          className="side-nav-link"
                          target="_blank"
                        >
                          <span
                            className="menu-text"
                            data-lang="layouts-preloader"
                          >
                            Preloader
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Sidebars */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#sidebars"
                    aria-expanded="false"
                    aria-controls="sidebars"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-layout-sidebar-inactive"></i>
                    </span>
                    <span className="menu-text" data-lang="sidebars">
                      Sidebars
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="sidebars">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a
                          href="layouts-sidebar-light.html"
                          className="side-nav-link"
                          target="_blank"
                        >
                          <span
                            className="menu-text"
                            data-lang="layouts-sidebar-light"
                          >
                            Light Menu
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="layouts-sidebar-gradient.html"
                          className="side-nav-link"
                          target="_blank"
                        >
                          <span
                            className="menu-text"
                            data-lang="layouts-sidebar-gradient"
                          >
                            Gradient Menu
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="layouts-sidebar-gray.html"
                          className="side-nav-link"
                          target="_blank"
                        >
                          <span
                            className="menu-text"
                            data-lang="layouts-sidebar-gray"
                          >
                            Gray Menu
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="layouts-sidebar-image.html"
                          className="side-nav-link"
                          target="_blank"
                        >
                          <span
                            className="menu-text"
                            data-lang="layouts-sidebar-image"
                          >
                            Image Menu
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="layouts-sidebar-compact.html"
                          className="side-nav-link"
                          target="_blank"
                        >
                          <span
                            className="menu-text"
                            data-lang="layouts-sidebar-compact"
                          >
                            Compact Menu
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="layouts-sidebar-on-hover.html"
                          className="side-nav-link"
                          target="_blank"
                        >
                          <span
                            className="menu-text"
                            data-lang="layouts-sidebar-on-hover"
                          >
                            On Hover Menu
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="layouts-sidebar-offcanvas.html"
                          className="side-nav-link"
                          target="_blank"
                        >
                          <span
                            className="menu-text"
                            data-lang="layouts-sidebar-offcanvas"
                          >
                            Offcanvas Menu
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="layouts-sidebar-no-icons.html"
                          className="side-nav-link"
                          target="_blank"
                        >
                          <span
                            className="menu-text"
                            data-lang="layouts-sidebar-no-icons"
                          >
                            No Icons with Lines
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="layouts-sidebar-with-lines.html"
                          className="side-nav-link"
                          target="_blank"
                        >
                          <span
                            className="menu-text"
                            data-lang="layouts-sidebar-with-lines"
                          >
                            Sidebar with Lines
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Topbar */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#topbar"
                    aria-expanded="false"
                    aria-controls="topbar"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-layout-bottombar"></i>
                    </span>
                    <span className="menu-text" data-lang="topbar">
                      Topbar
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="topbar">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a
                          href="layouts-topbar-dark.html"
                          className="side-nav-link"
                          target="_blank"
                        >
                          <span
                            className="menu-text"
                            data-lang="layouts-topbar-dark"
                          >
                            Dark Topbar
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="layouts-topbar-gray.html"
                          className="side-nav-link"
                          target="_blank"
                        >
                          <span
                            className="menu-text"
                            data-lang="layouts-topbar-gray"
                          >
                            Gray Topbar
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="layouts-topbar-gradient.html"
                          className="side-nav-link"
                          target="_blank"
                        >
                          <span
                            className="menu-text"
                            data-lang="layouts-topbar-gradient"
                          >
                            Gradient Topbar
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Components */}
                <li className="side-nav-title mt-2" data-lang="components">
                  Components
                </li>

                {/* Base UI */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#base-ui"
                    aria-expanded="false"
                    aria-controls="base-ui"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-components"></i>
                    </span>
                    <span className="menu-text" data-lang="base-ui">
                      Base UI
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="base-ui">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a href="ui-accordions.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-accordions">
                            Accordions
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-alerts.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-alerts">
                            Alerts
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-buttons.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-buttons">
                            Buttons
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-badges.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-badges">
                            Badges
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-colors.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-colors">
                            Colors
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-breadcrumb.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-breadcrumb">
                            Breadcrumb
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-cards.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-cards">
                            Cards
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-carousel.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-carousel">
                            Carousel
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-collapse.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-collapse">
                            Collapse
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-images.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-images">
                            Images
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-dropdowns.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-dropdowns">
                            Dropdowns
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-videos.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-videos">
                            Videos
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-grid.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-grid">
                            Grid Options
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-links.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-links">
                            Links
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-list-group.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-list-group">
                            List Group
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-modals.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-modals">
                            Modals
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="ui-notifications.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="ui-notifications"
                          >
                            Notifications
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-offcanvas.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-offcanvas">
                            Offcanvas
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="ui-placeholders.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="ui-placeholders"
                          >
                            Placeholders
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-pagination.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-pagination">
                            Pagination
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-popovers.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-popovers">
                            Popovers
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-progress.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-progress">
                            Progress
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-scrollspy.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-scrollspy">
                            Scrollspy
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-spinners.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-spinners">
                            Spinners
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-tabs.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-tabs">
                            Tabs
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-tooltips.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-tooltips">
                            Tooltips
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-typography.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-typography">
                            Typography
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="ui-utilities.html" className="side-nav-link">
                          <span className="menu-text" data-lang="ui-utilities">
                            Utilities
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Widgets */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#widgets"
                    aria-expanded="false"
                    aria-controls="widgets"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-category"></i>
                    </span>
                    <span className="menu-text" data-lang="widgets">
                      Widgets
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="widgets">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a href="widgets-charts.html" className="side-nav-link">
                          <span
                            className="menu-text"
                            data-lang="widgets-charts"
                          >
                            Charts
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="widgets-mixed.html" className="side-nav-link">
                          <span className="menu-text" data-lang="widgets-mixed">
                            Mixed
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="widgets-social.html" className="side-nav-link">
                          <span
                            className="menu-text"
                            data-lang="widgets-social"
                          >
                            Social
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="widgets-statistics.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="widgets-statistics"
                          >
                            Statistics
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="widgets-weather.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="widgets-weather"
                          >
                            Weather
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Charts */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#charts"
                    aria-expanded="false"
                    aria-controls="charts"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-chart-donut"></i>
                    </span>
                    <span className="menu-text" data-lang="charts">
                      Charts
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="charts">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a
                          data-bs-toggle="collapse"
                          href="#apex-charts"
                          aria-expanded="false"
                          aria-controls="apex-charts"
                          className="side-nav-link"
                        >
                          <span className="menu-text" data-lang="apex-charts">
                            Apex Charts
                          </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="apex-charts">
                          <ul className="sub-menu">
                            <li className="side-nav-item">
                              <a
                                href="charts-apex-area.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-apex-area"
                                >
                                  Area
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-apex-bar.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-apex-bar"
                                >
                                  Bar
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-apex-bubble.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-apex-bubble"
                                >
                                  Bubble
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-apex-candlestick.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-apex-candlestick"
                                >
                                  Candlestick
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-apex-column.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-apex-column"
                                >
                                  Column
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-apex-heatmap.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-apex-heatmap"
                                >
                                  Heatmap
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-apex-line.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-apex-line"
                                >
                                  Line
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-apex-mixed.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-apex-mixed"
                                >
                                  Mixed
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-apex-timeline.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-apex-timeline"
                                >
                                  Timeline
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-apex-boxplot.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-apex-boxplot"
                                >
                                  Boxplot
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-apex-treemap.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-apex-treemap"
                                >
                                  Treemap
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-apex-pie.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-apex-pie"
                                >
                                  Pie
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-apex-radar.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-apex-radar"
                                >
                                  Radar
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-apex-radialbar.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-apex-radialbar"
                                >
                                  RadialBar
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-apex-scatter.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-apex-scatter"
                                >
                                  Scatter
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-apex-polar-area.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-apex-polar-area"
                                >
                                  Polar Area
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-apex-sparklines.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-apex-sparklines"
                                >
                                  Sparklines
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-apex-range.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-apex-range"
                                >
                                  Range
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-apex-funnel.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-apex-funnel"
                                >
                                  Funnel
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-apex-slope.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-apex-slope"
                                >
                                  Slope
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="side-nav-item">
                        <a
                          data-bs-toggle="collapse"
                          href="#echarts"
                          aria-expanded="false"
                          aria-controls="echarts"
                          className="side-nav-link"
                        >
                          <span className="menu-text" data-lang="echarts">
                            Echarts
                          </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="echarts">
                          <ul className="sub-menu">
                            <li className="side-nav-item">
                              <a
                                href="charts-echart-line.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-echart-line"
                                >
                                  Line
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-echart-bar.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-echart-bar"
                                >
                                  Bar
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-echart-pie.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-echart-pie"
                                >
                                  Pie
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-echart-scatter.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-echart-scatter"
                                >
                                  Scatter
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-echart-geo-map.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-echart-geo-map"
                                >
                                  GEO Map
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-echart-gauge.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-echart-gauge"
                                >
                                  Gauge
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-echart-candlestick.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-echart-candlestick"
                                >
                                  Candlestick
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-echart-area.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-echart-area"
                                >
                                  Area
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-echart-radar.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-echart-radar"
                                >
                                  Radar
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-echart-heatmap.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-echart-heatmap"
                                >
                                  Heatmap
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-echart-other.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-echart-other"
                                >
                                  Other
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="side-nav-item">
                        <a
                          data-bs-toggle="collapse"
                          href="#chartjs"
                          aria-expanded="false"
                          aria-controls="chartjs"
                          className="side-nav-link"
                        >
                          <span className="menu-text" data-lang="chartjs">
                            Chart Js
                          </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="chartjs">
                          <ul className="sub-menu">
                            <li className="side-nav-item">
                              <a
                                href="charts-chartjs-area.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-chartjs-area"
                                >
                                  Area
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-chartjs-bar.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-chartjs-bar"
                                >
                                  Bar
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-chartjs-line.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-chartjs-line"
                                >
                                  Line
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="charts-chartjs-other.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="charts-chartjs-other"
                                >
                                  Other
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Forms */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#forms"
                    aria-expanded="false"
                    aria-controls="forms"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-clipboard-list"></i>
                    </span>
                    <span className="menu-text" data-lang="forms">
                      Forms
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="forms">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a href="form-elements.html" className="side-nav-link">
                          <span className="menu-text" data-lang="form-elements">
                            Basic Elements
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="form-validation.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="form-validation"
                          >
                            Validation
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="form-wizard.html" className="side-nav-link">
                          <span className="menu-text" data-lang="form-wizard">
                            Wizard
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="form-select.html" className="side-nav-link">
                          <span className="menu-text" data-lang="form-select">
                            Select
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="form-pickers.html" className="side-nav-link">
                          <span className="menu-text" data-lang="form-pickers">
                            Pickers
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="form-fileuploads.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="form-fileuploads"
                          >
                            File Uploads
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="form-text-editors.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="form-text-editors"
                          >
                            Text Editors
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="form-range-slider.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="form-range-slider"
                          >
                            Range Slider
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="form-cropper.html" className="side-nav-link">
                          <span className="menu-text" data-lang="form-cropper">
                            Image Cropper
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="form-layout.html" className="side-nav-link">
                          <span className="menu-text" data-lang="form-layout">
                            Layouts
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="form-other-plugin.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="form-other-plugin"
                          >
                            Other Plugins
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Tables */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#tables"
                    aria-expanded="false"
                    aria-controls="tables"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-table-column"></i>
                    </span>
                    <span className="menu-text" data-lang="tables">
                      Tables
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="tables">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a href="tables-static.html" className="side-nav-link">
                          <span className="menu-text" data-lang="tables-static">
                            Static Tables
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="tables-custom.html" className="side-nav-link">
                          <span className="menu-text" data-lang="tables-custom">
                            Custom Tables
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          data-bs-toggle="collapse"
                          href="#datatables"
                          aria-expanded="false"
                          aria-controls="datatables"
                          className="side-nav-link"
                        >
                          <span className="menu-text" data-lang="datatables">
                            DataTables
                          </span>
                          <span className="badge bg-success text-white">
                            15
                          </span>
                        </a>
                        <div className="collapse" id="datatables">
                          <ul className="sub-menu">
                            <li className="side-nav-item">
                              <a
                                href="tables-datatables-basic.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="tables-datatables-basic"
                                >
                                  Basic
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="tables-datatables-export-data.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="tables-datatables-export-data"
                                >
                                  Export Data
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="tables-datatables-select.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="tables-datatables-select"
                                >
                                  Select
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="tables-datatables-ajax.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="tables-datatables-ajax"
                                >
                                  Ajax
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="tables-datatables-javascript.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="tables-datatables-javascript"
                                >
                                  Javascript Source
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="tables-datatables-rendering.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="tables-datatables-rendering"
                                >
                                  Data Rendering
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="tables-datatables-scroll.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="tables-datatables-scroll"
                                >
                                  Scroll
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="tables-datatables-fixed-columns.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="tables-datatables-fixed-columns"
                                >
                                  Fixed Columns
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="tables-datatables-fixed-header.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="tables-datatables-fixed-header"
                                >
                                  Fixed Header
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="tables-datatables-columns.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="tables-datatables-columns"
                                >
                                  Show &amp; Hide Column
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="tables-datatables-child-rows.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="tables-datatables-child-rows"
                                >
                                  Child Rows
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="tables-datatables-column-searching.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="tables-datatables-column-searching"
                                >
                                  Column Searching
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="tables-datatables-range-search.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="tables-datatables-range-search"
                                >
                                  Range Search
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="tables-datatables-rows-add.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="tables-datatables-rows-add"
                                >
                                  Add Rows
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                href="tables-datatables-checkbox-select.html"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="tables-datatables-checkbox-select"
                                >
                                  Checkbox Select
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Icons */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#icons"
                    aria-expanded="false"
                    aria-controls="icons"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-icons"></i>
                    </span>
                    <span className="menu-text" data-lang="icons">
                      Icons
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="icons">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a href="icons-tabler.html" className="side-nav-link">
                          <span className="menu-text" data-lang="icons-tabler">
                            Tabler
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="icons-lucide.html" className="side-nav-link">
                          <span className="menu-text" data-lang="icons-lucide">
                            Lucide
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="icons-remix.html" className="side-nav-link">
                          <span className="menu-text" data-lang="icons-remix">
                            Remix
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a
                          href="icons-solar-duotone.html"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="icons-solar-duotone"
                          >
                            Solar Duotone
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="icons-flags.html" className="side-nav-link">
                          <span className="menu-text" data-lang="icons-flags">
                            Flags
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Maps */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#maps"
                    aria-expanded="false"
                    aria-controls="maps"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-map"></i>
                    </span>
                    <span className="menu-text" data-lang="maps">
                      Maps
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="maps">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a href="maps-google.html" className="side-nav-link">
                          <span className="menu-text" data-lang="maps-google">
                            Google Maps
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="maps-vector.html" className="side-nav-link">
                          <span className="menu-text" data-lang="maps-vector">
                            Vector Maps
                          </span>
                        </a>
                      </li>
                      <li className="side-nav-item">
                        <a href="maps-leaflet.html" className="side-nav-link">
                          <span className="menu-text" data-lang="maps-leaflet">
                            Leaflet Maps
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Menu Items */}
                <li className="side-nav-title mt-2" data-lang="menu-items">
                  Menu Items
                </li>

                {/* Menu Levels */}
                <li className="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#menu-levels"
                    aria-expanded="false"
                    aria-controls="menu-levels"
                    className="side-nav-link"
                  >
                    <span className="menu-icon">
                      <i className="ti ti-sitemap"></i>
                    </span>
                    <span className="menu-text" data-lang="menu-levels">
                      Menu Levels
                    </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <div className="collapse" id="menu-levels">
                    <ul className="sub-menu">
                      <li className="side-nav-item">
                        <a
                          data-bs-toggle="collapse"
                          href="#second-level"
                          aria-expanded="false"
                          aria-controls="second-level"
                          className="side-nav-link"
                        >
                          <span className="menu-text" data-lang="second-level">
                            Second Level
                          </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="second-level">
                          <ul className="sub-menu">
                            <li className="side-nav-item">
                              <a href="#" className="side-nav-link">
                                <span
                                  className="menu-text"
                                  data-lang="menu-item-1"
                                >
                                  Item 2.1
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a href="#" className="side-nav-link">
                                <span
                                  className="menu-text"
                                  data-lang="menu-item-2"
                                >
                                  Item 2.2
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="side-nav-item">
                        <a
                          data-bs-toggle="collapse"
                          href="#second-level-2"
                          aria-expanded="false"
                          aria-controls="second-level-2"
                          className="side-nav-link"
                        >
                          <span
                            className="menu-text"
                            data-lang="second-level-2"
                          >
                            Second Level
                          </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="second-level-2">
                          <ul className="sub-menu">
                            <li className="side-nav-item">
                              <a href="#" className="side-nav-link">
                                <span
                                  className="menu-text"
                                  data-lang="menu-item-3"
                                >
                                  Item 2.1
                                </span>
                              </a>
                            </li>
                            <li className="side-nav-item">
                              <a
                                data-bs-toggle="collapse"
                                href="#menu-item-4"
                                aria-expanded="false"
                                aria-controls="menu-item-4"
                                className="side-nav-link"
                              >
                                <span
                                  className="menu-text"
                                  data-lang="menu-item-4"
                                >
                                  Item 2.2
                                </span>
                                <span className="menu-arrow"></span>
                              </a>
                              <div className="collapse" id="menu-item-4">
                                <ul className="sub-menu">
                                  <li className="side-nav-item">
                                    <a href="#" className="side-nav-link">
                                      <span
                                        className="menu-text"
                                        data-lang="menu-item-5"
                                      >
                                        Item 3.1
                                      </span>
                                    </a>
                                  </li>
                                  <li className="side-nav-item">
                                    <a href="#" className="side-nav-link">
                                      <span
                                        className="menu-text"
                                        data-lang="menu-item-6"
                                      >
                                        Item 3.2
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Disable Menu */}
                <li className="side-nav-item">
                  <a href="#" className="side-nav-link disabled">
                    <span className="menu-icon">
                      <i className="ti ti-ban"></i>
                    </span>
                    <span className="menu-text" data-lang="disabled-menu">
                      Disabled Menu
                    </span>
                  </a>
                </li>

                {/* Special Menu */}
                <li className="side-nav-item">
                  <a href="#" className="side-nav-link special-menu">
                    <span className="menu-icon">
                      <i className="ti ti-star"></i>
                    </span>
                    <span className="menu-text" data-lang="special-menu">
                      Special Menu
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
