import React from "react";
// import Sidebar from '../../components/Sidebar'

function Projects() {
  return (
    <div>
        <div className="wrapper">

            <div className="content-page">
                <div className="container-fluid">
                    <div className="page-title-head d-flex align-items-center">
                        <div className="flex-grow-1">
                            <h4 className="page-main-title m-0">Projects</h4>
                        </div>

                        <div className="text-end">
                            <ol className="breadcrumb m-0 py-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Paces</a></li>
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                                <li className="breadcrumb-item active">Projects</li>
                            </ol>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-xxl-9">
                            <div className="card">
                                <div className="card-body p-0">
                                    <div className="row row-cols-xxl-5 row-cols-md-3 row-cols-1 g-0 text-center align-items-center">
                                        <div className="col border-end border-light border-dashed">
                                            <div className="mt-3 mt-md-0 p-3">
                                                <h5 className="text-muted fs-13 text-uppercase" title="Number of Orders">Total Projects</h5>
                                                <div className="d-flex align-items-center justify-content-center gap-2 my-3">
                                                    <div className="avatar-sm flex-shrink-0">
                                                        <span className="avatar-title bg-secondary-subtle text-secondary rounded-circle fs-22">
                                                            <i className="ti ti-briefcase"></i>
                                                        </span>
                                                    </div>
                                                    <h3 className="mb-0 fw-bold"><span data-target="6,847">0</span></h3>
                                                </div>
                                                <p className="mb-0 text-muted">
                                                    <span className="text-danger me-2"><i className="ti ti-chevron-down"></i> 9.19%</span>
                                                    <span className="text-nowrap">Since last month</span>
                                                </p>
                                            </div>
                                        </div>
                                    
                                        <div className="col border-end border-light border-dashed">
                                            <div className="mt-3 mt-md-0 p-3">
                                                <h5 className="text-muted fs-13 text-uppercase" title="Number of Orders">Total Tasks</h5>
                                                <div className="d-flex align-items-center justify-content-center gap-2 my-3">
                                                    <div className="avatar-sm flex-shrink-0">
                                                        <span className="avatar-title bg-primary-subtle text-primary rounded-circle fs-22">
                                                            <i className="ti ti-invoice"></i>
                                                        </span>
                                                    </div>
                                                    <h3 className="mb-0 fw-bold"><span data-target="9.6">0</span>k</h3>
                                                </div>
                                                <p className="mb-0 text-muted">
                                                    <span className="text-success me-2"><i className="ti ti-chevron-up"></i> 26.87%</span>
                                                    <span className="text-nowrap">Since last month</span>
                                                </p>
                                            </div>
                                        </div>
                    
                                        <div className="col border-end border-light border-dashed">
                                            <div className="mt-3 mt-md-0 p-3">
                                                <h5 className="text-muted fs-13 text-uppercase" title="Number of Orders">Avg. Project Earnings</h5>
                                                <div className="d-flex align-items-center justify-content-center gap-2 my-3">
                                                    <div className="avatar-sm flex-shrink-0">
                                                        <span className="avatar-title bg-warning-subtle text-warning rounded-circle fs-22">
                                                            <i className="ti ti-wallet"></i>
                                                        </span>
                                                    </div>
                                                    <h3 className="mb-0 fw-bold">$<span data-target="98.24">0</span>k</h3>
                                                </div>
                                                <p className="mb-0 text-muted">
                                                    <span className="text-success me-2"><i className="ti ti-chevron-up"></i> 3.51%</span>
                                                    <span className="text-nowrap">Since last month</span>
                                                </p>
                                            </div>
                                        </div>
                        
                                        <div className="col border-end border-light border-dashed">
                                            <div className="mt-3 mt-md-0 p-3">
                                                <h5 className="text-muted fs-13 text-uppercase" title="Number of Orders">Productivity</h5>
                                                <div className="d-flex align-items-center justify-content-center gap-2 my-3">
                                                    <div className="avatar-sm flex-shrink-0">
                                                        <span className="avatar-title bg-success-subtle text-success rounded-circle fs-22">
                                                            <i className="ti ti-trending-up"></i>
                                                        </span>
                                                    </div>
                                                    <h3 className="mb-0 fw-bold"><span data-target="87.84">0</span>%</h3>
                                                </div>
                                                <p className="mb-0 text-muted">
                                                    <span className="text-danger me-2"> <i className="ti ti-chevron-down"></i> 1.05%</span>
                                                    <span className="text-nowrap">Since last month</span>
                                                </p>
                                            </div>
                                        </div>
                        
                                        <div className="col">
                                            <div className="mt-3 mt-md-0 p-3">
                                                <h5 className="text-muted fs-13 text-uppercase" title="Number of Orders">Today's Hours</h5>
                                                <div className="d-flex align-items-center justify-content-center gap-2 my-3">
                                                    <div className="avatar-sm flex-shrink-0">
                                                        <span className="avatar-title bg-info-subtle text-info rounded-circle fs-22">
                                                            <i className="ti ti-clock"></i>
                                                        </span>
                                                    </div>
                                                    <h3 className="mb-0 fw-bold"><span id="tracker-time">05:30:57</span></h3>
                                                </div>
                                                <button type="button" className="btn btn-sm btn-info time-tracker-btn fw-semibold w-100">Start Tracker</button>
                                            </div>
                                        </div>
                        
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="card card-h-100">
                                        <div className="card-header justify-content-between">
                                            <h4 className="card-title">Project Status Breakdown</h4>
                                            <div className="dropdown ms-auto">
                                                <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                                    <i className="ti ti-dots-vertical fs-lg"></i>
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                        <a className="dropdown-item" href="#"> <i className="ti ti-eye me-2"></i> View All Status Details </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#"> <i className="ti ti-filter-2 me-2"></i> Filter by Status </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#"> <i className="ti ti-calendar me-2"></i> Change Date Range </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#"> <i className="ti ti-download me-2"></i> Export Breakdown </a>
                                                    </li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li>
                                                        <a className="dropdown-item text-danger" href="#"> <i className="ti ti-refresh me-2"></i> Reset Status View </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="card-body pt-0">
                                            <div id="project-status-chart" className="apex-charts"></div>

                                            <div className="row mt-2">
                                                <div className="col">
                                                    <div className="d-flex justify-content-between align-items-center p-1">
                                                        <div>
                                                            <i className="ti ti-circle-filled fs-12 align-middle me-1 text-secondary"></i>
                                                            <span className="align-middle fw-semibold">Completed</span>
                                                        </div>
                                                        <span className="fw-semibold text-muted float-end"><i className="ti ti-chevron-down text-danger"></i> 965</span>
                                                    </div>

                                                    <div className="d-flex justify-content-between align-items-center p-1">
                                                        <div>
                                                            <i className="ti ti-circle-filled fs-12 align-middle me-1 text-warning"></i>
                                                            <span className="align-middle fw-semibold">In Progress</span>
                                                        </div>
                                                        <span className="fw-semibold text-muted float-end"><i className="ti ti-chevron-up text-success"></i> 75</span>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="d-flex justify-content-between align-items-center p-1">
                                                        <div>
                                                            <i className="ti ti-circle-filled fs-12 align-middle me-1 text-secondary"></i>
                                                            <span className="align-middle fw-semibold"> Yet to Start</span>
                                                        </div>
                                                        <span className="fw-semibold text-muted float-end"><i className="ti ti-chevron-up text-success"></i> 102</span>
                                                    </div>

                                                    <div className="d-flex justify-content-between align-items-center p-1">
                                                        <div>
                                                            <i className="ti ti-circle-filled fs-12 align-middle me-1 text-danger"></i>
                                                            <span className="align-middle fw-semibold">Cancelled</span>
                                                        </div>
                                                        <span className="fw-semibold text-muted float-end"><i className="ti ti-chevron-down text-danger"></i> 96</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="card card-h-100">
                                        <div className="card-header justify-content-between">
                                            <h4 className="card-title">Projects Performance Overview</h4>
                                            <div className="dropdown ms-auto">
                                                <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                                    <i className="ti ti-dots-vertical fs-lg"></i>
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                        <a className="dropdown-item" href="#"> <i className="ti ti-chart-histogram me-2"></i> View Detailed Report </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#"> <i className="ti ti-filter-2 me-2"></i> Filter by Project </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#"> <i className="ti ti-calendar me-2"></i> Select Date Range </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#"> <i className="ti ti-download me-2"></i> Export as CSV </a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item text-danger" href="#"> <i className="ti ti-refresh me-2"></i> Reset Analytics </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="row text-center g-2">
                                                <div className="col">
                                                    <div className="border bg-light-subtle border-dashed border-light p-2 rounded">
                                                        <h4><span data-target="7,845">0</span></h4>
                                                        <p className="mb-0 text-muted">Number of Projects</p>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="border bg-light-subtle border-dashed border-light p-2 rounded">
                                                        <h4><span data-target="289">0</span></h4>
                                                        <p className="mb-0 text-muted">Active Projects</p>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="border bg-light-subtle border-dashed border-light p-2 rounded">
                                                        <h4>$<span data-target="982.5">0</span>k</h4>
                                                        <p className="mb-0 text-muted">Revenue</p>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="border bg-light-subtle border-dashed border-light p-2 rounded">
                                                        <h4>~<span data-target="12,559">0</span>h</h4>
                                                        <p className="mb-0 text-muted">Working Hours</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div dir="ltr">
                                                <div id="dash-projects-overviews" className="apex-charts"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-3">
                            <div className="card">
                                <div className="card-body">
                                    <input type="text" className="form-control card-calendar-widget" data-provider="flatpickr" data-date-format="d M, Y" data-default-date="today" data-inline-date="true" />

                                    <h4 className="card-title fs-sm my-3">Today's Schedule: <a href="#!" className="float-end fs-sm">View All</a></h4>
                                    <ul className="list-unstyled mt-1 mb-0">
                                        <li className="mb-3">
                                            <div className="d-flex gap-2 align-items-center">
                                                <div className="avatar-sm">
                                                    <span className="avatar-title bg-soft-primary rounded-circle fs-22 text-primary rounded">
                                                        <i className="ti ti-briefcase"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="text-muted mb-1 fs-13"><i className="ti ti-calendar"></i> 08:00 AM - 09:30 AM</p>
                                                    <h5 className="m-0 fs-14">Project Kickoff Meeting</h5>
                                                </div>
                                                <div className="ms-auto">
                                                    <button type="button" className="btn btn-sm btn-default btn-icon"><i className="ti ti-x fs-md"></i></button>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="mb-3">
                                            <div className="d-flex gap-2 align-items-center">
                                                <div className="avatar-sm">
                                                    <span className="avatar-title bg-soft-info rounded-circle fs-22 text-info rounded">
                                                        <i className="ti ti-brand-figma"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="text-muted mb-1 fs-13"><i className="ti ti-calendar"></i> 10:00 AM - 11:15 AM</p>
                                                    <h5 className="m-0 fs-14">UI/UX Review Session</h5>
                                                </div>
                                                <div className="ms-auto">
                                                    <button type="button" className="btn btn-sm btn-default btn-icon"><i className="ti ti-x fs-md"></i></button>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="d-flex gap-2 align-items-center">
                                                <div className="avatar-sm">
                                                    <span className="avatar-title bg-soft-secondary rounded-circle fs-22 text-secondary rounded">
                                                        <i className="ti ti-users"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="text-muted mb-1 fs-13"><i className="ti ti-calendar"></i> 04:00 PM - 05:30 PM</p>
                                                    <h5 className="m-0 fs-14">Team Collaboration Session</h5>
                                                </div>
                                                <div className="ms-auto">
                                                    <button type="button" className="btn btn-sm btn-default btn-icon"><i className="ti ti-x fs-md"></i></button>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="text-center mt-3">
                                        <a href="#!" className="btn btn-sm btn-primary"><i className="ti ti-plus me-1"></i> Add New</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6">
                            <div data-table data-table-rows-per-page="5" className="card">
                                <div className="card-header border-light justify-content-between">
                                    <h4 className="card-title">Ongoing Projects</h4>

                                    <div className="d-flex align-items-center gap-2">
                
                                        <div className="app-search">
                                            <input data-table-search type="text" className="form-control" placeholder="Search project..." />
                                            <i className="ti ti-search app-search-icon text-muted"></i>
                                        </div>

                                    
                                        <div>
                                            <select data-table-set-rows-per-page className="form-select form-control my-1 my-md-0">
                                                <option value="5">5 rows</option>
                                                <option value="10" selected>10 rows</option>
                                                <option value="15">15 rows</option>
                                                <option value="20">20 rows</option>
                                                <option value="50">50 rows</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-light bg-opacity-25 p-2 text-center border-bottom border-dashed">
                                    <p className="m-0"><b>31</b> Active projects out of <span className="fw-medium">958</span></p>
                                </div>

                                <div className="table-responsive">
                                    <table className="table table-custom table-nowrap table-centered table-hover w-100 mb-0">
                                        <tbody>
                                
                                            <tr>
                                                <td>
                                                    <span className="text-muted fs-12">Google</span>
                                                    <h5 className="fs-base mb-0"><a href="javascript:void(0);" className="text-body">New Dashboard</a></h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Deadline</span> <br />
                                                    <h5 className="fs-base mb-0 fw-normal">17 Aug, 26</h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Budget</span>
                                                    <h5 className="fs-base mb-0 fw-normal">$8,950</h5>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="assets/images/users/user-2.jpg" alt="" className="avatar-sm rounded-circle me-2" />
                                                        <div>
                                                            <span className="text-muted fs-12">UI/UX Team</span>
                                                            <h5 className="fs-base mb-0 fw-normal">Sean Kemper</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Status</span>
                                                    <h5 className="fs-base mb-0 fw-normal"><i className="ti ti-circle fs-12 text-info"></i> Early Stage</h5>
                                                </td>
                                                <td style="width: 30px">
                                                    <div className="dropdown">
                                                        <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                                            <i className="ti ti-dots-vertical fs-lg"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a href="javascript:void(0);" className="dropdown-item">View Project</a>
                                                            <a href="javascript:void(0);" className="dropdown-item">Edit Project</a>
                                                            <a href="javascript:void(0);" className="dropdown-item">Archive Project</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                        
                                            <tr>
                                                <td>
                                                    <span className="text-muted fs-12">Microsoft</span>
                                                    <h5 className="fs-base mb-0"><a href="javascript:void(0);" className="text-body">Azure Migration</a></h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Deadline</span><br />
                                                    <h5 className="fs-base mb-0 fw-normal">05 Sep, 26</h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Budget</span>
                                                    <h5 className="fs-base mb-0 fw-normal">$12,500</h5>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="assets/images/users/user-3.jpg" alt="" className="avatar-sm rounded-circle me-2" />
                                                        <div>
                                                            <span className="text-muted fs-12">Cloud Team</span>
                                                            <h5 className="fs-base mb-0 fw-normal">Emily Carter</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Status</span>
                                                    <h5 className="fs-base mb-0 fw-normal"><i className="ti ti-circle fs-12 text-warning"></i> In Progress</h5>
                                                </td>
                                                <td style="width: 30px">
                                                    <div className="dropdown">
                                                        <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                                            <i className="ti ti-dots-vertical fs-lg"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">View Project</a>
                                                            <a className="dropdown-item" href="#">Edit Project</a>
                                                            <a className="dropdown-item" href="#">Archive Project</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                    
                                            <tr>
                                                <td>
                                                    <span className="text-muted fs-12">Amazon</span>
                                                    <h5 className="fs-base mb-0"><a href="#" className="text-body">E-Commerce Redesign</a></h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Deadline</span><br />
                                                    <h5 className="fs-base mb-0 fw-normal">29 Oct, 26</h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Budget</span>
                                                    <h5 className="fs-base mb-0 fw-normal">$18,200</h5>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="assets/images/users/user-4.jpg" className="avatar-sm rounded-circle me-2" alt="" />
                                                        <div>
                                                            <span className="text-muted fs-12">Frontend Team</span>
                                                            <h5 className="fs-base mb-0 fw-normal">Jacob Wilson</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Status</span>
                                                    <h5 className="fs-base mb-0 fw-normal"><i className="ti ti-circle fs-12 text-success"></i> On Track</h5>
                                                </td>
                                                <td style="width: 30px">
                                                    <div className="dropdown">
                                                        <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                                            <i className="ti ti-dots-vertical fs-lg"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">View Project</a>
                                                            <a className="dropdown-item" href="#">Edit Project</a>
                                                            <a className="dropdown-item" href="#">Archive Project</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                
                                            <tr>
                                                <td>
                                                    <span className="text-muted fs-12">Spotify</span>
                                                    <h5 className="fs-base mb-0"><a href="#" className="text-body">Music Analytics Tool</a></h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Deadline</span><br />
                                                    <h5 className="fs-base mb-0 fw-normal">11 Nov, 26</h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Budget</span>
                                                    <h5 className="fs-base mb-0 fw-normal">$9,750</h5>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="assets/images/users/user-5.jpg" className="avatar-sm rounded-circle me-2" />
                                                        <div>
                                                            <span className="text-muted fs-12">Analytics Team</span>
                                                            <h5 className="fs-base mb-0 fw-normal">Laura Chen</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Status</span>
                                                    <h5 className="fs-base mb-0 fw-normal"><i className="ti ti-circle fs-12 text-danger"></i> Delayed</h5>
                                                </td>
                                                <td style="width: 30px">
                                                    <div className="dropdown">
                                                        <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                                            <i className="ti ti-dots-vertical fs-lg"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">View Project</a>
                                                            <a className="dropdown-item" href="#">Edit Project</a>
                                                            <a className="dropdown-item" href="#">Archive Project</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                        
                                            <tr>
                                                <td>
                                                    <span className="text-muted fs-12">Tesla</span>
                                                    <h5 className="fs-base mb-0"><a href="#" className="text-body">EV Monitoring System</a></h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Deadline</span><br />
                                                    <h5 className="fs-base mb-0 fw-normal">06 Dec, 26</h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Budget</span>
                                                    <h5 className="fs-base mb-0 fw-normal">$21,300</h5>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="assets/images/users/user-6.jpg" className="avatar-sm rounded-circle me-2" />
                                                        <div>
                                                            <span className="text-muted fs-12">Tech Team</span>
                                                            <h5 className="fs-base mb-0 fw-normal">Daniel Foster</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Status</span>
                                                    <h5 className="fs-base mb-0 fw-normal"><i className="ti ti-circle fs-12 text-success"></i> On Schedule</h5>
                                                </td>
                                                <td style="width: 30px">
                                                    <div className="dropdown">
                                                        <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                                            <i className="ti ti-dots-vertical fs-lg"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">View Project</a>
                                                            <a className="dropdown-item" href="#">Edit Project</a>
                                                            <a className="dropdown-item" href="#">Archive Project</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                            
                                            <tr>
                                                <td>
                                                    <span className="text-muted fs-12">Meta</span>
                                                    <h5 className="fs-base mb-0"><a href="#" className="text-body">Social Feed Optimization</a></h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Deadline</span><br />
                                                    <h5 className="fs-base mb-0 fw-normal">21 Jan, 26</h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Budget</span>
                                                    <h5 className="fs-base mb-0 fw-normal">$14,680</h5>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="assets/images/users/user-7.jpg" className="avatar-sm rounded-circle me-2" />
                                                        <div>
                                                            <span className="text-muted fs-12">AI Team</span>
                                                            <h5 className="fs-base mb-0 fw-normal">Chloe Martin</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Status</span>
                                                    <h5 className="fs-base mb-0 fw-normal"><i className="ti ti-circle fs-12 text-info"></i> Planning</h5>
                                                </td>
                                                <td style="width: 30px">
                                                    <div className="dropdown">
                                                        <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                                            <i className="ti ti-dots-vertical fs-lg"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">View Project</a>
                                                            <a className="dropdown-item" href="#">Edit Project</a>
                                                            <a className="dropdown-item" href="#">Archive Project</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="card-footer border-0">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div data-table-pagination-info="projects"></div>

                                        <div data-table-pagination></div>
                                    </div>
                                </div>
                            </div>
                        </div>
    

                        <div className="col-xxl-6">
                            <div data-table data-table-rows-per-page="5" className="card">
                                <div className="card-header border-light justify-content-between">
                                    <h4 className="card-title">Tasks</h4>

                                    <div className="d-flex align-items-center gap-2">
                                    
                                        <div className="app-search">
                                            <input data-table-search type="text" className="form-control" placeholder="Search task..." />
                                            <i className="ti ti-search app-search-icon text-muted"></i>
                                        </div>

                            
                                        <div>
                                            <select data-table-set-rows-per-page className="form-select form-control my-1 my-md-0">
                                                <option value="5">5 rows</option>
                                                <option value="10" selected>10 rows</option>
                                                <option value="15">15 rows</option>
                                                <option value="20">20 rows</option>
                                                <option value="50">50 rows</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-light bg-opacity-25 p-2 text-center border-bottom border-dashed">
                                    <p className="m-0"><b>107</b> Tasks completed out of <span className="fw-medium">195</span></p>
                                </div>

                                <div className="table-responsive">
                                    <table className="table table-custom table-nowrap table-centered table-hover w-100 mb-0">
                                        <tbody>
                                            
                                            <tr>
                                                <td>
                                                    <span className="text-muted fs-12">Due in 2 days</span>
                                                    <h5 className="fs-base mb-0">
                                                        <a href="javascript:void(0);" className="text-body">Fix Homepage Layout Issues</a>
                                                    </h5>
                                                </td>

                                                <td>
                                                    <span className="text-muted fs-12">Due Date</span><br />
                                                    <h5 className="fs-base mb-0 fw-normal">14 Sep, 26</h5>
                                                </td>

                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="assets/images/users/user-5.jpg" className="avatar-sm rounded-circle me-2" />
                                                        <div>
                                                            <span className="text-muted fs-12">Assigned To</span>
                                                            <h5 className="fs-base mb-0 fw-normal">Mia Turner</h5>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td>
                                                    <span className="text-muted fs-12">Status</span>
                                                    <h5 className="fs-base mb-0 fw-normal">
                                                        <span className="badge badge-soft-info">In Progress</span>
                                                    </h5>
                                                </td>

                                                <td>
                                                    <span className="text-muted fs-12">Total time spent</span>
                                                    <h5 className="fs-base mb-0 fw-normal">1h 45min</h5>
                                                </td>

                                                <td style="width: 30px">
                                                    <div className="dropdown">
                                                        <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                                            <i className="ti ti-dots-vertical fs-lg"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">View Task</a>
                                                            <a className="dropdown-item" href="#">Edit Task</a>
                                                            <a className="dropdown-item" href="#">Mark as Completed</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <span className="text-muted fs-12">Due in 1 day</span>
                                                    <h5 className="fs-base mb-0"><a href="javascript:void(0);" className="text-body">Update User Profile API</a></h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Due Date</span><br />
                                                    <h5 className="fs-base mb-0 fw-normal">15 Sep, 26</h5>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="assets/images/users/user-6.jpg" className="avatar-sm rounded-circle me-2" />
                                                        <div>
                                                            <span className="text-muted fs-12">Assigned To</span>
                                                            <h5 className="fs-base mb-0 fw-normal">Oliver Knight</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Status</span>
                                                    <h5 className="fs-base mb-0 fw-normal"><span className="badge badge-soft-success">Completed</span></h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Total time spent</span>
                                                    <h5 className="fs-base mb-0 fw-normal">4h 10min</h5>
                                                </td>
                                                <td style="width: 30px">
                                                    <div className="dropdown">
                                                        <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                                            <i className="ti ti-dots-vertical fs-lg"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">View Task</a>
                                                            <a className="dropdown-item" href="#">Edit Task</a>
                                                            <a className="dropdown-item" href="#">Mark as Completed</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="text-muted fs-12">Due in 5 days</span>
                                                    <h5 className="fs-base mb-0"><a href="javascript:void(0);" className="text-body">Create Dashboard Widgets</a></h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Due Date</span><br />
                                                    <h5 className="fs-base mb-0 fw-normal">19 Sep, 26</h5>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="assets/images/users/user-7.jpg" className="avatar-sm rounded-circle me-2" />
                                                        <div>
                                                            <span className="text-muted fs-12">Assigned To</span>
                                                            <h5 className="fs-base mb-0 fw-normal">Sofia Reed</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Status</span>
                                                    <h5 className="fs-base mb-0 fw-normal"><span className="badge badge-soft-warning">Pending</span></h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Total time spent</span>
                                                    <h5 className="fs-base mb-0 fw-normal">0h 00min</h5>
                                                </td>
                                                <td style="width: 30px">
                                                    <div className="dropdown">
                                                        <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                                            <i className="ti ti-dots-vertical fs-lg"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">View Task</a>
                                                            <a className="dropdown-item" href="#">Edit Task</a>
                                                            <a className="dropdown-item" href="#">Mark as Completed</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="text-muted fs-12">Due in 7 days</span>
                                                    <h5 className="fs-base mb-0"><a href="javascript:void(0);" className="text-body">Fix Login Authentication Bug</a></h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Due Date</span><br />
                                                    <h5 className="fs-base mb-0 fw-normal">21 Sep, 26</h5>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="assets/images/users/user-8.jpg" className="avatar-sm rounded-circle me-2" />
                                                        <div>
                                                            <span className="text-muted fs-12">Assigned To</span>
                                                            <h5 className="fs-base mb-0 fw-normal">Henry Adams</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Status</span>
                                                    <h5 className="fs-base mb-0 fw-normal"><span className="badge badge-soft-danger">Blocked</span></h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Total time spent</span>
                                                    <h5 className="fs-base mb-0 fw-normal">1h 05min</h5>
                                                </td>
                                                <td style="width: 30px">
                                                    <div className="dropdown">
                                                        <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                                            <i className="ti ti-dots-vertical fs-lg"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">View Task</a>
                                                            <a className="dropdown-item" href="#">Edit Task</a>
                                                            <a className="dropdown-item" href="#">Mark as Completed</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="text-muted fs-12">Due today</span>
                                                    <h5 className="fs-base mb-0"><a href="javascript:void(0);" className="text-body">Write Release Notes for v2.1</a></h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Due Date</span><br />
                                                    <h5 className="fs-base mb-0 fw-normal">14 Sep, 26</h5>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="assets/images/users/user-9.jpg" className="avatar-sm rounded-circle me-2" />
                                                        <div>
                                                            <span className="text-muted fs-12">Assigned To</span>
                                                            <h5 className="fs-base mb-0 fw-normal">Chloe Martin</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Status</span>
                                                    <h5 className="fs-base mb-0 fw-normal"><span className="badge badge-soft-primary">Reviewing</span></h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Total time spent</span>
                                                    <h5 className="fs-base mb-0 fw-normal">45min</h5>
                                                </td>
                                                <td style="width: 30px">
                                                    <div className="dropdown">
                                                        <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                                            <i className="ti ti-dots-vertical fs-lg"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">View Task</a>
                                                            <a className="dropdown-item" href="#">Edit Task</a>
                                                            <a className="dropdown-item" href="#">Mark as Completed</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="text-muted fs-12">Due in 4 days</span>
                                                    <h5 className="fs-base mb-0"><a href="javascript:void(0);" className="text-body">Design New Notification Icons</a></h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Due Date</span><br />
                                                    <h5 className="fs-base mb-0 fw-normal">18 Sep, 26</h5>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="assets/images/users/user-10.jpg" className="avatar-sm rounded-circle me-2" />
                                                        <div>
                                                            <span className="text-muted fs-12">Assigned To</span>
                                                            <h5 className="fs-base mb-0 fw-normal">Victoria Mills</h5>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Status</span>
                                                    <h5 className="fs-base mb-0 fw-normal"><span className="badge badge-soft-success">Completed</span></h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">Total time spent</span>
                                                    <h5 className="fs-base mb-0 fw-normal">2h 30min</h5>
                                                </td>
                                                <td style="width: 30px">
                                                    <div className="dropdown">
                                                        <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                                            <i className="ti ti-dots-vertical fs-lg"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">View Task</a>
                                                            <a className="dropdown-item" href="#">Edit Task</a>
                                                            <a className="dropdown-item" href="#">Mark as Completed</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="card-footer border-0">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div data-table-pagination-info="tasks"></div>

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

        <script src="assets/js/pages/dashboard-projects.js"></script>
    </div>
  )
}

export default Projects;
