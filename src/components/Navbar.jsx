// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <header className="app-topbar">
          {/* <div className="container-fluid topbar-menu"> */}
          <div className="container-fluid topbar-menu d-flex justify-content-between align-items-center flex-wrap">
            {/* <div className="d-flex align-items-center gap-2"> */}
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <div className="logo-topbar">
                <a href="index.html" className="logo-light">
                  <span className="logo-lg">
                    {/* <img src="assets/images/logo.png" alt="logo" /> */}
                    <img
                      src="/assets/images/logo.png"
                      alt="logo"
                      className="img-fluid"
                      style={{ maxHeight: "35px" }}
                    />
                  </span>
                  <span className="logo-sm">
                    <img src="/assets/images/logo-sm.png" alt="small logo" />
                  </span>
                </a>

                <a href="index.html" className="logo-dark">
                  <span className="logo-lg">
                    <img src="/assets/images/logo-black.png" alt="dark logo" />
                  </span>
                  <span className="logo-sm">
                    <img src="/assets/images/logo-sm.png" alt="small logo" />
                  </span>
                </a>
              </div>

              <button className="sidenav-toggle-button btn btn-primary btn-icon">
                <i className="ti ti-menu-4"></i>
              </button>

              <button
                className="topnav-toggle-button px-2"
                data-bs-toggle="collapse"
                data-bs-target="#topnav-menu"
              >
                <i className="ti ti-menu-4"></i>
              </button>

              {/* <div
                id="search-box-rounded"
                className="app-search d-none d-xl-flex"
              > */}
              <div
                id="search-box-rounded"
                className="app-search d-none d-lg-flex flex-grow-1"
              >
                <input
                  type="search"
                  className="form-control rounded-pill topbar-search"
                  name="search"
                  placeholder="Quick Search..."
                />
                <i className="ti ti-search app-search-icon text-muted"></i>
              </div>

              <div
                id="megamenu-columns"
                className="topbar-item d-none d-md-flex"
              >
                <div className="dropdown">
                  <button
                    className="topbar-link btn fw-medium btn-link dropdown-toggle drop-arrow-none px-2"
                    data-bs-toggle="dropdown"
                    type="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                    Mega Menu
                    <i className="ti ti-chevron-down ms-1"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-xxl p-0">
                    <div
                      className="h-100"
                      style={{ maxHeight: "380px" }}
                      data-simplebar=""
                    >
                      <div className="row g-0">
                        <div className="col-md-4">
                          <div className="p-2">
                            <h5 className="mb-1 fw-semibold fs-sm dropdown-header">
                              Dashboard &amp; Analytics
                            </h5>
                            <ul className="list-unstyled megamenu-list">
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <i className="ti ti-chevron-right align-middle me-1 text-muted"></i>
                                  Sales Dashboard
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <i className="ti ti-chevron-right align-middle me-1 text-muted"></i>
                                  Marketing Dashboard
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <i className="ti ti-chevron-right align-middle me-1 text-muted"></i>
                                  Finance Overview
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <i className="ti ti-chevron-right align-middle me-1 text-muted"></i>
                                  User Analytics
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <i className="ti ti-chevron-right align-middle me-1 text-muted"></i>
                                  Traffic Insights
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="p-2">
                            <h5 className="mb-1 fw-semibold fs-sm dropdown-header">
                              Project Management
                            </h5>
                            <ul className="list-unstyled megamenu-list">
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <i className="ti ti-minus align-middle me-1 text-muted"></i>
                                  Kanban Workflow
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <i className="ti ti-minus align-middle me-1 text-muted"></i>
                                  Project Timeline
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <i className="ti ti-minus align-middle me-1 text-muted"></i>
                                  Task Management
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <i className="ti ti-minus align-middle me-1 text-muted"></i>
                                  Team Members
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <i className="ti ti-minus align-middle me-1 text-muted"></i>
                                  Assignments
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="p-2 bg-light bg-opacity-50">
                            <h5 className="mb-1 fw-semibold fs-sm dropdown-header">
                              User Management
                            </h5>
                            <ul className="list-unstyled megamenu-list">
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <i className="ti ti-chevron-right align-middle me-1 text-muted"></i>
                                  User Profiles
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <i className="ti ti-chevron-right align-middle me-1 text-muted"></i>
                                  Access Control
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <i className="ti ti-chevron-right align-middle me-1 text-muted"></i>
                                  Security Settings
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <i className="ti ti-chevron-right align-middle me-1 text-muted"></i>
                                  User Groups
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  <i className="ti ti-chevron-right align-middle me-1 text-muted"></i>
                                  Authentication
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="megamenu-apps" className="topbar-item d-none d-md-flex">
                <div className="dropdown">
                  <button
                    className="topbar-link btn fw-medium btn-link dropdown-toggle drop-arrow-none px-2"
                    data-bs-toggle="dropdown"
                    type="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                    Apps
                    <i className="ti ti-chevron-down ms-1"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-xxl p-0">
                    <div
                      className="h-100"
                      style={{ maxHeight: "380px" }}
                      data-simplebar=""
                    >
                      <div className="row g-0">
                        <div className="col-sm-8">
                          <div className="row g-0">
                            <div className="col-sm-6">
                              <div className="p-2">
                                <a href="#!" className="dropdown-item">
                                  <span className="d-flex align-items-center">
                                    <span className="avatar-md me-2">
                                      <span className="avatar-title text-primary border border-light bg-light bg-opacity-50 rounded">
                                        <i className="ti ti-basket fs-22"></i>
                                      </span>
                                    </span>
                                    <span>
                                      <h5 className="fs-base mb-0 lh-base">
                                        eCommerce
                                      </h5>
                                      <span className="text-muted fs-12">
                                        Products, orders &amp; etc.
                                      </span>
                                    </span>
                                  </span>
                                </a>

                                <a href="#!" className="dropdown-item my-2">
                                  <span className="d-flex align-items-center">
                                    <span className="avatar-md me-2">
                                      <span className="avatar-title text-success border border-light bg-light bg-opacity-50 rounded">
                                        <i className="ti ti-message fs-22"></i>
                                      </span>
                                    </span>
                                    <span>
                                      <h5 className="fs-base mb-0 lh-base">
                                        Chat
                                      </h5>
                                      <span className="text-muted fs-12">
                                        Team conversations
                                      </span>
                                    </span>
                                  </span>
                                </a>

                                <a href="#!" className="dropdown-item my-2">
                                  <span className="d-flex align-items-center">
                                    <span className="avatar-md me-2">
                                      <span className="avatar-title text-danger border border-light bg-light bg-opacity-50 rounded">
                                        <i className="ti ti-list-check fs-22"></i>
                                      </span>
                                    </span>
                                    <span>
                                      <h5 className="fs-base mb-0 lh-base">
                                        Task
                                      </h5>
                                      <span className="text-muted fs-12">
                                        Plan and track work
                                      </span>
                                    </span>
                                  </span>
                                </a>

                                <a href="#!" className="dropdown-item mt-2">
                                  <span className="d-flex align-items-center">
                                    <span className="avatar-md me-2">
                                      <span className="avatar-title text-info border border-light bg-light bg-opacity-50 rounded">
                                        <i className="ti ti-mailbox fs-22"></i>
                                      </span>
                                    </span>
                                    <span>
                                      <h5 className="fs-base mb-0 lh-base">
                                        Email
                                      </h5>
                                      <span className="text-muted fs-12">
                                        Messages and inbox
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <div className="p-2">
                                <a href="#!" className="dropdown-item">
                                  <span className="d-flex align-items-center">
                                    <span className="avatar-md me-2">
                                      <span className="avatar-title text-secondary border border-light bg-light bg-opacity-50 rounded">
                                        <i className="ti ti-building fs-22"></i>
                                      </span>
                                    </span>
                                    <span>
                                      <h5 className="fs-base mb-0 lh-base">
                                        Companies
                                      </h5>
                                      <span className="text-muted fs-12">
                                        Business profiles
                                      </span>
                                    </span>
                                  </span>
                                </a>

                                <a href="#!" className="dropdown-item my-2">
                                  <span className="d-flex align-items-center">
                                    <span className="avatar-md me-2">
                                      <span className="avatar-title text-dark border border-light bg-light bg-opacity-50 rounded">
                                        <i className="ti ti-id fs-22"></i>
                                      </span>
                                    </span>
                                    <span>
                                      <h5 className="fs-base mb-0 lh-base">
                                        Contacts Diary
                                      </h5>
                                      <span className="text-muted fs-12">
                                        People and connections
                                      </span>
                                    </span>
                                  </span>
                                </a>

                                <a href="#!" className="dropdown-item my-2">
                                  <span className="d-flex align-items-center">
                                    <span className="avatar-md me-2">
                                      <span className="avatar-title text-warning border border-light bg-light bg-opacity-50 rounded">
                                        <i className="ti ti-calendar fs-22"></i>
                                      </span>
                                    </span>
                                    <span>
                                      <h5 className="fs-base mb-0 lh-base">
                                        Calendar
                                      </h5>
                                      <span className="text-muted fs-12">
                                        Events and reminders
                                      </span>
                                    </span>
                                  </span>
                                </a>

                                <a href="#!" className="dropdown-item mt-2">
                                  <span className="d-flex align-items-center">
                                    <span className="avatar-md me-2">
                                      <span className="avatar-title text-success border border-light bg-light bg-opacity-50 rounded">
                                        <i className="ti ti-lifebuoy fs-22"></i>
                                      </span>
                                    </span>
                                    <span>
                                      <h5 className="fs-base mb-0 lh-base">
                                        Support
                                      </h5>
                                      <span className="text-muted fs-12">
                                        Help and assistance
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="row g-0 border-top border-light border-dashed text-center">
                            <div className="col">
                              <div className="p-3">
                                <p className="fw-medium text-muted mb-2 fs-11 text-uppercase lh-1">
                                  -: &nbsp; Support &nbsp;:-
                                </p>
                                <h5 className="fs-15 mb-0">
                                  help@mydomain.com
                                </h5>
                              </div>
                            </div>

                            <div className="col">
                              <div className="p-3">
                                <p className="fw-medium text-muted mb-2 fs-11 text-uppercase lh-1">
                                  -: &nbsp; Help: &nbsp;:-
                                </p>
                                <h5 className="fs-15 mb-0">+(12) 3456 7890</h5>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-4">
                          <div
                            className="h-100 position-relative rounded-end rounded-0 overflow-hidden"
                            style={{
                              background:
                                "url(assets/images/stock/small-8.jpg)",
                              backgroundSize: "cover",
                            }}
                          >
                            <div className="p-3 card-img-overlay bg-gradient bg-secondary bg-opacity-90 d-flex align-items-center justify-content-center">
                              <div className="text-center text-white">
                                <i className="ti ti-atom fs-36"></i>

                                <p className="text-white text-opacity-75 mb-3 text-uppercase">
                                  Limited Offer
                                </p>

                                <h3 className="fw-semibold text-white mb-2 fs-20">
                                  Unlock Exclusive Savings
                                </h3>

                                <h4 className="fw-medium fs-16 mb-1">
                                  <del className="text-white text-opacity-75">
                                    $49.00
                                  </del>
                                  /
                                  <span className="fw-bold text-white">
                                    $25 USD
                                  </span>
                                </h4>

                                <button
                                  type="button"
                                  className="btn btn-danger btn-sm mt-3"
                                >
                                  <i className="ti ti-shopping-cart me-1"></i>
                                  Grab Deal
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="d-flex align-items-center gap-2"> */}
            <div className="d-flex align-items-center gap-2 flex-wrap ms-auto">
              <div id="theme-dropdown" className="topbar-item d-none d-sm-flex">
                <div className="dropdown">
                  <button
                    className="topbar-link"
                    data-bs-toggle="dropdown"
                    type="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                    <i
                      className="ti ti-sun topbar-link-icon d-none"
                      id="theme-icon-light"
                    ></i>
                    <i
                      className="ti ti-moon topbar-link-icon d-none"
                      id="theme-icon-dark"
                    ></i>
                    <i
                      className="ti ti-sun-moon topbar-link-icon d-none"
                      id="theme-icon-system"
                    ></i>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-end"
                    data-thememode="dropdown"
                  >
                    <label className="dropdown-item cursor-pointer">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-bs-theme"
                        value="light"
                        style={{ display: "none" }}
                      />
                      <i className="ti ti-sun align-middle me-1 fs-16"></i>
                      <span className="align-middle">Light</span>
                    </label>
                    <label className="dropdown-item cursor-pointer">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-bs-theme"
                        value="dark"
                        style={{ display: "none" }}
                      />
                      <i className="ti ti-moon align-middle me-1 fs-16"></i>
                      <span className="align-middle">Dark</span>
                    </label>
                    <label className="dropdown-item cursor-pointer">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-bs-theme"
                        value="system"
                        style={{ display: "none" }}
                      />
                      <i className="ti ti-sun-moon align-middle me-1 fs-16"></i>
                      <span className="align-middle">System</span>
                    </label>
                  </div>
                </div>
              </div>

              <div
                id="apps-dropdown-grid"
                className="topbar-item d-none d-xl-flex"
              >
                <div className="dropdown">
                  <button
                    className="topbar-link dropdown-toggle drop-arrow-none"
                    data-bs-toggle="dropdown"
                    type="button"
                    data-bs-auto-close="outside"
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                    <i className="ti ti-apps topbar-link-icon"></i>
                  </button>

                  <div className="dropdown-menu dropdown-menu-lg p-2 dropdown-menu-end">
                    <div className="row align-items-center g-1">
                      <div className="col-4">
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item border border-dashed rounded text-center py-2"
                        >
                          <span className="avatar-sm d-block mx-auto mb-1">
                            <span className="avatar-title text-bg-light rounded-circle">
                              <img
                                src="/assets/images/logos/google.svg"
                                alt="Google Logo"
                                height="18"
                              />
                            </span>
                          </span>
                          <span className="align-middle fw-medium">Google</span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item border border-dashed rounded text-center py-2"
                        >
                          <span className="avatar-sm d-block mx-auto mb-1">
                            <span className="avatar-title text-bg-light rounded-circle">
                              <img
                                src="/assets/images/logos/figma.svg"
                                alt="Figma Logo"
                                height="18"
                              />
                            </span>
                          </span>
                          <span className="align-middle fw-medium">Figma</span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item border border-dashed rounded text-center py-2"
                        >
                          <span className="avatar-sm d-block mx-auto mb-1">
                            <span className="avatar-title text-bg-light rounded-circle">
                              <img
                                src="/assets/images/logos/slack.svg"
                                alt="Slack Logo"
                                height="18"
                              />
                            </span>
                          </span>
                          <span className="align-middle fw-medium">Slack</span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item border border-dashed rounded text-center py-2"
                        >
                          <span className="avatar-sm d-block mx-auto mb-1">
                            <span className="avatar-title text-bg-light rounded-circle">
                              <img
                                src="/assets/images/logos/dropbox.svg"
                                alt="Dropbox Logo"
                                height="18"
                              />
                            </span>
                          </span>
                          <span className="align-middle fw-medium">
                            Dropbox
                          </span>
                        </a>
                      </div>

                      <div className="col-4 text-center">
                        <a
                          href="javascript:void(0);"
                          className="btn btn-sm rounded-circle btn-icon btn-danger"
                        >
                          <i className="ti ti-circle-dashed-plus fs-18"></i>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item border border-dashed rounded text-center py-2"
                        >
                          <span className="avatar-sm d-block mx-auto mb-1">
                            <span className="avatar-title bg-primary-subtle text-primary rounded-circle">
                              <i className="ti ti-calendar fs-18"></i>
                            </span>
                          </span>
                          <span className="align-middle fw-medium">
                            Calendar
                          </span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item border border-dashed rounded text-center py-2"
                        >
                          <span className="avatar-sm d-block mx-auto mb-1">
                            <span className="avatar-title bg-primary-subtle text-primary rounded-circle">
                              <i className="ti ti-message-circle fs-18"></i>
                            </span>
                          </span>
                          <span className="align-middle fw-medium">Chat</span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item border border-dashed rounded text-center py-2"
                        >
                          <span className="avatar-sm d-block mx-auto mb-1">
                            <span className="avatar-title bg-primary-subtle text-primary rounded-circle">
                              <i className="ti ti-folder fs-18"></i>
                            </span>
                          </span>
                          <span className="align-middle fw-medium">Files</span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item border border-dashed rounded text-center py-2"
                        >
                          <span className="avatar-sm d-block mx-auto mb-1">
                            <span className="avatar-title bg-primary-subtle text-primary rounded-circle">
                              <i className="ti ti-users fs-18"></i>
                            </span>
                          </span>
                          <span className="align-middle fw-medium">Team</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="notification-dropdown-people" className="topbar-item">
                <div className="dropdown">
                  <button
                    className="topbar-link dropdown-toggle drop-arrow-none"
                    data-bs-toggle="dropdown"
                    type="button"
                    data-bs-auto-close="outside"
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                    <i className="ti ti-bell topbar-link-icon animate-ring"></i>
                    <span className="badge text-bg-danger badge-circle topbar-badge">
                      5
                    </span>
                  </button>

                  <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
                    <div className="px-3 py-2 border-bottom">
                      <div className="row align-items-center">
                        <div className="col">
                          <h6 className="m-0 fs-md fw-semibold">
                            Notifications
                          </h6>
                        </div>
                        <div className="col text-end">
                          <a
                            href="#!"
                            className="badge badge-soft-success badge-label py-1"
                          >
                            07 Notifications
                          </a>
                        </div>
                      </div>
                    </div>

                    <div style={{ maxHeight: "300px" }} data-simplebar="">
                      <div
                        className="dropdown-item notification-item py-2 text-wrap"
                        id="message-1"
                      >
                        <span className="d-flex align-items-center gap-3">
                          <span className="flex-shrink-0 position-relative">
                            <img
                              src="/assets/images/users/user-4.jpg"
                              className="avatar-md rounded-circle"
                              alt="User Avatar"
                            />
                            <span className="position-absolute rounded-pill bg-success notification-badge">
                              <i className="ti ti-bell align-middle"></i>
                              <span className="visually-hidden">
                                unread notification
                              </span>
                            </span>
                          </span>
                          <span className="flex-grow-1 text-muted">
                            <span className="fw-medium text-body">
                              Emily Johnson
                            </span>
                            commented on a task in
                            <span className="fw-medium text-body">
                              Design Sprint
                            </span>
                            <br />
                            <span className="fs-xs">12 minutes ago</span>
                          </span>
                          <button
                            type="button"
                            className="flex-shrink-0 text-muted btn btn-link p-0 position-absolute end-0 me-2 d-none noti-close-btn"
                            data-dismissible="#message-1"
                          >
                            <i className="ti ti-square-rounded-x fs-xxl"></i>
                          </button>
                        </span>
                      </div>

                      <div
                        className="dropdown-item notification-item py-2 text-wrap"
                        id="message-2"
                      >
                        <span className="d-flex align-items-center gap-3">
                          <span className="flex-shrink-0 position-relative">
                            <img
                              src="/assets/images/users/user-5.jpg"
                              className="avatar-md rounded-circle"
                              alt="User Avatar"
                            />
                            <span className="position-absolute rounded-pill bg-info notification-badge">
                              <i className="ti ti-cloud-upload align-middle"></i>
                              <span className="visually-hidden">
                                upload notification
                              </span>
                            </span>
                          </span>
                          <span className="flex-grow-1 text-muted">
                            <span className="fw-medium text-body">
                              Michael Lee
                            </span>
                            uploaded files to
                            <span className="fw-medium text-body">
                              Marketing Assets
                            </span>
                            <br />
                            <span className="fs-xs">25 minutes ago</span>
                          </span>
                          <button
                            type="button"
                            className="flex-shrink-0 text-muted btn btn-link p-0 position-absolute end-0 me-2 d-none noti-close-btn"
                            data-dismissible="#message-2"
                          >
                            <i className="ti ti-square-rounded-x fs-xxl"></i>
                          </button>
                        </span>
                      </div>

                      <div
                        className="dropdown-item notification-item py-2 text-wrap"
                        id="message-6"
                      >
                        <span className="d-flex align-items-center gap-3">
                          <span className="flex-shrink-0 position-relative">
                            <span className="avatar-md rounded-circle bg-light d-flex align-items-center justify-content-center">
                              <i className="ti ti-database fs-4"></i>
                            </span>
                            <span className="position-absolute rounded-pill bg-danger notification-badge">
                              <i className="ti ti-alert-circle align-middle"></i>
                              <span className="visually-hidden">
                                server alert
                              </span>
                            </span>
                          </span>
                          <span className="flex-grow-1 text-muted">
                            <span className="fw-medium text-body">
                              Server #3
                            </span>
                            CPU usage exceeded 90%
                            <br />
                            <span className="fs-xs">Just now</span>
                          </span>
                          <button
                            type="button"
                            className="flex-shrink-0 text-muted btn btn-link p-0 position-absolute end-0 me-2 d-none noti-close-btn"
                            data-dismissible="#message-6"
                          >
                            <i className="ti ti-square-rounded-x fs-xxl"></i>
                          </button>
                        </span>
                      </div>

                      <div
                        className="dropdown-item notification-item py-2 text-wrap"
                        id="message-3"
                      >
                        <span className="d-flex align-items-center gap-3">
                          <span className="flex-shrink-0 position-relative">
                            <img
                              src="/assets/images/users/user-6.jpg"
                              className="avatar-md rounded-circle"
                              alt="User Avatar"
                            />
                            <span className="position-absolute rounded-pill bg-warning notification-badge">
                              <i className="ti ti-alert-triangle align-middle"></i>
                              <span className="visually-hidden">alert</span>
                            </span>
                          </span>
                          <span className="flex-grow-1 text-muted">
                            <span className="fw-medium text-body">
                              Sophia Ray
                            </span>
                            flagged an issue in
                            <span className="fw-medium text-body">
                              Bug Tracker
                            </span>
                            <br />
                            <span className="fs-xs">40 minutes ago</span>
                          </span>
                          <button
                            type="button"
                            className="flex-shrink-0 text-muted btn btn-link p-0 position-absolute end-0 me-2 d-none noti-close-btn"
                            data-dismissible="#message-3"
                          >
                            <i className="ti ti-square-rounded-x fs-xxl"></i>
                          </button>
                        </span>
                      </div>

                      <div
                        className="dropdown-item notification-item py-2 text-wrap"
                        id="message-4"
                      >
                        <span className="d-flex align-items-center gap-3">
                          <span className="flex-shrink-0 position-relative">
                            <img
                              src="/assets/images/users/user-7.jpg"
                              className="avatar-md rounded-circle"
                              alt="User Avatar"
                            />
                            <span className="position-absolute rounded-pill bg-primary notification-badge">
                              <i className="ti ti-calendar-event align-middle"></i>
                              <span className="visually-hidden">
                                event notification
                              </span>
                            </span>
                          </span>
                          <span className="flex-grow-1 text-muted">
                            <span className="fw-medium text-body">
                              David Kim
                            </span>
                            scheduled a meeting for
                            <span className="fw-medium text-body">
                              UX Review
                            </span>
                            <br />
                            <span className="fs-xs">1 hour ago</span>
                          </span>
                          <button
                            type="button"
                            className="flex-shrink-0 text-muted btn btn-link p-0 position-absolute end-0 me-2 d-none noti-close-btn"
                            data-dismissible="#message-4"
                          >
                            <i className="ti ti-square-rounded-x fs-xxl"></i>
                          </button>
                        </span>
                      </div>

                      <div
                        className="dropdown-item notification-item py-2 text-wrap"
                        id="message-5"
                      >
                        <span className="d-flex align-items-center gap-3">
                          <span className="flex-shrink-0 position-relative">
                            <img
                              src="/assets/images/users/user-8.jpg"
                              className="avatar-md rounded-circle"
                              alt="User Avatar"
                            />
                            <span className="position-absolute rounded-pill bg-secondary notification-badge">
                              <i className="ti ti-edit align-middle"></i>
                              <span className="visually-hidden">edit</span>
                            </span>
                          </span>
                          <span className="flex-grow-1 text-muted">
                            <span className="fw-medium text-body">
                              Isabella White
                            </span>
                            updated the document in
                            <span className="fw-medium text-body">
                              Product Specs
                            </span>
                            <br />
                            <span className="fs-xs">2 hours ago</span>
                          </span>
                          <button
                            type="button"
                            className="flex-shrink-0 text-muted btn btn-link p-0 position-absolute end-0 me-2 d-none noti-close-btn"
                            data-dismissible="#message-5"
                          >
                            <i className="ti ti-square-rounded-x fs-xxl"></i>
                          </button>
                        </span>
                      </div>

                      <div
                        className="dropdown-item notification-item py-2 text-wrap"
                        id="message-7"
                      >
                        <span className="d-flex align-items-center gap-3">
                          <span className="flex-shrink-0 position-relative">
                            <span className="avatar-md rounded-circle bg-light d-flex align-items-center justify-content-center">
                              <i className="ti ti-rocket fs-4"></i>
                            </span>
                            <span className="position-absolute rounded-pill bg-success notification-badge">
                              <i className="ti ti-check align-middle"></i>
                              <span className="visually-hidden">
                                deployment
                              </span>
                            </span>
                          </span>
                          <span className="flex-grow-1 text-muted">
                            <span className="fw-medium text-body">
                              Production Server
                            </span>
                            deployment completed successfully
                            <br />
                            <span className="fs-xs">30 minutes ago</span>
                          </span>
                          <button
                            type="button"
                            className="flex-shrink-0 text-muted btn btn-link p-0 position-absolute end-0 me-2 d-none noti-close-btn"
                            data-dismissible="#message-7"
                          >
                            <i className="ti ti-square-rounded-x fs-xxl"></i>
                          </button>
                        </span>
                      </div>
                    </div>

                    <a
                      href="javascript:void(0);"
                      className="dropdown-item text-center text-reset text-decoration-underline link-offset-2 fw-bold notify-item border-top border-light py-2"
                    >
                      Read All Messages
                    </a>
                  </div>
                </div>
              </div>

              <div
                id="fullscreen-toggler"
                className="topbar-item d-none d-md-flex"
              >
                <button
                  className="topbar-link"
                  type="button"
                  data-toggle="fullscreen"
                >
                  <i className="ti ti-maximize topbar-link-icon"></i>
                  <i className="ti ti-minimize topbar-link-icon d-none"></i>
                </button>
              </div>

              <div
                id="monochrome-toggler"
                className="topbar-item d-none d-xl-flex"
              >
                <button
                  id="monochrome-mode"
                  className="topbar-link"
                  type="button"
                  data-toggle="monochrome"
                >
                  <i className="ti ti-palette topbar-link-icon"></i>
                </button>
              </div>

              <div className="topbar-item d-none d-sm-flex">
                <button
                  className="topbar-link btn-theme-setting"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#theme-settings-offcanvas"
                  type="button"
                >
                  <i className="ti ti-settings topbar-link-icon"></i>
                </button>
              </div>

              <div id="language-selector-rounded" className="topbar-item">
                <div className="dropdown">
                  <button
                    className="topbar-link fw-bold"
                    data-bs-toggle="dropdown"
                    type="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                    <img
                      src="/assets/images/flags/us.svg"
                      alt="user-image"
                      className="rounded-circle me-2"
                      height="18"
                      id="selected-language-image"
                    />
                    <span id="selected-language-code">EN</span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item"
                      data-translator-lang="en"
                      title="English"
                    >
                      <img
                        src="/assets/images/flags/us.svg"
                        alt="English"
                        className="me-1 rounded-circle"
                        height="18"
                        data-translator-image=""
                      />
                      <span className="align-middle">English</span>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item"
                      data-translator-lang="de"
                      title="German"
                    >
                      <img
                        src="/assets/images/flags/de.svg"
                        alt="German"
                        className="me-1 rounded-circle"
                        height="18"
                        data-translator-image=""
                      />
                      <span className="align-middle">Deutsch</span>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item"
                      data-translator-lang="it"
                      title="Italian"
                    >
                      <img
                        src="/assets/images/flags/it.svg"
                        alt="Italian"
                        className="me-1 rounded-circle"
                        height="18"
                        data-translator-image=""
                      />
                      <span className="align-middle">Italiano</span>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item"
                      data-translator-lang="es"
                      title="Spanish"
                    >
                      <img
                        src="/assets/images/flags/es.svg"
                        alt="Spanish"
                        className="me-1 rounded-circle"
                        height="18"
                        data-translator-image=""
                      />
                      <span className="align-middle">Español</span>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item"
                      data-translator-lang="ru"
                      title="Russian"
                    >
                      <img
                        src="/assets/images/flags/ru.svg"
                        alt="Russian"
                        className="me-1 rounded-circle"
                        height="18"
                        data-translator-image=""
                      />
                      <span className="align-middle">Русский</span>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item"
                      data-translator-lang="hi"
                      title="Hindi"
                    >
                      <img
                        src="/assets/images/flags/in.svg"
                        alt="Hindi"
                        className="me-1 rounded-circle"
                        height="18"
                        data-translator-image=""
                      />
                      <span className="align-middle">हिन्दी</span>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item"
                      data-translator-lang="ar"
                      title="Arabic"
                    >
                      <img
                        src="/assets/images/flags/sa.svg"
                        alt="Arabic"
                        className="me-1 rounded-circle"
                        height="18"
                        data-translator-image=""
                      />
                      <span className="align-middle">عربي</span>
                    </a>
                  </div>
                </div>
              </div>

              <div id="user-dropdown-detailed" className="topbar-item nav-user">
                <div className="dropdown">
                  <a
                    className="topbar-link dropdown-toggle drop-arrow-none px-2"
                    data-bs-toggle="dropdown"
                    href="#!"
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                    <img
                      src="/assets/images/users/user-1.jpg"
                      width="32"
                      className="rounded-circle me-lg-2 d-flex"
                      alt="user-image"
                    />
                    <div className="d-lg-flex align-items-center gap-1 d-none">
                      <span>
                        <h5 className="my-0 lh-1 pro-username">David Dev</h5>
                        <span className="fs-xs lh-1">Admin Head</span>
                      </span>
                      <i className="ti ti-chevron-down align-middle"></i>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <div className="dropdown-header noti-title">
                      <h6 className="text-overflow m-0">Welcome back 👋!</h6>
                    </div>

                    <a href="#!" className="dropdown-item">
                      <i className="ti ti-user-circle me-1 fs-lg align-middle"></i>
                      <span className="align-middle">Profile</span>
                    </a>

                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="ti ti-bell-ringing me-1 fs-lg align-middle"></i>
                      <span className="align-middle">Notifications</span>
                    </a>

                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="ti ti-settings-2 me-1 fs-lg align-middle"></i>
                      <span className="align-middle">Account Settings</span>
                    </a>

                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="ti ti-headset me-1 fs-lg align-middle"></i>
                      <span className="align-middle">Support Center</span>
                    </a>

                    <div className="dropdown-divider"></div>

                    <a href="auth-lock-screen.html" className="dropdown-item">
                      <i className="ti ti-lock me-1 fs-lg align-middle"></i>
                      <span className="align-middle">Lock Screen</span>
                    </a>

                    <a
                      href="javascript:void(0);"
                      className="dropdown-item fw-semibold"
                    >
                      <i className="ti ti-logout me-1 fs-lg align-middle"></i>
                      <span className="align-middle">Log Out</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </nav>

      <div>
        {/* <nav className="navbar bg-body-tertiary shadow-sm p-2 ">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav> */}
      </div>
    </>
  );
};

export default Navbar;
