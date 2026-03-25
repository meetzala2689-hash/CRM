import React from 'react'

function Reviews() {
  return (
    <div>
        <Sidebar />
        <div className="wrapper">
            <header className="app-topbar">
                <div className="container-fluid topbar-menu">
                    <div className="d-flex align-items-center gap-2">
              
                        <div className="logo-topbar">
                    
                            <a href="index.html" className="logo-light">
                                <span className="logo-lg">
                                    <img src="assets/images/logo.png" alt="logo" />
                                </span>
                                <span className="logo-sm">
                                    <img src="assets/images/logo-sm.png" alt="small logo" />
                                </span>
                            </a>

                            <a href="index.html" className="logo-dark">
                                <span className="logo-lg">
                                    <img src="assets/images/logo-black.png" alt="dark logo" />
                                </span>
                                <span className="logo-sm">
                                    <img src="assets/images/logo-sm.png" alt="small logo" />
                                </span>
                            </a>
                        </div>

                        <button className="sidenav-toggle-button btn btn-primary btn-icon">
                            <i className="ti ti-menu-4"></i>
                        </button>

                        <button className="topnav-toggle-button px-2" data-bs-toggle="collapse" data-bs-target="#topnav-menu">
                            <i className="ti ti-menu-4"></i>
                        </button>

                        <div id="search-box-rounded" className="app-search d-none d-xl-flex">
                            <input type="search" className="form-control rounded-pill topbar-search" name="search" placeholder="Quick Search..." />
                            <i className="ti ti-search app-search-icon text-muted"></i>
                        </div>

                        <div id="megamenu-columns" className="topbar-item d-none d-md-flex">
                            <div className="dropdown">
                                <button className="topbar-link btn fw-medium btn-link dropdown-toggle drop-arrow-none px-2" data-bs-toggle="dropdown" type="button" aria-haspopup="false" aria-expanded="false">
                                    Mega Menu
                                    <i className="ti ti-chevron-down ms-1"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-xxl p-0">
                                    <div className="h-100" style="max-height: 380px" data-simplebar="">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <div className="p-2">
                                                    <h5 className="mb-1 fw-semibold fs-sm dropdown-header">Dashboard &amp; Analytics</h5>
                                                    <ul className="list-unstyled megamenu-list">
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="ti ti-chevron-right align-middle me-1 text-muted"></i>
                                                                Sales Dashboard
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="ti ti-chevron-right align-middle me-1 text-muted"></i>
                                                                Marketing Dashboard
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="ti ti-chevron-right align-middle me-1 text-muted"></i>
                                                                Finance Overview
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="ti ti-chevron-right align-middle me-1 text-muted"></i>
                                                                User Analytics
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="ti ti-chevron-right align-middle me-1 text-muted"></i>
                                                                Traffic Insights
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="p-2">
                                                    <h5 className="mb-1 fw-semibold fs-sm dropdown-header">Project Management</h5>
                                                    <ul className="list-unstyled megamenu-list">
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="ti ti-minus align-middle me-1 text-muted"></i>
                                                                Kanban Workflow
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="ti ti-minus align-middle me-1 text-muted"></i>
                                                                Project Timeline
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="ti ti-minus align-middle me-1 text-muted"></i>
                                                                Task Management
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="ti ti-minus align-middle me-1 text-muted"></i>
                                                                Team Members
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="ti ti-minus align-middle me-1 text-muted"></i>
                                                                Assignments
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="p-2 bg-light bg-opacity-50">
                                                    <h5 className="mb-1 fw-semibold fs-sm dropdown-header">User Management</h5>
                                                    <ul className="list-unstyled megamenu-list">
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="ti ti-chevron-right align-middle me-1 text-muted"></i>
                                                                User Profiles
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="ti ti-chevron-right align-middle me-1 text-muted"></i>
                                                                Access Control
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="ti ti-chevron-right align-middle me-1 text-muted"></i>
                                                                Security Settings
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="ti ti-chevron-right align-middle me-1 text-muted"></i>
                                                                User Groups
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
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
                                <button className="topbar-link btn fw-medium btn-link dropdown-toggle drop-arrow-none px-2" data-bs-toggle="dropdown" type="button" aria-haspopup="false" aria-expanded="false">
                                    Apps
                                    <i className="ti ti-chevron-down ms-1"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-xxl p-0">
                                    <div className="h-100" style="max-height: 380px" data-simplebar="">
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
                                                                        <h5 className="fs-base mb-0 lh-base">eCommerce</h5>
                                                                        <span className="text-muted fs-12">Products, orders &amp; etc.</span>
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
                                                                        <h5 className="fs-base mb-0 lh-base">Chat</h5>
                                                                        <span className="text-muted fs-12">Team conversations</span>
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
                                                                        <h5 className="fs-base mb-0 lh-base">Task</h5>
                                                                        <span className="text-muted fs-12">Plan and track work</span>
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
                                                                        <h5 className="fs-base mb-0 lh-base">Email</h5>
                                                                        <span className="text-muted fs-12">Messages and inbox</span>
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
                                                                        <h5 className="fs-base mb-0 lh-base">Companies</h5>
                                                                        <span className="text-muted fs-12">Business profiles</span>
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
                                                                        <h5 className="fs-base mb-0 lh-base">Contacts Diary</h5>
                                                                        <span className="text-muted fs-12">People and connections</span>
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
                                                                        <h5 className="fs-base mb-0 lh-base">Calendar</h5>
                                                                        <span className="text-muted fs-12">Events and reminders</span>
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
                                                                        <h5 className="fs-base mb-0 lh-base">Support</h5>
                                                                        <span className="text-muted fs-12">Help and assistance</span>
                                                                    </span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row g-0 border-top border-light border-dashed text-center">
                                                    <div className="col">
                                                        <div className="p-3">
                                                            <p className="fw-medium text-muted mb-2 fs-11 text-uppercase lh-1">-: &nbsp; Support &nbsp;:-</p>
                                                            <h5 className="fs-15 mb-0">help@mydomain.com</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="p-3">
                                                            <p className="fw-medium text-muted mb-2 fs-11 text-uppercase lh-1">-: &nbsp; Help: &nbsp;:-</p>
                                                            <h5 className="fs-15 mb-0">+(12) 3456 7890</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-4">
                                                <div className="h-100 position-relative rounded-end rounded-0 overflow-hidden" style="background: url(assets/images/stock/small-8.jpg); background-size: cover">
                                                    <div className="p-3 card-img-overlay bg-gradient bg-secondary bg-opacity-90 d-flex align-items-center justify-content-center">
                                                        <div className="text-center text-white">
                                                            <i className="ti ti-atom fs-36"></i>

                                                            <p className="text-white text-opacity-75 mb-3 text-uppercase">Limited Offer</p>

                                                            <h3 className="fw-semibold text-white mb-2 fs-20">Unlock Exclusive Savings</h3>

                                                            <h4 className="fw-medium fs-16 mb-1">
                                                                <del className="text-white text-opacity-75">$49.00</del>
                                                                /
                                                                <span className="fw-bold text-white">$25 USD</span>
                                                            </h4>

                                                            <button type="button" className="btn btn-danger btn-sm mt-3">
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

                    <div className="d-flex align-items-center gap-2">
                        <div id="theme-dropdown" className="topbar-item d-none d-sm-flex">
                            <div className="dropdown">
                                <button className="topbar-link" data-bs-toggle="dropdown" type="button" aria-haspopup="false" aria-expanded="false">
                                    <i className="ti ti-sun topbar-link-icon d-none" id="theme-icon-light"></i>
                                    <i className="ti ti-moon topbar-link-icon d-none" id="theme-icon-dark"></i>
                                    <i className="ti ti-sun-moon topbar-link-icon d-none" id="theme-icon-system"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end" data-thememode="dropdown">
                                    <label className="dropdown-item cursor-pointer">
                                        <input className="form-check-input" type="radio" name="data-bs-theme" value="light" style="display: none" />
                                        <i className="ti ti-sun align-middle me-1 fs-16"></i>
                                        <span className="align-middle">Light</span>
                                    </label>
                                    <label className="dropdown-item cursor-pointer">
                                        <input className="form-check-input" type="radio" name="data-bs-theme" value="dark" style="display: none" />
                                        <i className="ti ti-moon align-middle me-1 fs-16"></i>
                                        <span className="align-middle">Dark</span>
                                    </label>
                                    <label className="dropdown-item cursor-pointer">
                                        <input className="form-check-input" type="radio" name="data-bs-theme" value="system" style="display: none" />
                                        <i className="ti ti-sun-moon align-middle me-1 fs-16"></i>
                                        <span className="align-middle">System</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div id="apps-dropdown-grid" className="topbar-item d-none d-xl-flex">
                            <div className="dropdown">
                                <button className="topbar-link dropdown-toggle drop-arrow-none" data-bs-toggle="dropdown" type="button" data-bs-auto-close="outside" aria-haspopup="false" aria-expanded="false">
                                    <i className="ti ti-apps topbar-link-icon"></i>
                                </button>

                                <div className="dropdown-menu dropdown-menu-lg p-2 dropdown-menu-end">
                                    <div className="row align-items-center g-1">
                                        <div className="col-4">
                                            <a href="javascript:void(0);" className="dropdown-item border border-dashed rounded text-center py-2">
                                                <span className="avatar-sm d-block mx-auto mb-1">
                                                    <span className="avatar-title text-bg-light rounded-circle">
                                                        <img src="assets/images/logos/google.svg" alt="Google Logo" height="18" />
                                                    </span>
                                                </span>
                                                <span className="align-middle fw-medium">Google</span>
                                            </a>
                                        </div>

                                        <div className="col-4">
                                            <a href="javascript:void(0);" className="dropdown-item border border-dashed rounded text-center py-2">
                                                <span className="avatar-sm d-block mx-auto mb-1">
                                                    <span className="avatar-title text-bg-light rounded-circle">
                                                        <img src="assets/images/logos/figma.svg" alt="Figma Logo" height="18" />
                                                    </span>
                                                </span>
                                                <span className="align-middle fw-medium">Figma</span>
                                            </a>
                                        </div>

                                        <div className="col-4">
                                            <a href="javascript:void(0);" className="dropdown-item border border-dashed rounded text-center py-2">
                                                <span className="avatar-sm d-block mx-auto mb-1">
                                                    <span className="avatar-title text-bg-light rounded-circle">
                                                        <img src="assets/images/logos/slack.svg" alt="Slack Logo" height="18" />
                                                    </span>
                                                </span>
                                                <span className="align-middle fw-medium">Slack</span>
                                            </a>
                                        </div>

                                        <div className="col-4">
                                            <a href="javascript:void(0);" className="dropdown-item border border-dashed rounded text-center py-2">
                                                <span className="avatar-sm d-block mx-auto mb-1">
                                                    <span className="avatar-title text-bg-light rounded-circle">
                                                        <img src="assets/images/logos/dropbox.svg" alt="Dropbox Logo" height="18" />
                                                    </span>
                                                </span>
                                                <span className="align-middle fw-medium">Dropbox</span>
                                            </a>
                                        </div>

                                        <div className="col-4 text-center">
                                            <a href="javascript:void(0);" className="btn btn-sm rounded-circle btn-icon btn-danger">
                                                <i className="ti ti-circle-dashed-plus fs-18"></i>
                                            </a>
                                        </div>

                                        <div className="col-4">
                                            <a href="javascript:void(0);" className="dropdown-item border border-dashed rounded text-center py-2">
                                                <span className="avatar-sm d-block mx-auto mb-1">
                                                    <span className="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        <i className="ti ti-calendar fs-18"></i>
                                                    </span>
                                                </span>
                                                <span className="align-middle fw-medium">Calendar</span>
                                            </a>
                                        </div>

                                        <div className="col-4">
                                            <a href="javascript:void(0);" className="dropdown-item border border-dashed rounded text-center py-2">
                                                <span className="avatar-sm d-block mx-auto mb-1">
                                                    <span className="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        <i className="ti ti-message-circle fs-18"></i>
                                                    </span>
                                                </span>
                                                <span className="align-middle fw-medium">Chat</span>
                                            </a>
                                        </div>

                                        <div className="col-4">
                                            <a href="javascript:void(0);" className="dropdown-item border border-dashed rounded text-center py-2">
                                                <span className="avatar-sm d-block mx-auto mb-1">
                                                    <span className="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                        <i className="ti ti-folder fs-18"></i>
                                                    </span>
                                                </span>
                                                <span className="align-middle fw-medium">Files</span>
                                            </a>
                                        </div>

                                        <div className="col-4">
                                            <a href="javascript:void(0);" className="dropdown-item border border-dashed rounded text-center py-2">
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
                                <button className="topbar-link dropdown-toggle drop-arrow-none" data-bs-toggle="dropdown" type="button" data-bs-auto-close="outside" aria-haspopup="false" aria-expanded="false">
                                    <i className="ti ti-bell topbar-link-icon animate-ring"></i>
                                    <span className="badge text-bg-danger badge-circle topbar-badge">5</span>
                                </button>

                                <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
                                    <div className="px-3 py-2 border-bottom">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h6 className="m-0 fs-md fw-semibold">Notifications</h6>
                                            </div>
                                            <div className="col text-end">
                                                <a href="#!" className="badge badge-soft-success badge-label py-1">07 Notifications</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div style="max-height: 300px" data-simplebar="">
                              
                                        <div className="dropdown-item notification-item py-2 text-wrap" id="message-1">
                                            <span className="d-flex align-items-center gap-3">
                                                <span className="flex-shrink-0 position-relative">
                                                    <img src="assets/images/users/user-4.jpg" className="avatar-md rounded-circle" alt="User Avatar" />
                                                    <span className="position-absolute rounded-pill bg-success notification-badge">
                                                        <i className="ti ti-bell align-middle"></i>
                                                        <span className="visually-hidden">unread notification</span>
                                                    </span>
                                                </span>
                                                <span className="flex-grow-1 text-muted">
                                                    <span className="fw-medium text-body">Emily Johnson</span>
                                                    commented on a task in
                                                    <span className="fw-medium text-body">Design Sprint</span>
                                                    <br />
                                                    <span className="fs-xs">12 minutes ago</span>
                                                </span>
                                                <button type="button" className="flex-shrink-0 text-muted btn btn-link p-0 position-absolute end-0 me-2 d-none noti-close-btn" data-dismissible="#message-1">
                                                    <i className="ti ti-square-rounded-x fs-xxl"></i>
                                                </button>
                                            </span>
                                        </div>

                                        <div className="dropdown-item notification-item py-2 text-wrap" id="message-2">
                                            <span className="d-flex align-items-center gap-3">
                                                <span className="flex-shrink-0 position-relative">
                                                    <img src="assets/images/users/user-5.jpg" className="avatar-md rounded-circle" alt="User Avatar" />
                                                    <span className="position-absolute rounded-pill bg-info notification-badge">
                                                        <i className="ti ti-cloud-upload align-middle"></i>
                                                        <span className="visually-hidden">upload notification</span>
                                                    </span>
                                                </span>
                                                <span className="flex-grow-1 text-muted">
                                                    <span className="fw-medium text-body">Michael Lee</span>
                                                    uploaded files to
                                                    <span className="fw-medium text-body">Marketing Assets</span>
                                                    <br />
                                                    <span className="fs-xs">25 minutes ago</span>
                                                </span>
                                                <button type="button" className="flex-shrink-0 text-muted btn btn-link p-0 position-absolute end-0 me-2 d-none noti-close-btn" data-dismissible="#message-2">
                                                    <i className="ti ti-square-rounded-x fs-xxl"></i>
                                                </button>
                                            </span>
                                        </div>

                                        <div className="dropdown-item notification-item py-2 text-wrap" id="message-6">
                                            <span className="d-flex align-items-center gap-3">
                                                <span className="flex-shrink-0 position-relative">
                                                    <span className="avatar-md rounded-circle bg-light d-flex align-items-center justify-content-center">
                                                        <i className="ti ti-database fs-4"></i>
                                                    </span>
                                                    <span className="position-absolute rounded-pill bg-danger notification-badge">
                                                        <i className="ti ti-alert-circle align-middle"></i>
                                                        <span className="visually-hidden">server alert</span>
                                                    </span>
                                                </span>
                                                <span className="flex-grow-1 text-muted">
                                                    <span className="fw-medium text-body">Server #3</span>
                                                    CPU usage exceeded 90%
                                                    <br />
                                                    <span className="fs-xs">Just now</span>
                                                </span>
                                                <button type="button" className="flex-shrink-0 text-muted btn btn-link p-0 position-absolute end-0 me-2 d-none noti-close-btn" data-dismissible="#message-6">
                                                    <i className="ti ti-square-rounded-x fs-xxl"></i>
                                                </button>
                                            </span>
                                        </div>

                                        <div className="dropdown-item notification-item py-2 text-wrap" id="message-3">
                                            <span className="d-flex align-items-center gap-3">
                                                <span className="flex-shrink-0 position-relative">
                                                    <img src="assets/images/users/user-6.jpg" className="avatar-md rounded-circle" alt="User Avatar" />
                                                    <span className="position-absolute rounded-pill bg-warning notification-badge">
                                                        <i className="ti ti-alert-triangle align-middle"></i>
                                                        <span className="visually-hidden">alert</span>
                                                    </span>
                                                </span>
                                                <span className="flex-grow-1 text-muted">
                                                    <span className="fw-medium text-body">Sophia Ray</span>
                                                    flagged an issue in
                                                    <span className="fw-medium text-body">Bug Tracker</span>
                                                    <br />
                                                    <span className="fs-xs">40 minutes ago</span>
                                                </span>
                                                <button type="button" className="flex-shrink-0 text-muted btn btn-link p-0 position-absolute end-0 me-2 d-none noti-close-btn" data-dismissible="#message-3">
                                                    <i className="ti ti-square-rounded-x fs-xxl"></i>
                                                </button>
                                            </span>
                                        </div>

                                        <div className="dropdown-item notification-item py-2 text-wrap" id="message-4">
                                            <span className="d-flex align-items-center gap-3">
                                                <span className="flex-shrink-0 position-relative">
                                                    <img src="assets/images/users/user-7.jpg" className="avatar-md rounded-circle" alt="User Avatar" />
                                                    <span className="position-absolute rounded-pill bg-primary notification-badge">
                                                        <i className="ti ti-calendar-event align-middle"></i>
                                                        <span className="visually-hidden">event notification</span>
                                                    </span>
                                                </span>
                                                <span className="flex-grow-1 text-muted">
                                                    <span className="fw-medium text-body">David Kim</span>
                                                    scheduled a meeting for
                                                    <span className="fw-medium text-body">UX Review</span>
                                                    <br />
                                                    <span className="fs-xs">1 hour ago</span>
                                                </span>
                                                <button type="button" className="flex-shrink-0 text-muted btn btn-link p-0 position-absolute end-0 me-2 d-none noti-close-btn" data-dismissible="#message-4">
                                                    <i className="ti ti-square-rounded-x fs-xxl"></i>
                                                </button>
                                            </span>
                                        </div>

                                        <div className="dropdown-item notification-item py-2 text-wrap" id="message-5">
                                            <span className="d-flex align-items-center gap-3">
                                                <span className="flex-shrink-0 position-relative">
                                                    <img src="assets/images/users/user-8.jpg" className="avatar-md rounded-circle" alt="User Avatar" />
                                                    <span className="position-absolute rounded-pill bg-secondary notification-badge">
                                                        <i className="ti ti-edit align-middle"></i>
                                                        <span className="visually-hidden">edit</span>
                                                    </span>
                                                </span>
                                                <span className="flex-grow-1 text-muted">
                                                    <span className="fw-medium text-body">Isabella White</span>
                                                    updated the document in
                                                    <span className="fw-medium text-body">Product Specs</span>
                                                    <br />
                                                    <span className="fs-xs">2 hours ago</span>
                                                </span>
                                                <button type="button" className="flex-shrink-0 text-muted btn btn-link p-0 position-absolute end-0 me-2 d-none noti-close-btn" data-dismissible="#message-5">
                                                    <i className="ti ti-square-rounded-x fs-xxl"></i>
                                                </button>
                                            </span>
                                        </div>

                                        <div className="dropdown-item notification-item py-2 text-wrap" id="message-7">
                                            <span className="d-flex align-items-center gap-3">
                                                <span className="flex-shrink-0 position-relative">
                                                    <span className="avatar-md rounded-circle bg-light d-flex align-items-center justify-content-center">
                                                        <i className="ti ti-rocket fs-4"></i>
                                                    </span>
                                                    <span className="position-absolute rounded-pill bg-success notification-badge">
                                                        <i className="ti ti-check align-middle"></i>
                                                        <span className="visually-hidden">deployment</span>
                                                    </span>
                                                </span>
                                                <span className="flex-grow-1 text-muted">
                                                    <span className="fw-medium text-body">Production Server</span>
                                                    deployment completed successfully
                                                    <br />
                                                    <span className="fs-xs">30 minutes ago</span>
                                                </span>
                                                <button type="button" className="flex-shrink-0 text-muted btn btn-link p-0 position-absolute end-0 me-2 d-none noti-close-btn" data-dismissible="#message-7">
                                                    <i className="ti ti-square-rounded-x fs-xxl"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </div>

                                    <a href="javascript:void(0);" className="dropdown-item text-center text-reset text-decoration-underline link-offset-2 fw-bold notify-item border-top border-light py-2">Read All Messages</a>
                                </div>
                            </div>
                        </div>

                        <div id="fullscreen-toggler" className="topbar-item d-none d-md-flex">
                            <button className="topbar-link" type="button" data-toggle="fullscreen">
                                <i className="ti ti-maximize topbar-link-icon"></i>
                                <i className="ti ti-minimize topbar-link-icon d-none"></i>
                            </button>
                        </div>

                        <div id="monochrome-toggler" className="topbar-item d-none d-xl-flex">
                            <button id="monochrome-mode" className="topbar-link" type="button" data-toggle="monochrome">
                                <i className="ti ti-palette topbar-link-icon"></i>
                            </button>
                        </div>

                        <div className="topbar-item d-none d-sm-flex">
                            <button className="topbar-link btn-theme-setting" data-bs-toggle="offcanvas" data-bs-target="#theme-settings-offcanvas" type="button">
                                <i className="ti ti-settings topbar-link-icon"></i>
                            </button>
                        </div>

                        <div id="language-selector-rounded" className="topbar-item">
                            <div className="dropdown">
                                <button className="topbar-link fw-bold" data-bs-toggle="dropdown" type="button" aria-haspopup="false" aria-expanded="false">
                                    <img src="assets/images/flags/us.svg" alt="user-image" className="rounded-circle me-2" height="18" id="selected-language-image" />
                                    <span id="selected-language-code">EN</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a href="javascript:void(0);" className="dropdown-item" data-translator-lang="en" title="English">
                                        <img src="assets/images/flags/us.svg" alt="English" className="me-1 rounded-circle" height="18" data-translator-image="" />
                                        <span className="align-middle">English</span>
                                    </a>
                                    <a href="javascript:void(0);" className="dropdown-item" data-translator-lang="de" title="German">
                                        <img src="assets/images/flags/de.svg" alt="German" className="me-1 rounded-circle" height="18" data-translator-image="" />
                                        <span className="align-middle">Deutsch</span>
                                    </a>
                                    <a href="javascript:void(0);" className="dropdown-item" data-translator-lang="it" title="Italian">
                                        <img src="assets/images/flags/it.svg" alt="Italian" className="me-1 rounded-circle" height="18" data-translator-image="" />
                                        <span className="align-middle">Italiano</span>
                                    </a>
                                    <a href="javascript:void(0);" className="dropdown-item" data-translator-lang="es" title="Spanish">
                                        <img src="assets/images/flags/es.svg" alt="Spanish" className="me-1 rounded-circle" height="18" data-translator-image="" />
                                        <span className="align-middle">Español</span>
                                    </a>
                                    <a href="javascript:void(0);" className="dropdown-item" data-translator-lang="ru" title="Russian">
                                        <img src="assets/images/flags/ru.svg" alt="Russian" className="me-1 rounded-circle" height="18" data-translator-image="" />
                                        <span className="align-middle">Русский</span>
                                    </a>
                                    <a href="javascript:void(0);" className="dropdown-item" data-translator-lang="hi" title="Hindi">
                                        <img src="assets/images/flags/in.svg" alt="Hindi" className="me-1 rounded-circle" height="18" data-translator-image="" />
                                        <span className="align-middle">हिन्दी</span>
                                    </a>
                                    <a href="javascript:void(0);" className="dropdown-item" data-translator-lang="ar" title="Arabic">
                                        <img src="assets/images/flags/sa.svg" alt="Arabic" className="me-1 rounded-circle" height="18" data-translator-image="" />
                                        <span className="align-middle">عربي</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div id="user-dropdown-detailed" className="topbar-item nav-user">
                            <div className="dropdown">
                                <a className="topbar-link dropdown-toggle drop-arrow-none px-2" data-bs-toggle="dropdown" href="#!" aria-haspopup="false" aria-expanded="false">
                                    <img src="assets/images/users/user-1.jpg" width="32" className="rounded-circle me-lg-2 d-flex" alt="user-image" />
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

                                    <a href="javascript:void(0);" className="dropdown-item fw-semibold">
                                        <i className="ti ti-logout me-1 fs-lg align-middle"></i>
                                        <span className="align-middle">Log Out</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
 <div className="sidenav-menu">
  
    <a href="index.html" className="logo">
        <span className="logo logo-light">
            <span className="logo-lg"><img src="assets/images/logo.png" alt="logo" /></span>
            <span className="logo-sm"><img src="assets/images/logo-sm.png" alt="small logo" /></span>
        </span>

        <span className="logo logo-dark">
            <span className="logo-lg"><img src="assets/images/logo-black.png" alt="dark logo" /></span>
            <span className="logo-sm"><img src="assets/images/logo-sm.png" alt="small logo" /></span>
        </span>
    </a>

    <button className="button-on-hover">
        <span className="btn-on-hover-icon"></span>
    </button>

    <button className="button-close-offcanvas">
        <i className="ti ti-menu-4 align-middle"></i>
    </button>

    <div className="scrollbar" data-simplebar="">
        <div id="user-profile-settings" className="sidenav-user" style="background: url(assets/images/user-bg-pattern.svg)">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <a href="#!" className="link-reset">
                        <img src="assets/images/users/user-1.jpg" alt="user-image" className="rounded-circle mb-2 avatar-md" />
                        <span className="sidenav-user-name fw-bold">David Dev</span>
                        <span className="fs-12 fw-semibold" data-lang="user-role">Art Director</span>
                    </a>
                </div>
                <div>
                    <a className="dropdown-toggle drop-arrow-none link-reset sidenav-user-set-icon" data-bs-toggle="dropdown" data-bs-offset="0,12" href="#!" aria-haspopup="false" aria-expanded="false">
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

                        <a href="javascript:void(0);" className="dropdown-item text-danger fw-semibold">
                            <i className="ti ti-logout me-1 fs-lg align-middle"></i>
                            <span className="align-middle">Log Out</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div id="sidenav-menu">
            <ul className="side-nav">
                <li className="side-nav-title mt-2" data-lang="main">Main</li>
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
                                <a href="dashboard-analytics.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="dashboard-analytics">Analytics</span>
                                </a>
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
                <li className="side-nav-title mt-2" data-lang="apps">Apps</li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#ecommerce" aria-expanded="false" aria-controls="ecommerce" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-basket"></i></span>
                        <span className="menu-text" data-lang="ecommerce">Ecommerce</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="ecommerce">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a data-bs-toggle="collapse" href="#products" aria-expanded="false" aria-controls="products" className="side-nav-link">
                                    <span className="menu-text" data-lang="products">Products</span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <div className="collapse" id="products">
                                    <ul className="sub-menu">
                                        <li className="side-nav-item">
                                            <a href="apps-ecommerce-products.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-ecommerce-products">Products</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="apps-ecommerce-products-grid.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-ecommerce-products-grid">Products Grid</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="apps-ecommerce-product-details.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-ecommerce-product-details">Product Details</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="apps-ecommerce-product-add.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-ecommerce-product-add">Add Product</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-ecommerce-categories.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-ecommerce-categories">Categories</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a data-bs-toggle="collapse" href="#orders" aria-expanded="false" aria-controls="orders" className="side-nav-link">
                                    <span className="menu-text" data-lang="orders">Orders</span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <div className="collapse" id="orders">
                                    <ul className="sub-menu">
                                        <li className="side-nav-item">
                                            <a href="apps-ecommerce-orders.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-ecommerce-orders">Orders</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="apps-ecommerce-order-details.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-ecommerce-order-details">Order Details</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="apps-ecommerce-order-add.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-ecommerce-order-add">Add/Edit Order</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-ecommerce-customers.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-ecommerce-customers">Customers</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-ecommerce-cart.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-ecommerce-cart">Cart</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-ecommerce-checkout.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-ecommerce-checkout">Checkout</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a data-bs-toggle="collapse" href="#sellers" aria-expanded="false" aria-controls="sellers" className="side-nav-link">
                                    <span className="menu-text" data-lang="sellers">Sellers</span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <div className="collapse" id="sellers">
                                    <ul className="sub-menu">
                                        <li className="side-nav-item">
                                            <a href="apps-ecommerce-sellers.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-ecommerce-sellers">Sellers</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="apps-ecommerce-seller-details.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-ecommerce-seller-details">Sellers Details</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-ecommerce-refunds.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-ecommerce-refunds">Refunds</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-ecommerce-reviews.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-ecommerce-reviews">Reviews</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a data-bs-toggle="collapse" href="#inventory" aria-expanded="false" aria-controls="inventory" className="side-nav-link">
                                    <span className="menu-text" data-lang="inventory">Inventory</span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <div className="collapse" id="inventory">
                                    <ul className="sub-menu">
                                        <li className="side-nav-item">
                                            <a href="apps-ecommerce-warehouse.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-ecommerce-warehouse">Warehouse</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="apps-ecommerce-product-stocks.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-ecommerce-product-stocks">Product Stocks</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="apps-ecommerce-purchased-orders.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-ecommerce-purchased-orders">Purchased Orders</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a data-bs-toggle="collapse" href="#reports" aria-expanded="false" aria-controls="reports" className="side-nav-link">
                                    <span className="menu-text" data-lang="reports">Reports</span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <div className="collapse" id="reports">
                                    <ul className="sub-menu">
                                        <li className="side-nav-item">
                                            <a href="apps-ecommerce-product-views.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-ecommerce-product-views">Product Views</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="apps-ecommerce-sales.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-ecommerce-sales">Sales</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-ecommerce-attributes.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-ecommerce-attributes">Attributes</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-ecommerce-settings.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-ecommerce-settings">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a href="apps-chat.html" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-message"></i></span>
                        <span className="menu-text" data-lang="apps-chat">Chat</span>
                    </a>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#projects" aria-expanded="false" aria-controls="projects" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-briefcase"></i></span>
                        <span className="menu-text" data-lang="projects">Projects</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="projects">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="apps-projects-grid.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-projects-grid">My Projects</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-projects-list.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-projects-list">Projects List</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-projects-details.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-projects-details">View Project</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-projects-kanban.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-projects-kanban">Kanban Board</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-projects-team-board.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-projects-team-board">Team Board</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-projects-activity.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-projects-activity">Activity Steam</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#tasks" aria-expanded="false" aria-controls="tasks" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-list-check"></i></span>
                        <span className="menu-text" data-lang="tasks">Tasks</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="tasks">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="apps-task-list.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-task-list">Task List</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-task-details.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-task-details">Task Details</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-task-create.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-task-create">Create Task</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#invoice" aria-expanded="false" aria-controls="invoice" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-invoice"></i></span>
                        <span className="menu-text" data-lang="invoice">Invoice</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="invoice">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="apps-invoice-list.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-invoice-list">Invoices</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-invoice-details.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-invoice-details">Single Invoice</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-invoice-create.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-invoice-create">New Invoice</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#crm" aria-expanded="false" aria-controls="crm" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-heart-handshake"></i></span>
                        <span className="menu-text" data-lang="crm">CRM</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="crm">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="apps-crm-contacts.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-crm-contacts">Contacts</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-crm-opportunities.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-crm-opportunities">Opportunities</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-crm-deals.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-crm-deals">Deals</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-crm-leads.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-crm-leads">Leads</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-crm-pipeline.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-crm-pipeline">Pipeline</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-crm-campaign.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-crm-campaign">Campaign</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-crm-proposals.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-crm-proposals">Proposals</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-crm-estimations.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-crm-estimations">Estimations</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-crm-customers.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-crm-customers">Customers</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-crm-activities.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-crm-activities">Activities</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#users" aria-expanded="false" aria-controls="users" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-users"></i></span>
                        <span className="menu-text" data-lang="users">Users</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="users">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="apps-users-contacts.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-users-contacts">Contacts</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-users-profile.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-users-profile">Profile</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-users-account-settings.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-users-account-settings">Account Settings</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-users-roles.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-users-roles">Roles</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-users-role-details.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-users-role-details">Role Details</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-users-permissions.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-users-permissions">Permissions</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#finance" aria-expanded="false" aria-controls="finance" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-wallet"></i></span>
                        <span className="menu-text" data-lang="finance">Finance</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="finance">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a data-bs-toggle="collapse" href="#expenses" aria-expanded="false" aria-controls="expenses" className="side-nav-link">
                                    <span className="menu-text" data-lang="expenses">Expenses</span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <div className="collapse" id="expenses">
                                    <ul className="sub-menu">
                                        <li className="side-nav-item">
                                            <a href="apps-finance-expenses.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-finance-expenses">Expenses</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="apps-finance-expense-category.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-finance-expense-category">Expense Category</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-finance-income.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-finance-income">Income</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-finance-transactions.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-finance-transactions">Transactions</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-finance-banks-cards.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-finance-banks-cards">Banks &amp; Cards</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#hrm" aria-expanded="false" aria-controls="hrm" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-accessible"></i></span>
                        <span className="menu-text" data-lang="hrm">HRM</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="hrm">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a data-bs-toggle="collapse" href="#staffs" aria-expanded="false" aria-controls="staffs" className="side-nav-link">
                                    <span className="menu-text" data-lang="staffs">Staffs</span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <div className="collapse" id="staffs">
                                    <ul className="sub-menu">
                                        <li className="side-nav-item">
                                            <a href="apps-hrm-staffs.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-hrm-staffs">Staffs List</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="apps-hrm-staff-profile.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-hrm-staff-profile">Staff Profile</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="apps-hrm-staff-add.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-hrm-staff-add">Add Staffs</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-hrm-departments.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-hrm-departments">Departments</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-hrm-attendance.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-hrm-attendance">Attendance</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a data-bs-toggle="collapse" href="#leaves" aria-expanded="false" aria-controls="leaves" className="side-nav-link">
                                    <span className="menu-text" data-lang="leaves">Leaves</span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <div className="collapse" id="leaves">
                                    <ul className="sub-menu">
                                        <li className="side-nav-item">
                                            <a href="apps-hrm-leaves.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-hrm-leaves">Leaves</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="apps-hrm-leave-add.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-hrm-leave-add">Add Leave</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-hrm-holidays.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-hrm-holidays">Holidays</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-hrm-payroll.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-hrm-payroll">Payroll</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-hrm-create-salary-slip.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-hrm-create-salary-slip">Create Salary Slip</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#email" aria-expanded="false" aria-controls="email" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-mailbox"></i></span>
                        <span className="menu-text" data-lang="email">Email</span>
                        <span className="badge bg-danger text-white">New</span>
                    </a>
                    <div className="collapse" id="email">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="apps-email-inbox.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-email-inbox">Inbox</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-email-details.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-email-details">Details</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-email-compose.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-email-compose">Compose</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#support-center" aria-expanded="false" aria-controls="support-center" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-headset"></i></span>
                        <span className="menu-text" data-lang="support-center">Support Center</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="support-center">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="apps-ticket-list.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-ticket-list">Ticket List</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-ticket-details.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-ticket-details">Ticket Details</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-ticket-create.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-ticket-create">New Ticket</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#promo" aria-expanded="false" aria-controls="promo" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-discount"></i></span>
                        <span className="menu-text" data-lang="promo">Promo</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="promo">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="apps-promo-coupons.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-promo-coupons">Coupons</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-promo-gift-cards.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-promo-gift-cards">Gift Cards</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-promo-discounts.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-promo-discounts">Discounts</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#more-apps" aria-expanded="false" aria-controls="more-apps" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-apps"></i></span>
                        <span className="menu-text" data-lang="more-apps">More Apps</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="more-apps">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="apps-social-feed.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-social-feed">Social Feed</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-pro-ai.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-pro-ai">Pro AI</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-file-manager.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-file-manager">File Manager</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-calendar.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-calendar">Calendar</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-companies.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-companies">Companies</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-todo.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-todo">Todo</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-pin-board.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-pin-board">Pin Board</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-clients.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-clients">Clients</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-outlook.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-outlook">Outlook View</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-vote-list.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-vote-list">Vote List</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-issue-tracker.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-issue-tracker">Issue Tracker</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-api-keys.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-api-keys">API Keys</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-manage.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="apps-manage">Manage Apps</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a data-bs-toggle="collapse" href="#blog" aria-expanded="false" aria-controls="blog" className="side-nav-link">
                                    <span className="menu-text" data-lang="blog">Blog</span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <div className="collapse" id="blog">
                                    <ul className="sub-menu">
                                        <li className="side-nav-item">
                                            <a href="apps-blog-list.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-blog-list">Blog List</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="apps-blog-grid.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-blog-grid">Blog Grid</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="apps-blog-article.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-blog-article">Article</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="apps-blog-add.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-blog-add">Add Article</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a data-bs-toggle="collapse" href="#forum" aria-expanded="false" aria-controls="forum" className="side-nav-link">
                                    <span className="menu-text" data-lang="forum">Forum</span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <div className="collapse" id="forum">
                                    <ul className="sub-menu">
                                        <li className="side-nav-item">
                                            <a href="apps-forum-view.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-forum-view">Forum View</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="apps-forum-post.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="apps-forum-post">Forum Post</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-title mt-2" data-lang="custom-pages">Custom Pages</li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#pages" aria-expanded="false" aria-controls="pages" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-files"></i></span>
                        <span className="menu-text" data-lang="pages">Pages</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="pages">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="pages-about-us.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="pages-about-us">About Us</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="pages-contact-us.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="pages-contact-us">Contact Us</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="pages-pricing.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="pages-pricing">Pricing</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="pages-empty.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="pages-empty">Empty Page</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="pages-timeline.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="pages-timeline">Timeline</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="pages-gallery.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="pages-gallery">Gallery</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="pages-faq.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="pages-faq">FAQ</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="pages-sitemap.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="pages-sitemap">Sitemap</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="pages-search-results.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="pages-search-results">Search Results</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="pages-coming-soon.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="pages-coming-soon">Coming Soon</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="pages-privacy-policy.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="pages-privacy-policy">Privacy Policy</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="pages-terms-conditions.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="pages-terms-conditions">Terms &amp; Conditions</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#plugins" aria-expanded="false" aria-controls="plugins" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-cpu"></i></span>
                        <span className="menu-text" data-lang="plugins">Plugins</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="plugins">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="plugins-sortable.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="plugins-sortable">Sortable List</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="plugins-pdf-viewer.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="plugins-pdf-viewer">PDF Viewer</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="plugins-i18.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="plugins-i18">i18 Support</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="plugins-sweet-alerts.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="plugins-sweet-alerts">Sweet Alerts</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="plugins-idle-timer.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="plugins-idle-timer">Idle Timer</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="plugins-pass-meter.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="plugins-pass-meter">Password Meter</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="plugins-clipboard.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="plugins-clipboard">Clipboard</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="plugins-tree-view.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="plugins-tree-view">Tree View</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="plugins-masonry.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="plugins-masonry">Masonry</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="plugins-tour.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="plugins-tour">Tour</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="plugins-animation.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="plugins-animation">Animation</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="plugins-video-player.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="plugins-video-player">Video Player</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#authentication" aria-expanded="false" aria-controls="authentication" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-password-user"></i></span>
                        <span className="menu-text" data-lang="authentication">Authentication</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="authentication">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a data-bs-toggle="collapse" href="#auth-basic" aria-expanded="false" aria-controls="auth-basic" className="side-nav-link">
                                    <span className="menu-text" data-lang="auth-basic">Basic</span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <div className="collapse" id="auth-basic">
                                    <ul className="sub-menu">
                                        <li className="side-nav-item">
                                            <a href="auth-sign-in.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-sign-in">Sign In</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-sign-up.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-sign-up">Sign Up</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-reset-pass.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-reset-pass">Reset Password</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-new-pass.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-new-pass">New Password</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-two-factor.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-two-factor">Two Factor</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-lock-screen.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-lock-screen">Lock Screen</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-success-mail.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-success-mail">Success Mail</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-login-pin.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-login-pin">Login with PIN</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-delete-account.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-delete-account">Delete Account</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a data-bs-toggle="collapse" href="#auth-card" aria-expanded="false" aria-controls="auth-card" className="side-nav-link">
                                    <span className="menu-text" data-lang="auth-card">Card</span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <div className="collapse" id="auth-card">
                                    <ul className="sub-menu">
                                        <li className="side-nav-item">
                                            <a href="auth-card-sign-in.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-card-sign-in">Sign In</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-card-sign-up.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-card-sign-up">Sign Up</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-card-reset-pass.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-card-reset-pass">Reset Password</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-card-new-pass.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-card-new-pass">New Password</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-card-two-factor.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-card-two-factor">Two Factor</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-card-lock-screen.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-card-lock-screen">Lock Screen</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-card-success-mail.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-card-success-mail">Success Mail</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-card-login-pin.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-card-login-pin">Login with PIN</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-card-delete-account.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-card-delete-account">Delete Account</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a data-bs-toggle="collapse" href="#auth-split" aria-expanded="false" aria-controls="auth-split" className="side-nav-link">
                                    <span className="menu-text" data-lang="auth-split">Split</span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <div className="collapse" id="auth-split">
                                    <ul className="sub-menu">
                                        <li className="side-nav-item">
                                            <a href="auth-split-sign-in.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-split-sign-in">Sign In</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-split-sign-up.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-split-sign-up">Sign Up</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-split-reset-pass.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-split-reset-pass">Reset Password</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-split-new-pass.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-split-new-pass">New Password</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-split-two-factor.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-split-two-factor">Two Factor</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-split-lock-screen.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-split-lock-screen">Lock Screen</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-split-success-mail.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-split-success-mail">Success Mail</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-split-login-pin.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-split-login-pin">Login with PIN</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="auth-split-delete-account.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="auth-split-delete-account">Delete Account</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#error-pages" aria-expanded="false" aria-controls="error-pages" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-alert-triangle"></i></span>
                        <span className="menu-text" data-lang="error-pages">Error Pages</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="error-pages">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="error-400.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="error-400">400 Bad Request</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="error-401.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="error-401">401 Unauthorized</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="error-403.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="error-403">403 Forbidden</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="error-404.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="error-404">404 Not Found</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="error-408.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="error-408">408 Request Timeout</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="error-500.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="error-500">500 Internal Server</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="error-maintenance.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="error-maintenance">Maintenance</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-title mt-2" data-lang="layouts">Layouts</li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#layout-options" aria-expanded="false" aria-controls="layout-options" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-layout"></i></span>
                        <span className="menu-text" data-lang="layout-options">Layout Options</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="layout-options">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="layouts-horizontal.html" className="side-nav-link" target="_blank">
                                    <span className="menu-text" data-lang="layouts-horizontal">Horizontal</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="layouts-boxed.html" className="side-nav-link" target="_blank">
                                    <span className="menu-text" data-lang="layouts-boxed">Boxed</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="layouts-scrollable.html" className="side-nav-link" target="_blank">
                                    <span className="menu-text" data-lang="layouts-scrollable">Scrollable</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="layouts-compact.html" className="side-nav-link" target="_blank">
                                    <span className="menu-text" data-lang="layouts-compact">Compact</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="layouts-preloader.html" className="side-nav-link" target="_blank">
                                    <span className="menu-text" data-lang="layouts-preloader">Preloader</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#sidebars" aria-expanded="false" aria-controls="sidebars" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-layout-sidebar-inactive"></i></span>
                        <span className="menu-text" data-lang="sidebars">Sidebars</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="sidebars">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="layouts-sidebar-light.html" className="side-nav-link" target="_blank">
                                    <span className="menu-text" data-lang="layouts-sidebar-light">Light Menu</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="layouts-sidebar-gradient.html" className="side-nav-link" target="_blank">
                                    <span className="menu-text" data-lang="layouts-sidebar-gradient">Gradient Menu</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="layouts-sidebar-gray.html" className="side-nav-link" target="_blank">
                                    <span className="menu-text" data-lang="layouts-sidebar-gray">Gray Menu</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="layouts-sidebar-image.html" className="side-nav-link" target="_blank">
                                    <span className="menu-text" data-lang="layouts-sidebar-image">Image Menu</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="layouts-sidebar-compact.html" className="side-nav-link" target="_blank">
                                    <span className="menu-text" data-lang="layouts-sidebar-compact">Compact Menu</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="layouts-sidebar-on-hover.html" className="side-nav-link" target="_blank">
                                    <span className="menu-text" data-lang="layouts-sidebar-on-hover">On Hover Menu</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="layouts-sidebar-offcanvas.html" className="side-nav-link" target="_blank">
                                    <span className="menu-text" data-lang="layouts-sidebar-offcanvas">Offcanvas Menu</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="layouts-sidebar-no-icons.html" className="side-nav-link" target="_blank">
                                    <span className="menu-text" data-lang="layouts-sidebar-no-icons">No Icons with Lines</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="layouts-sidebar-with-lines.html" className="side-nav-link" target="_blank">
                                    <span className="menu-text" data-lang="layouts-sidebar-with-lines">Sidebar with Lines</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#topbar" aria-expanded="false" aria-controls="topbar" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-layout-bottombar"></i></span>
                        <span className="menu-text" data-lang="topbar">Topbar</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="topbar">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="layouts-topbar-dark.html" className="side-nav-link" target="_blank">
                                    <span className="menu-text" data-lang="layouts-topbar-dark">Dark Topbar</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="layouts-topbar-gray.html" className="side-nav-link" target="_blank">
                                    <span className="menu-text" data-lang="layouts-topbar-gray">Gray Topbar</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="layouts-topbar-gradient.html" className="side-nav-link" target="_blank">
                                    <span className="menu-text" data-lang="layouts-topbar-gradient">Gradient Topbar</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-title mt-2" data-lang="components">Components</li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#base-ui" aria-expanded="false" aria-controls="base-ui" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-components"></i></span>
                        <span className="menu-text" data-lang="base-ui">Base UI</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="base-ui">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="ui-accordions.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-accordions">Accordions</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-alerts.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-alerts">Alerts</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-buttons.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-buttons">Buttons</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-badges.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-badges">Badges</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-colors.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-colors">Colors</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-breadcrumb.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-breadcrumb">Breadcrumb</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-cards.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-cards">Cards</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-carousel.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-carousel">Carousel</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-collapse.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-collapse">Collapse</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-images.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-images">Images</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-dropdowns.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-dropdowns">Dropdowns</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-videos.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-videos">Videos</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-grid.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-grid">Grid Options</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-links.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-links">Links</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-list-group.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-list-group">List Group</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-modals.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-modals">Modals</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-notifications.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-notifications">Notifications</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-offcanvas.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-offcanvas">Offcanvas</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-placeholders.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-placeholders">Placeholders</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-pagination.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-pagination">Pagination</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-popovers.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-popovers">Popovers</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-progress.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-progress">Progress</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-scrollspy.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-scrollspy">Scrollspy</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-spinners.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-spinners">Spinners</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-tabs.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-tabs">Tabs</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-tooltips.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-tooltips">Tooltips</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-typography.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-typography">Typography</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="ui-utilities.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="ui-utilities">Utilities</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#widgets" aria-expanded="false" aria-controls="widgets" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-category"></i></span>
                        <span className="menu-text" data-lang="widgets">Widgets</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="widgets">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="widgets-charts.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="widgets-charts">Charts</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="widgets-mixed.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="widgets-mixed">Mixed</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="widgets-social.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="widgets-social">Social</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="widgets-statistics.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="widgets-statistics">Statistics</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="widgets-weather.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="widgets-weather">Weather</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-chart-donut"></i></span>
                        <span className="menu-text" data-lang="charts">Charts</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="charts">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a data-bs-toggle="collapse" href="#apex-charts" aria-expanded="false" aria-controls="apex-charts" className="side-nav-link">
                                    <span className="menu-text" data-lang="apex-charts">Apex Charts</span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <div className="collapse" id="apex-charts">
                                    <ul className="sub-menu">
                                        <li className="side-nav-item">
                                            <a href="charts-apex-area.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-apex-area">Area</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-apex-bar.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-apex-bar">Bar</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-apex-bubble.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-apex-bubble">Bubble</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-apex-candlestick.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-apex-candlestick">Candlestick</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-apex-column.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-apex-column">Column</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-apex-heatmap.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-apex-heatmap">Heatmap</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-apex-line.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-apex-line">Line</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-apex-mixed.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-apex-mixed">Mixed</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-apex-timeline.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-apex-timeline">Timeline</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-apex-boxplot.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-apex-boxplot">Boxplot</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-apex-treemap.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-apex-treemap">Treemap</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-apex-pie.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-apex-pie">Pie</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-apex-radar.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-apex-radar">Radar</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-apex-radialbar.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-apex-radialbar">RadialBar</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-apex-scatter.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-apex-scatter">Scatter</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-apex-polar-area.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-apex-polar-area">Polar Area</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-apex-sparklines.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-apex-sparklines">Sparklines</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-apex-range.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-apex-range">Range</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-apex-funnel.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-apex-funnel">Funnel</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-apex-slope.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-apex-slope">Slope</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a data-bs-toggle="collapse" href="#echarts" aria-expanded="false" aria-controls="echarts" className="side-nav-link">
                                    <span className="menu-text" data-lang="echarts">Echarts</span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <div className="collapse" id="echarts">
                                    <ul className="sub-menu">
                                        <li className="side-nav-item">
                                            <a href="charts-echart-line.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-echart-line">Line</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-echart-bar.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-echart-bar">Bar</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-echart-pie.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-echart-pie">Pie</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-echart-scatter.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-echart-scatter">Scatter</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-echart-geo-map.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-echart-geo-map">GEO Map</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-echart-gauge.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-echart-gauge">Gauge</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-echart-candlestick.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-echart-candlestick">Candlestick</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-echart-area.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-echart-area">Area</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-echart-radar.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-echart-radar">Radar</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-echart-heatmap.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-echart-heatmap">Heatmap</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-echart-other.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-echart-other">Other</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a data-bs-toggle="collapse" href="#chartjs" aria-expanded="false" aria-controls="chartjs" className="side-nav-link">
                                    <span className="menu-text" data-lang="chartjs">Chart Js</span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <div className="collapse" id="chartjs">
                                    <ul className="sub-menu">
                                        <li className="side-nav-item">
                                            <a href="charts-chartjs-area.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-chartjs-area">Area</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-chartjs-bar.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-chartjs-bar">Bar</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-chartjs-line.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-chartjs-line">Line</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="charts-chartjs-other.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="charts-chartjs-other">Other</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#forms" aria-expanded="false" aria-controls="forms" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-clipboard-list"></i></span>
                        <span className="menu-text" data-lang="forms">Forms</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="forms">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="form-elements.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="form-elements">Basic Elements</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="form-validation.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="form-validation">Validation</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="form-wizard.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="form-wizard">Wizard</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="form-select.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="form-select">Select</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="form-pickers.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="form-pickers">Pickers</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="form-fileuploads.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="form-fileuploads">File Uploads</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="form-text-editors.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="form-text-editors">Text Editors</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="form-range-slider.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="form-range-slider">Range Slider</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="form-cropper.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="form-cropper">Image Cropper</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="form-layout.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="form-layout">Layouts</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="form-other-plugin.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="form-other-plugin">Other Plugins</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-table-column"></i></span>
                        <span className="menu-text" data-lang="tables">Tables</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="tables">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="tables-static.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="tables-static">Static Tables</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="tables-custom.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="tables-custom">Custom Tables</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a data-bs-toggle="collapse" href="#datatables" aria-expanded="false" aria-controls="datatables" className="side-nav-link">
                                    <span className="menu-text" data-lang="datatables">DataTables</span>
                                    <span className="badge bg-success text-white">15</span>
                                </a>
                                <div className="collapse" id="datatables">
                                    <ul className="sub-menu">
                                        <li className="side-nav-item">
                                            <a href="tables-datatables-basic.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="tables-datatables-basic">Basic</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="tables-datatables-export-data.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="tables-datatables-export-data">Export Data</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="tables-datatables-select.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="tables-datatables-select">Select</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="tables-datatables-ajax.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="tables-datatables-ajax">Ajax</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="tables-datatables-javascript.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="tables-datatables-javascript">Javascript Source</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="tables-datatables-rendering.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="tables-datatables-rendering">Data Rendering</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="tables-datatables-scroll.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="tables-datatables-scroll">Scroll</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="tables-datatables-fixed-columns.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="tables-datatables-fixed-columns">Fixed Columns</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="tables-datatables-fixed-header.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="tables-datatables-fixed-header">Fixed Header</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="tables-datatables-columns.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="tables-datatables-columns">Show &amp; Hide Column</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="tables-datatables-child-rows.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="tables-datatables-child-rows">Child Rows</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="tables-datatables-column-searching.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="tables-datatables-column-searching">Column Searching</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="tables-datatables-range-search.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="tables-datatables-range-search">Range Search</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="tables-datatables-rows-add.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="tables-datatables-rows-add">Add Rows</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="tables-datatables-checkbox-select.html" className="side-nav-link">
                                                <span className="menu-text" data-lang="tables-datatables-checkbox-select">Checkbox Select</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-icons"></i></span>
                        <span className="menu-text" data-lang="icons">Icons</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="icons">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="icons-tabler.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="icons-tabler">Tabler</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="icons-lucide.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="icons-lucide">Lucide</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="icons-remix.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="icons-remix">Remix</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="icons-solar-duotone.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="icons-solar-duotone">Solar Duotone</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="icons-flags.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="icons-flags">Flags</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#maps" aria-expanded="false" aria-controls="maps" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-map"></i></span>
                        <span className="menu-text" data-lang="maps">Maps</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="maps">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a href="maps-google.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="maps-google">Google Maps</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="maps-vector.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="maps-vector">Vector Maps</span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="maps-leaflet.html" className="side-nav-link">
                                    <span className="menu-text" data-lang="maps-leaflet">Leaflet Maps</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="side-nav-title mt-2" data-lang="menu-items">Menu Items</li>
                <li className="side-nav-item">
                    <a data-bs-toggle="collapse" href="#menu-levels" aria-expanded="false" aria-controls="menu-levels" className="side-nav-link">
                        <span className="menu-icon"><i className="ti ti-sitemap"></i></span>
                        <span className="menu-text" data-lang="menu-levels">Menu Levels</span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="menu-levels">
                        <ul className="sub-menu">
                            <li className="side-nav-item">
                                <a data-bs-toggle="collapse" href="#second-level" aria-expanded="false" aria-controls="second-level" className="side-nav-link">
                                    <span className="menu-text" data-lang="second-level">Second Level</span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <div className="collapse" id="second-level">
                                    <ul className="sub-menu">
                                        <li className="side-nav-item">
                                            <a href="#" className="side-nav-link">
                                                <span className="menu-text" data-lang="menu-item-1">Item 2.1</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="#" className="side-nav-link">
                                                <span className="menu-text" data-lang="menu-item-2">Item 2.2</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a data-bs-toggle="collapse" href="#second-level-2" aria-expanded="false" aria-controls="second-level-2" className="side-nav-link">
                                    <span className="menu-text" data-lang="second-level-2">Second Level</span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <div className="collapse" id="second-level-2">
                                    <ul className="sub-menu">
                                        <li className="side-nav-item">
                                            <a href="#" className="side-nav-link">
                                                <span className="menu-text" data-lang="menu-item-3">Item 2.1</span>
                                            </a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a data-bs-toggle="collapse" href="#menu-item-4" aria-expanded="false" aria-controls="menu-item-4" className="side-nav-link">
                                                <span className="menu-text" data-lang="menu-item-4">Item 2.2</span>
                                                <span className="menu-arrow"></span>
                                            </a>
                                            <div className="collapse" id="menu-item-4">
                                                <ul className="sub-menu">
                                                    <li className="side-nav-item">
                                                        <a href="#" className="side-nav-link">
                                                            <span className="menu-text" data-lang="menu-item-5">Item 3.1</span>
                                                        </a>
                                                    </li>
                                                    <li className="side-nav-item">
                                                        <a href="#" className="side-nav-link">
                                                            <span className="menu-text" data-lang="menu-item-6">Item 3.2</span>
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
                <li className="side-nav-item">
                    <a href="#" className="side-nav-link disabled">
                        <span className="menu-icon"><i className="ti ti-ban"></i></span>
                        <span className="menu-text" data-lang="disabled-menu">Disabled Menu</span>
                    </a>
                </li>
                <li className="side-nav-item">
                    <a href="#" className="side-nav-link special-menu">
                        <span className="menu-icon"><i className="ti ti-star"></i></span>
                        <span className="menu-text" data-lang="special-menu">Special Menu</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
            <div className="content-page">
                <div className="container-fluid">
                    <div className="page-title-head d-flex align-items-center">
                        <div className="flex-grow-1">
                            <h4 className="page-main-title m-0">Reviews</h4>
                        </div>

                        <div className="text-end">
                            <ol className="breadcrumb m-0 py-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Paces</a></li>
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                                <li className="breadcrumb-item active">Reviews</li>
                            </ol>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-xxl-12">
                            <div data-table data-table-rows-per-page="5" className="card">
                                <div className="card-header p-0 d-block">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-xl-6 border-end border-dashed">
                                            <div className="row align-items-center g-0">
                                                <div className="col-xl-7">
                                                    <div className="d-flex align-items-center gap-4 p-4">
                                                        <img src="assets/images/ratings.svg" alt="Product" height="80" />
                                                        <div>
                                                            <h3 className="d-flex align-items-center gap-2 mb-2 fw-bold">4.92 <i className="ti ti-star-filled text-warning"></i></h3>
                                                            <p className="mb-2">Based on 245 verified reviews</p>
                                                            <p className="pe-2 h6 text-muted mb-2 lh-base">Feedback collected from real customers who purchased our templates</p>
                                                            <span className="badge badge-label badge-soft-success">+12 new this week</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-5">
                                                    <div className="p-3">
                                                        <div className="d-flex align-items-center gap-2 mb-2">
                                                            <div className="flex-shrink-0" style="width: 50px">5 Star</div>
                                                            <div className="progress w-100 bg-label-primary" style="height: 8px">
                                                                <div className="progress-bar bg-primary" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <div className="flex-shrink-0 text-end" style="width: 30px"><span className="badge text-bg-light">128</span></div>
                                                        </div>

                                                        <div className="d-flex align-items-center gap-2 mb-2">
                                                            <div className="flex-shrink-0" style="width: 50px">4 Star</div>
                                                            <div className="progress w-100 bg-label-primary" style="height: 8px">
                                                                <div className="progress-bar bg-primary" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <div className="flex-shrink-0 text-end" style="width: 30px"><span className="badge text-bg-light">37</span></div>
                                                        </div>

                                                        <div className="d-flex align-items-center gap-2 mb-2">
                                                            <div className="flex-shrink-0" style="width: 50px">3 Star</div>
                                                            <div className="progress w-100 bg-label-primary" style="height: 8px">
                                                                <div className="progress-bar bg-primary" role="progressbar" style="width: 3%" aria-valuenow="3" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <div className="flex-shrink-0 text-end" style="width: 30px"><span className="badge text-bg-light">15</span></div>
                                                        </div>

                                                        <div className="d-flex align-items-center gap-2 mb-2">
                                                            <div className="flex-shrink-0" style="width: 50px">2 Star</div>
                                                            <div className="progress w-100 bg-label-primary" style="height: 8px">
                                                                <div className="progress-bar bg-primary" role="progressbar" style="width: 1%" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <div className="flex-shrink-0 text-end" style="width: 30px"><span className="badge text-bg-light">7</span></div>
                                                        </div>

                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="flex-shrink-0" style="width: 50px">1 Star</div>
                                                            <div className="progress w-100 bg-label-primary" style="height: 8px">
                                                                <div className="progress-bar bg-primary" role="progressbar" style="width: 1%" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <div className="flex-shrink-0 text-end" style="width: 30px"><span className="badge text-bg-light">2</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="pe-3 ps-1">
                                                <div id="reviews-30days-chart"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-header border-light d-flex align-items-center justify-content-between flex-wrap gap-2">
                                    <div className="d-flex gap-2">
                                        <div className="app-search">
                                            <input data-table-search type="search" className="form-control" placeholder="Search reviews..." />
                                            <i className="ti ti-search app-search-icon text-muted"></i>
                                        </div>
                                        <button data-table-delete-selected className="btn btn-danger d-none">Delete</button>
                                    </div>

                                    <div className="d-flex align-items-center gap-2">
                                  
                                        <div>
                                            <select data-table-set-rows-per-page className="form-select form-control my-1 my-md-0">
                                                <option value="5">5</option>
                                                <option value="10">10</option>
                                                <option value="15">15</option>
                                                <option value="20">20</option>
                                            </select>
                                        </div>

                                        <div className="dropdown">
                                            <button className="btn btn-default dropdown-toggle drop-arrow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-download me-1"></i> Export <i className="ti ti-chevron-down align-middle ms-1"></i></button>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li><a className="dropdown-item" href="#">Export as PDF</a></li>
                                                <li><a className="dropdown-item" href="#">Export as CSV</a></li>
                                                <li><a className="dropdown-item" href="#">Export as Excel</a></li>
                                            </ul>
                                        </div>

                                        <div className="dropdown">
                                            <button className="btn btn-default dropdown-toggle drop-arrow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">View All <i className="ti ti-chevron-down align-middle ms-1"></i></button>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li><a className="dropdown-item" href="#">All</a></li>
                                                <li><a className="dropdown-item" href="#">Pending</a></li>
                                                <li><a className="dropdown-item" href="#">Approved</a></li>
                                                <li><a className="dropdown-item" href="#">Disabled</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table className="table table-custom table-centered table-select table-hover w-100 mb-0">
                                        <thead className="bg-light align-middle bg-opacity-25">
                                            <tr className="text-uppercase fs-xxs">
                                                <th className="ps-3" style="width: 1%">
                                                    <input data-table-select-all className="form-check-input form-check-input-light fs-14 mt-0" type="checkbox" id="select-all-products" value="option" />
                                                </th>
                                                <th data-table-sort="product">Product</th>
                                                <th data-table-sort="reviewer">Reviewer</th>
                                                <th style="width: 18rem">Review</th>
                                                <th data-table-sort>Date</th>
                                                <th data-table-sort>Status</th>
                                                <th className="text-center" style="width: 1%">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="ps-3">
                                                    <input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" value="option" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-lg me-3">
                                                            <img src="assets/images/products/2.png" alt="Product" className="img-fluid rounded" />
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-0">
                                                                <a data-sort="product" href="apps-ecommerce-product-details.html" className="link-reset">Wireless Earbuds</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                                        <div className="avatar avatar-sm">
                                                            <img src="assets/images/users/user-8.jpg" alt="avatar-8" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div>
                                                            <h5 data-sort="reviewer" className="text-nowrap fs-sm mb-0 lh-base">Sophia Lee</h5>
                                                            <p className="text-muted fs-xs mb-0">sophia.lee&#64;digitalshop.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-warning fs-lg">
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                    </span>
                                                    <h5 className="mt-2">Great product, would buy again!</h5>
                                                    <p className="text-muted fst-italic mb-0">"These earbuds are amazing, the sound quality is top-notch. Totally worth the price!"</p>
                                                </td>
                                                <td>22 Apr, 2025 <small className="text-muted">04:10 PM</small></td>
                                                <td><span className="badge badge-soft-success fs-xxs">Published</span></td>
                                                <td>
                                                    <div className="d-flex justify-content-center gap-1">
                                                        <a href="#" className="btn btn-default btn-icon btn-sm"><i className="ti ti-eye fs-lg"></i></a>
                                                        <a href="#" className="btn btn-default btn-icon btn-sm"><i className="ti ti-edit fs-lg"></i></a>
                                                        <a href="#" data-table-delete-row className="btn btn-default btn-icon btn-sm"><i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="ps-3">
                                                    <input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" value="option" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-lg me-3">
                                                            <img src="assets/images/products/3.png" alt="Product" className="img-fluid rounded" />
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-0">
                                                                <a data-sort="product" href="apps-ecommerce-product-details.html" className="link-reset">Smart Watch</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                                        <div className="avatar avatar-sm">
                                                            <img src="assets/images/users/user-6.jpg" alt="avatar-6" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div>
                                                            <h5 data-sort="reviewer" className="text-nowrap fs-sm mb-0 lh-base">David Smith</h5>
                                                            <p className="text-muted fs-xs mb-0">david.smith&#64;healthstore.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-warning fs-lg">
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star"></i>
                                                    </span>
                                                    <h5 className="mt-2">Decent, but overpriced</h5>
                                                    <p className="text-muted fst-italic mb-0">"It does the job, but I feel like it's a little expensive for what it offers."</p>
                                                </td>
                                                <td>23 Apr, 2025 <small className="text-muted">02:20 PM</small></td>
                                                <td><span className="badge badge-soft-warning fs-xxs">Pending</span></td>
                                                <td>
                                                    <div className="d-flex justify-content-center gap-1">
                                                        <a href="#" className="btn btn-default btn-icon btn-sm"><i className="ti ti-eye fs-lg"></i></a>
                                                        <a href="#" className="btn btn-default btn-icon btn-sm"><i className="ti ti-edit fs-lg"></i></a>
                                                        <a href="#" data-table-delete-row className="btn btn-default btn-icon btn-sm"><i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="ps-3">
                                                    <input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" value="option" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-lg me-3">
                                                            <img src="assets/images/products/4.png" alt="Product" className="img-fluid rounded" />
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-0">
                                                                <a data-sort="product" href="apps-ecommerce-product-details.html" className="link-reset">4K Ultra HD TV</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                                        <div className="avatar avatar-sm">
                                                            <img src="assets/images/users/user-3.jpg" alt="avatar-3" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div>
                                                            <h5 data-sort="reviewer" className="text-nowrap fs-sm mb-0 lh-base">Alice Johnson</h5>
                                                            <p className="text-muted fs-xs mb-0">alice.johnson&#64;homesupplies.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-warning fs-lg">
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                    </span>
                                                    <h5 className="mt-2">Amazing quality!</h5>
                                                    <p className="text-muted fst-italic mb-0">"The TV has incredible picture quality. Totally worth the investment!"</p>
                                                </td>
                                                <td>24 Apr, 2025 <small className="text-muted">09:15 AM</small></td>
                                                <td><span className="badge badge-soft-success fs-xxs">Published</span></td>
                                                <td>
                                                    <div className="d-flex justify-content-center gap-1">
                                                        <a href="#" className="btn btn-default btn-icon btn-sm"><i className="ti ti-eye fs-lg"></i></a>
                                                        <a href="#" className="btn btn-default btn-icon btn-sm"><i className="ti ti-edit fs-lg"></i></a>
                                                        <a href="#" data-table-delete-row className="btn btn-default btn-icon btn-sm"><i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="ps-3">
                                                    <input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" value="option" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-lg me-3">
                                                            <img src="assets/images/products/5.png" alt="Product" className="img-fluid rounded" />
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-0">
                                                                <a data-sort="product" href="apps-ecommerce-product-details.html" className="link-reset">Smartphone X</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                                        <div className="avatar avatar-sm">
                                                            <img src="assets/images/users/user-2.jpg" alt="avatar-2" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div>
                                                            <h5 data-sort="reviewer" className="text-nowrap fs-sm mb-0 lh-base">Michael Green</h5>
                                                            <p className="text-muted fs-xs mb-0">michael.green&#64;mobileshop.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-warning fs-lg">
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                    </span>
                                                    <h5 className="mt-2">Perfect phone, highly recommended!</h5>
                                                    <p className="text-muted fst-italic mb-0">"The camera is amazing and the performance is smooth. Definitely the best smartphone I have used!"</p>
                                                </td>
                                                <td>25 Apr, 2025 <small className="text-muted">11:30 AM</small></td>
                                                <td><span className="badge badge-soft-success fs-xxs">Published</span></td>
                                                <td>
                                                    <div className="d-flex justify-content-center gap-1">
                                                        <a href="#" className="btn btn-default btn-icon btn-sm"><i className="ti ti-eye fs-lg"></i></a>
                                                        <a href="#" className="btn btn-default btn-icon btn-sm"><i className="ti ti-edit fs-lg"></i></a>
                                                        <a href="#" data-table-delete-row className="btn btn-default btn-icon btn-sm"><i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="ps-3">
                                                    <input className="form-check-input form-check-input-light fs-14 product-item-check mt-0" type="checkbox" value="option" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-lg me-3">
                                                            <img src="assets/images/products/6.png" alt="Product" className="img-fluid rounded" />
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-0">
                                                                <a data-sort="product" href="apps-ecommerce-product-details.html" className="link-reset">Gaming Laptop</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                                        <div className="avatar avatar-sm">
                                                            <img src="assets/images/users/user-4.jpg" alt="avatar-4" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div>
                                                            <h5 data-sort="reviewer" className="text-nowrap fs-sm mb-0 lh-base">Chris Evans</h5>
                                                            <p className="text-muted fs-xs mb-0">chris.evans&#64;gamestore.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-warning fs-lg">
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star-filled"></i>
                                                        <i className="ti ti-star"></i>
                                                    </span>
                                                    <h5 className="mt-2">Great for gaming but heavy</h5>
                                                    <p className="text-muted fst-italic mb-0">"The performance is amazing, but it's a bit too heavy to carry around all day."</p>
                                                </td>
                                                <td>26 Apr, 2025 <small className="text-muted">10:00 AM</small></td>
                                                <td><span className="badge badge-soft-warning fs-xxs">Pending</span></td>
                                                <td>
                                                    <div className="d-flex justify-content-center gap-1">
                                                        <a href="#" className="btn btn-default btn-icon btn-sm"><i className="ti ti-eye fs-lg"></i></a>
                                                        <a href="#" className="btn btn-default btn-icon btn-sm"><i className="ti ti-edit fs-lg"></i></a>
                                                        <a href="#" data-table-delete-row className="btn btn-default btn-icon btn-sm"><i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer border-0">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div data-table-pagination-info="reviews"></div>
                                        <div data-table-pagination></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start">
                                <script>
                                    document.write(new Date().getFullYear())
                                </script>
                                © Paces - By <span className="fw-bold text-decoration-underline text-uppercase text-reset fs-12">Coderthemes</span>
                            </div>
                            <div className="col-md-6">
                                <div className="d-none d-md-flex justify-content-end gap-3">
                                    <a href="javascript: void(0);" className="link-reset">About</a>
                                    <a href="javascript: void(0);" className="link-reset">Support</a>
                                    <a href="javascript: void(0);" className="link-reset">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>

        </div>

        <div className="offcanvas offcanvas-end overflow-hidden" tabindex="-1" id="theme-settings-offcanvas">
            <div className="d-flex justify-content-between text-bg-primary gap-2 p-3" style="background-image: url(assets/images/settings-bg.png)">
                <div>
                    <h5 className="mb-1 fw-bold text-white text-uppercase">Admin Customizer</h5>
                    <p className="text-white text-opacity-75 fst-italic fw-medium mb-0">Easily configure layout, styles, and preferences for your admin interface.</p>
                </div>

                <div className="flex-grow-0">
                    <button type="button" className="d-block btn btn-sm bg-white bg-opacity-25 text-white rounded-circle btn-icon" data-bs-dismiss="offcanvas">
                        <i className="ti ti-x fs-lg"></i>
                    </button>
                </div>
            </div>

            <div className="offcanvas-body theme-customizer-bar p-0 h-100" data-simplebar="">
                <div id="skin" className="p-3 border-bottom border-dashed">
                    <h5 className="mb-3 fw-bold">Select Theme</h5>
                    <div className="row g-3">
                        <div className="col-6" id="skin-default">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-default" value="default" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-default">
                                    <img src="assets/images/layouts/skin-default.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Default</h5>
                        </div>

                        <div className="col-6" id="skin-minimal">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-minimal" value="minimal" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-minimal">
                                    <img src="assets/images/layouts/skin-minimal.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Minimal</h5>
                        </div>

                        <div className="col-6" id="skin-modern">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-modern" value="modern" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-modern">
                                    <img src="assets/images/layouts/skin-modern.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Modern</h5>
                        </div>

                        <div className="col-6" id="skin-material">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-material" value="material" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-material">
                                    <img src="assets/images/layouts/skin-material.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Material</h5>
                        </div>

                        <div className="col-6" id="skin-saas">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-saas" value="saas" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-saas">
                                    <img src="assets/images/layouts/skin-saas.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">SaaS</h5>
                        </div>

                        <div className="col-6" id="skin-flat">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-flat" value="flat" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-flat">
                                    <img src="assets/images/layouts/skin-flat.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Flat</h5>
                        </div>

                        <div className="col-6" id="skin-galaxy">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-galaxy" value="galaxy" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-galaxy">
                                    <img src="assets/images/layouts/skin-galaxy.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Galaxy</h5>
                        </div>

                        <div className="col-6" id="skin-luxe">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-luxe" value="luxe" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-luxe">
                                    <img src="assets/images/layouts/skin-luxe.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Luxe</h5>
                        </div>

                        <div className="col-6" id="skin-retro">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-retro" value="retro" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-retro">
                                    <img src="assets/images/layouts/skin-retro.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Retro</h5>
                        </div>

                        <div className="col-6" id="skin-neon">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-neon" value="neon" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-neon">
                                    <img src="assets/images/layouts/skin-neon.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Neon</h5>
                        </div>

                        <div className="col-6" id="skin-pixel">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-pixel" value="pixel" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-pixel">
                                    <img src="assets/images/layouts/skin-pixel.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Pixel</h5>
                        </div>

                        <div className="col-6" id="skin-soft">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-soft" value="soft" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-soft">
                                    <img src="assets/images/layouts/skin-soft.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Soft</h5>
                        </div>

                        <div className="col-6" id="skin-mono">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-mono" value="mono" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-mono">
                                    <img src="assets/images/layouts/skin-mono.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Mono</h5>
                        </div>

                        <div className="col-6" id="skin-prism">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-prism" value="prism" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-prism">
                                    <img src="assets/images/layouts/skin-prism.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Prism</h5>
                        </div>

                        <div className="col-6" id="skin-nova">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-nova" value="nova" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-nova">
                                    <img src="assets/images/layouts/skin-nova.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Nova</h5>
                        </div>

                        <div className="col-6" id="skin-zen">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-zen" value="zen" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-zen">
                                    <img src="assets/images/layouts/skin-zen.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Zen</h5>
                        </div>

                        <div className="col-6" id="skin-elegant">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-elegant" value="elegant" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-elegant">
                                    <img src="assets/images/layouts/skin-elegant.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Elegant</h5>
                        </div>

                        <div className="col-6" id="skin-vivid">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-vivid" value="vivid" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-vivid">
                                    <img src="assets/images/layouts/skin-vivid.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Vivid</h5>
                        </div>

                        <div className="col-6" id="skin-aurora">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-aurora" value="aurora" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-aurora">
                                    <img src="assets/images/layouts/skin-aurora.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Aurora</h5>
                        </div>

                        <div className="col-6" id="skin-crystal">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-crystal" value="crystal" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-crystal">
                                    <img src="assets/images/layouts/skin-crystal.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Crystal</h5>
                        </div>

                        <div className="col-6" id="skin-matrix">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-matrix" value="matrix" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-matrix">
                                    <img src="assets/images/layouts/skin-matrix.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Matrix</h5>
                        </div>

                        <div className="col-6" id="skin-orbit">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-orbit" value="orbit" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-orbit">
                                    <img src="assets/images/layouts/skin-orbit.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Orbit</h5>
                        </div>

                        <div className="col-6" id="skin-neo">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-neo" value="neo" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-neo">
                                    <img src="assets/images/layouts/skin-neo.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Neo</h5>
                        </div>

                        <div className="col-6" id="skin-silver">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-silver" value="silver" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-silver">
                                    <img src="assets/images/layouts/skin-silver.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Silver</h5>
                        </div>

                        <div className="col-6" id="skin-xenon">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-skin" id="demo-skin-xenon" value="xenon" />
                                <label className="form-check-label p-0 w-100" for="demo-skin-xenon">
                                    <img src="assets/images/layouts/skin-xenon.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Xenon</h5>
                        </div>
                    </div>
                </div>

                <div id="theme" className="p-3 border-bottom border-dashed">
                    <h5 className="mb-3 fw-bold">Color Scheme</h5>
                    <div className="row">
                        <div className="col-4" id="theme-light">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-bs-theme" id="layout-color-light" value="light" />
                                <label className="form-check-label p-0 w-100" for="layout-color-light">
                                    <img src="assets/images/layouts/theme-light.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Light</h5>
                        </div>

                        <div className="col-4" id="theme-dark">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-bs-theme" id="layout-color-dark" value="dark" />
                                <label className="form-check-label p-0 w-100" for="layout-color-dark">
                                    <img src="assets/images/layouts/theme-dark.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Dark</h5>
                        </div>

                        <div className="col-4" id="theme-system">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-bs-theme" id="layout-color-system" value="system" />
                                <label className="form-check-label p-0 w-100" for="layout-color-system">
                                    <img src="assets/images/layouts/theme-system.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">System</h5>
                        </div>
                    </div>
                </div>

                <div id="topbar-color" className="p-3 border-bottom border-dashed">
                    <h5 className="mb-3 fw-bold">Topbar Color</h5>

                    <div className="row g-3">
                        <div className="col-4" id="topbar-color-light">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-topbar-color" id="layout-topbar-color-light" value="light" />
                                <label className="form-check-label p-0 w-100" for="layout-topbar-color-light">
                                    <img src="assets/images/layouts/topbar-color-light.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="text-center text-muted mt-2 mb-0">Light</h5>
                        </div>

                        <div className="col-4" id="topbar-color-dark">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-topbar-color" id="layout-topbar-color-dark" value="dark" />
                                <label className="form-check-label p-0 w-100" for="layout-topbar-color-dark">
                                    <img src="assets/images/layouts/topbar-color-dark.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="fs-sm text-center text-muted mt-2 mb-0">Dark</h5>
                        </div>

                        <div className="col-4" id="topbar-color-gray">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-topbar-color" id="layout-topbar-color-gray" value="gray" />
                                <label className="form-check-label p-0 w-100" for="layout-topbar-color-gray">
                                    <img src="assets/images/layouts/topbar-color-gray.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="fs-sm text-center text-muted mt-2 mb-0">Gray</h5>
                        </div>

                        <div className="col-4" id="topbar-color-gradient">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-topbar-color" id="layout-topbar-color-gradient" value="gradient" />
                                <label className="form-check-label p-0 w-100" for="layout-topbar-color-gradient">
                                    <img src="assets/images/layouts/topbar-color-gradient.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="fs-sm text-center text-muted mt-2 mb-0">Gradient</h5>
                        </div>
                    </div>
                </div>

                <div id="sidenav-color" className="p-3 border-bottom border-dashed">
                    <h5 className="mb-3 fw-bold">Sidenav Color</h5>

                    <div className="row g-3">
                        <div className="col-4" id="sidenav-color-light">
                            <div className="form-check sidebar-setting card-radio">
                                <input className="form-check-input" type="radio" name="data-menu-color" id="layout-sidenav-color-light" value="light" />
                                <label className="form-check-label p-0 w-100" for="layout-sidenav-color-light">
                                    <img src="assets/images/layouts/sidenav-color-light.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="fs-sm text-center text-muted mt-2 mb-0">Light</h5>
                        </div>

                        <div className="col-4" id="sidenav-color-dark">
                            <div className="form-check sidebar-setting card-radio">
                                <input className="form-check-input" type="radio" name="data-menu-color" id="layout-sidenav-color-dark" value="dark" />
                                <label className="form-check-label p-0 w-100" for="layout-sidenav-color-dark">
                                    <img src="assets/images/layouts/sidenav-color-dark.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="fs-sm text-center text-muted mt-2 mb-0">Dark</h5>
                        </div>

                        <div className="col-4" id="sidenav-color-gray">
                            <div className="form-check sidebar-setting card-radio">
                                <input className="form-check-input" type="radio" name="data-menu-color" id="layout-sidenav-color-gray" value="gray" />
                                <label className="form-check-label p-0 w-100" for="layout-sidenav-color-gray">
                                    <img src="assets/images/layouts/sidenav-color-gray.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="fs-sm text-center text-muted mt-2 mb-0">Gray</h5>
                        </div>

                        <div className="col-4" id="sidenav-color-gradient">
                            <div className="form-check sidebar-setting card-radio">
                                <input className="form-check-input" type="radio" name="data-menu-color" id="layout-sidenav-color-gradient" value="gradient" />
                                <label className="form-check-label p-0 w-100" for="layout-sidenav-color-gradient">
                                    <img src="assets/images/layouts/sidenav-color-gradient.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="fs-sm text-center text-muted mt-2 mb-0">Gradient</h5>
                        </div>
                        <div className="col-4" id="sidenav-color-image">
                            <div className="form-check sidebar-setting card-radio">
                                <input className="form-check-input" type="radio" name="data-menu-color" id="layout-sidenav-color-image" value="image" />
                                <label className="form-check-label p-0 w-100" for="layout-sidenav-color-image">
                                    <img src="assets/images/layouts/sidenav-color-image.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="fs-sm text-center text-muted mt-2 mb-0">Image</h5>
                        </div>
                    </div>
                </div>

                <div id="sidenav-size" className="p-3 border-bottom border-dashed">
                    <h5 className="mb-3 fw-bold">Sidebar Size</h5>

                    <div className="row g-3">
                        <div className="col-4" id="sidenav-size-default">
                            <div className="form-check sidebar-setting card-radio">
                                <input className="form-check-input" type="radio" name="data-sidenav-size" id="layout-sidenav-size-default" value="default" />
                                <label className="form-check-label p-0 w-100" for="layout-sidenav-size-default">
                                    <img src="assets/images/layouts/sidenav-size-default.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="mb-0 text-center text-muted mt-2">Default</h5>
                        </div>

                        <div className="col-4" id="sidenav-size-compact">
                            <div className="form-check sidebar-setting card-radio">
                                <input className="form-check-input" type="radio" name="data-sidenav-size" id="layout-sidenav-size-compact" value="compact" />
                                <label className="form-check-label p-0 w-100" for="layout-sidenav-size-compact">
                                    <img src="assets/images/layouts/sidenav-size-compact.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="mb-0 text-center text-muted mt-2">Compact</h5>
                        </div>

                        <div className="col-4" id="sidenav-size-condensed">
                            <div className="form-check sidebar-setting card-radio">
                                <input className="form-check-input" type="radio" name="data-sidenav-size" id="layout-sidenav-size-condensed" value="condensed" />
                                <label className="form-check-label p-0 w-100" for="layout-sidenav-size-condensed">
                                    <img src="assets/images/layouts/sidenav-size-condensed.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="mb-0 text-center text-muted mt-2">Condensed</h5>
                        </div>

                        <div className="col-4" id="sidenav-size-on-hover">
                            <div className="form-check sidebar-setting card-radio">
                                <input className="form-check-input" type="radio" name="data-sidenav-size" id="layout-sidenav-size-small-hover" value="on-hover" />
                                <label className="form-check-label p-0 w-100" for="layout-sidenav-size-small-hover">
                                    <img src="assets/images/layouts/sidenav-size-on-hover.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="mb-0 text-center text-muted mt-2">On Hover</h5>
                        </div>

                        <div className="col-4" id="sidenav-size-on-hover-active">
                            <div className="form-check sidebar-setting card-radio">
                                <input className="form-check-input" type="radio" name="data-sidenav-size" id="layout-sidenav-size-small-hover-active" value="on-hover-active" />
                                <label className="form-check-label p-0 w-100" for="layout-sidenav-size-small-hover-active">
                                    <img src="assets/images/layouts/sidenav-size-on-hover-active.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="mb-0 fs-base text-center text-muted mt-2">On Hover - Show</h5>
                        </div>

                        <div className="col-4" id="sidenav-size-offcanvas">
                            <div className="form-check sidebar-setting card-radio">
                                <input className="form-check-input" type="radio" name="data-sidenav-size" id="layout-sidenav-size-offcanvas" value="offcanvas" />
                                <label className="form-check-label p-0 w-100" for="layout-sidenav-size-offcanvas">
                                    <img src="assets/images/layouts/sidenav-size-offcanvas.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="mb-0 text-center text-muted mt-2">Offcanvas</h5>
                        </div>
                    </div>
                </div>

                <div id="width" className="p-3 border-bottom border-dashed">
                    <h5 className="mb-3 fw-bold">Layout Width</h5>

                    <div className="row g-3">
                        <div className="col-4" id="width-fluid">
                            <div className="form-check sidebar-setting card-radio">
                                <input className="form-check-input" type="radio" name="data-layout-width" id="layout-width-fluid" value="fluid" />
                                <label className="form-check-label p-0 w-100" for="layout-width-fluid">
                                    <img src="assets/images/layouts/width-fluid.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="mb-0 text-center text-muted mt-2">Fluid</h5>
                        </div>

                        <div className="col-4" id="width-boxed">
                            <div className="form-check sidebar-setting card-radio">
                                <input className="form-check-input" type="radio" name="data-layout-width" id="layout-width-boxed" value="boxed" />
                                <label className="form-check-label p-0 w-100" for="layout-width-boxed">
                                    <img src="assets/images/layouts/width-boxed.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="mb-0 text-center text-muted mt-2">Boxed</h5>
                        </div>
                    </div>
                </div>

                <div id="dir" className="p-3 border-bottom border-dashed">
                    <h5 className="mb-3 fw-bold">Layout Direction</h5>

                    <div className="row g-3">
                        <div className="col-4" id="dir-ltr">
                            <div className="form-check sidebar-setting card-radio">
                                <input className="form-check-input" type="radio" name="dir" id="layout-dir-ltr" value="ltr" />
                                <label className="form-check-label p-0 w-100" for="layout-dir-ltr">
                                    <img src="assets/images/layouts/dir-ltr.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="mb-0 text-center text-muted mt-2">LTR</h5>
                        </div>

                        <div className="col-4" id="dir-rtl">
                            <div className="form-check sidebar-setting card-radio">
                                <input className="form-check-input" type="radio" name="dir" id="layout-dir-rtl" value="rtl" />
                                <label className="form-check-label p-0 w-100" for="layout-dir-rtl">
                                    <img src="assets/images/layouts/dir-rtl.png" alt="layout-img" className="img-fluid" />
                                </label>
                            </div>
                            <h5 className="mb-0 text-center text-muted mt-2">RTL</h5>
                        </div>
                    </div>
                </div>

                <div id="position" className="p-3 border-bottom border-dashed">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="fw-bold mb-0">Layout Position</h5>

                        <div className="d-flex gap-1">
                            <div id="position-fixed">
                                <input type="radio" className="btn-check" name="data-layout-position" id="layout-position-fixed" value="fixed" />
                                <label className="btn btn-sm btn-soft-warning w-sm" for="layout-position-fixed">Fixed</label>
                            </div>
                            <div id="position-scrollable">
                                <input type="radio" className="btn-check" name="data-layout-position" id="layout-position-scrollable" value="scrollable" />
                                <label className="btn btn-sm btn-soft-warning w-sm ms-0" for="layout-position-scrollable">Scrollable</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="sidenav-user" className="p-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">
                            <label className="fw-bold m-0" for="sidebaruser-check">Sidebar User Info</label>
                        </h5>
                        <div className="form-check form-switch fs-lg">
                            <input type="checkbox" className="form-check-input" name="sidebar-user" id="sidebaruser-check" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas-footer border-top p-3 text-center">
                <div className="row justify-content-end">
                    <div className="col-6">
                        <a href="#" className="btn btn-success fw-semibold py-2 w-100" target="_blank"><i className="ti ti-basket me-2 fs-md"></i> Buy Now</a>
                    </div>
                    <div className="col-6">
                        <button type="button" className="btn btn-danger fw-semibold py-2 w-100" id="reset-layout"><i className="ti ti-refresh me-2 fs-md"></i> Reset</button>
                    </div>
                </div>
            </div>
        </div>
<script src="assets/js/vendors.min.js"></script>

<script src="assets/js/app.js"></script>


        <script src="assets/plugins/apexcharts/apexcharts.min.js"></script>

        <script src="assets/js/pages/custom-table.js"></script>

        <script src="assets/js/pages/ecommerce-reviews.js"></script>
    </div>
  )
}

export default Reviews
