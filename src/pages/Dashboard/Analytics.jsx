import React from 'react'
import Sidebar from '../../components/Sidebar'

function Analytics() {
  return (

    <>
    {/* <Sidebar /> */}
    <div>
         <div className="wrapper">

            <div className="content-page">
                <div className="container-fluid">
                    <div className="page-title-head d-flex align-items-center">
                        <div className="flex-grow-1">
                            <h4 className="page-main-title m-0">Analytics</h4>
                        </div>

                        <div className="text-end">
                            <ol className="breadcrumb m-0 py-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Paces</a></li>
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                                <li className="breadcrumb-item active">Analytics</li>
                            </ol>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-xxl-4 col-xl-6">
                            <div className="card card-h-100">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start flex-wrap">
                                        <div>
                                            <h4 className="fs-13 mb-2 fw-bold text-uppercase text-muted">Total Orders</h4>
                                            <div className="d-flex align-items-center gap-2 mb-2 py-1">
                                                <div className="avatar-md flex-shrink-0">
                                                    <span className="avatar-title text-bg-success rounded-circle">
                                                        <i className="ti ti-basket fs-xxl"></i>
                                                    </span>
                                                </div>
                                                <h3 className="mb-0">$<span data-target="659.8">0</span>k</h3>
                                                <span className="badge fs-13 ms-auto badge-soft-danger"><i className="ti ti-arrow-down"></i> 3.21%</span>
                                            </div>
                                        </div>
                                      
                                        <div className="app-search app-search-sm">
                                            <select className="form-select form-control form-select-sm">
                                                <option value="All">All Time</option>
                                                <option value="today">Today</option>
                                                <option value="last_7_days">Last 7 Days</option>
                                                <option value="last_30_days">Last 30 Days</option>
                                                <option value="last_90_days" selected>Last 90 Days</option>
                                                <option value="this_month">This Month</option>
                                                <option value="last_month">Last Month</option>
                                            </select>
                                            <i className="ti ti-calendar app-search-icon text-muted"></i>
                                        </div>
                                    </div>

                                    <div className="row align-items-center">
                                        <div className="col-12">
                                            <div dir="ltr">
                                                <div id="total-orders-chart" className="apex-charts"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-4 col-xl-6">
                            <div className="card card-h-100">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start flex-wrap">
                                        <div>
                                            <h4 className="fs-13 mb-2 fw-bold text-uppercase text-muted">Total Visitors</h4>
                                            <div className="d-flex align-items-center gap-2 mb-2 py-1">
                                                <div className="avatar-md flex-shrink-0">
                                                    <span className="avatar-title text-bg-secondary rounded-circle">
                                                        <i className="ti ti-eye fs-xxl"></i>
                                                    </span>
                                                </div>
                                                <h3 className="mb-0"><span data-target="82.3">0</span>M</h3>
                                                <span className="badge fs-13 ms-auto badge-soft-success"> <i className="ti ti-arrow-up"></i> 6.84% </span>
                                            </div>
                                        </div>

                                        <div className="app-search app-search-sm">
                                            <select className="form-select form-control form-select-sm">
                                                <option value="All">All Time</option>
                                                <option value="today">Today</option>
                                                <option value="last_7_days">Last 7 Days</option>
                                                <option value="last_30_days">Last 30 Days</option>
                                                <option value="last_90_days" selected>Last 90 Days</option>
                                                <option value="this_month">This Month</option>
                                                <option value="last_month">Last Month</option>
                                            </select>
                                            <i className="ti ti-calendar app-search-icon text-muted"></i>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between gap-1">
                                        <div style="width: 69.4%">
                                            <p className="mb-1 mt-2 text-muted text-uppercase fs-13 fw-medium">Mobile Phone</p>
                                            <h3 className="fw-normal mb-2 fs-xl">69.40%</h3>
                                            <div className="progress progress-lg rounded-0 rounded-start mb-1">
                                                <div className="progress-bar bg-secondary" role="progressbar" style="width: 100%" aria-valuenow="100"></div>
                                            </div>
                                            <p className="text-muted mb-0">41,927 Sessions</p>
                                        </div>

                                        <div style="width: 30.6%">
                                            <p className="mb-1 mt-2 text-muted text-uppercase fs-13 fw-medium">Desktop</p>
                                            <h3 className="fw-normal mb-2 fs-xl">30.60%</h3>
                                            <div className="progress progress-lg rounded-0 rounded-end mb-1">
                                                <div className="progress-bar bg-info" role="progressbar" style="width: 100%" aria-valuenow="100"></div>
                                            </div>
                                            <p className="text-muted mb-0">18,476 Sessions</p>
                                        </div>
                                    </div>

                                    <div className="table-responsive mb-n2 mt-3">
                                        <table className="table table-sm table-nowrap table-borderless table-centered mb-0">
                                            <thead className="bg-light bg-opacity-50 thead-sm">
                                                <tr className="text-uppercase fs-xxs">
                                                    <th>Goal</th>
                                                    <th>Completed</th>
                                                    <th>Target</th>
                                                    <th>Progress</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Total Visitors</td>
                                                    <td>824,300</td>
                                                    <td>1,000,000</td>
                                                    <td>82%</td>
                                                </tr>
                                                <tr>
                                                    <td>Mobile Traffic</td>
                                                    <td>41,927</td>
                                                    <td>60,000</td>
                                                    <td>69%</td>
                                                </tr>
                                                <tr>
                                                    <td>Desktop Traffic</td>
                                                    <td>18,476</td>
                                                    <td>30,000</td>
                                                    <td>61%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                
                        </div>
            

                        <div className="col-xxl-4 col-xl-12">
                            <div className="card card-h-100">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start flex-wrap">
                                        <div>
                                            <h4 className="fs-13 mb-2 fw-bold text-uppercase text-muted">Total Subscribers</h4>
                                            <div className="d-flex align-items-center gap-2 mb-2 py-1">
                                                <div className="avatar-md flex-shrink-0">
                                                    <span className="avatar-title text-bg-info rounded-circle">
                                                        <i className="ti ti-mail fs-xxl"></i>
                                                    </span>
                                                </div>
                                                <h3 className="mb-0"><span data-target="55.6">0</span>k</h3>
                                                <span className="badge fs-13 ms-auto badge-soft-success"> <i className="ti ti-arrow-up"></i> 4.87% </span>
                                            </div>
                                        </div>

                        
                                        <div className="app-search app-search-sm">
                                            <select className="form-select form-control form-select-sm">
                                                <option value="All">All Time</option>
                                                <option value="today">Today</option>
                                                <option value="last_7_days">Last 7 Days</option>
                                                <option value="last_30_days">Last 30 Days</option>
                                                <option value="last_90_days" selected>Last 90 Days</option>
                                                <option value="this_month">This Month</option>
                                                <option value="last_month">Last Month</option>
                                            </select>
                                            <i className="ti ti-calendar app-search-icon text-muted"></i>
                                        </div>
                                    </div>

                        
                                    <div className="mt-2 pt-1">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="fs-base mb-2">Email Marketing</h5>
                                            <div>
                                                <span>+ <span data-target="34,920">0</span></span>
                                                <span><i className="ti ti-circle-filled text-light mx-3 fs-10"></i> 27.41%</span>
                                            </div>
                                        </div>
                                        <div className="progress progress-sm mb-1">
                                            <div className="progress-bar bg-secondary" role="progressbar" style="width: 27.41%" aria-valuenow="27.41" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>


                                    <div className="mt-3">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="fs-base mb-2">Social Marketing</h5>
                                            <div>
                                                <span>+ <span data-target="58,775">0</span></span>
                                                <span><i className="ti ti-circle-filled text-light mx-3 fs-10"></i> 46.13%</span>
                                            </div>
                                        </div>
                                        <div className="progress progress-sm mb-1">
                                            <div className="progress-bar bg-info" role="progressbar" style="width: 46.13%" aria-valuenow="46.13" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                            
                                    <div className="mt-3">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="fs-base mb-2">Direct</h5>
                                            <div>
                                                <span>+ <span data-target="33,645">0</span></span>
                                                <span><i className="ti ti-circle-filled text-light mx-3 fs-10"></i> 26.46%</span>
                                            </div>
                                        </div>
                                        <div className="progress progress-sm mb-1">
                                            <div className="progress-bar bg-success" role="progressbar" style="width: 26.46%" aria-valuenow="26.46" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                
                                    <div className="p-2 mt-3 border-dashed border rounded">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar-xl flex-shrink-0 me-2">
                                                <span className="avatar-title bg-warning-subtle rounded-circle fs-1">
                                                    <i className="ti ti-medal text-warning"></i>
                                                </span>
                                            </div>
                                            <div className="flex-gow-1">
                                                <h5 className="mb-0 fw-semibold">Congratulations !...</h5>
                                                <p className="mb-0 text-muted">You've reached a new subscriber milestone.</p>
                                            </div>
                                            <div className="ms-auto">
                                                <h4 className="fs-16 mt-1 mb-0">29.4k</h4>
                                                <span className="text-muted fw-semibold fs-12">SUBSCRIBERS</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                
                        </div>
                    </div>
    

                    <div className="row">
                        <div className="col-xxl-9 col-xl-8">
                            <div className="card card-h-100">
                                <div className="card-header justify-content-between">
                                    <h4 className="card-title">Sessions Overview <span className="text-muted fs-base fw-normal">(609.5k Sessions)</span></h4>
                                    <div>
                                        <a href="#" className="btn btn-sm btn-default"> <i className="ti ti-cloud-upload me-1"></i> Export </a>
                                        <a href="#" className="btn btn-sm btn-light"> <i className="ti ti-download me-1"></i> Import </a>
                                    </div>
                                </div>

                                <div className="card-body p-0">
                                    <ul className="nav nav-tabs nav-justified nav-bordered">
                                        <li className="nav-item text-start">
                                            <button id="session-users" className="nav-link py-3 active gap-2 d-flex align-items-center text-start justify-content-center">
                                                <span className="avatar-md flex-shrink-0 d-none d-xxl-block">
                                                    <span className="avatar-title bg-info-subtle text-info rounded-circle">
                                                        <i className="ti ti-users fs-xxl"></i>
                                                    </span>
                                                </span>
                                                <span>
                                                    <span className="text-muted">Users</span>
                                                    <p className="fs-xl mb-0 text-dark fw-semibold">
                                                        <span data-target="39.03">0</span>k <span className="text-success fs-sm ms-2"><i className="ti ti-arrow-up"></i>3.02%</span>
                                                    </p>
                                                </span>
                                            </button>
                                        </li>
                                        <li className="nav-item text-start">
                                            <button id="total-sessions" className="nav-link py-3 gap-2 d-flex align-items-center text-start justify-content-center">
                                                <span className="avatar-md flex-shrink-0 d-none d-xxl-block">
                                                    <span className="avatar-title bg-info-subtle text-info rounded-circle">
                                                        <i className="ti ti-eye fs-xxl"></i>
                                                    </span>
                                                </span>
                                                <span>
                                                    <span className="text-muted">Sessions</span>
                                                    <p className="fs-xl mb-0 text-dark fw-semibold">
                                                        <span data-target="42.15">0</span>k <span className="text-danger fs-sm ms-2"><i className="ti ti-arrow-down"></i>4.78%</span>
                                                    </p>
                                                </span>
                                            </button>
                                        </li>
                                        <li className="nav-item text-start">
                                            <button id="session-bounce-rate" className="nav-link py-3 gap-2 d-flex align-items-center text-start justify-content-center">
                                                <span className="avatar-md flex-shrink-0 d-none d-xxl-block">
                                                    <span className="avatar-title bg-info-subtle text-info rounded-circle">
                                                        <i className="ti ti-trending-up fs-xxl"></i>
                                                    </span>
                                                </span>
                                                <span>
                                                    <span className="text-muted">Bounce Rate</span>
                                                    <p className="fs-xl mb-0 text-dark fw-semibold">
                                                        <span data-target="21.2">0</span>% <span className="text-danger fs-sm ms-2"><i className="ti ti-arrow-down"></i>31.39%</span>
                                                    </p>
                                                </span>
                                            </button>
                                        </li>
                                        <li className="nav-item text-start">
                                            <button id="session-duration" className="nav-link py-3 gap-2 d-flex align-items-center text-start justify-content-center">
                                                <span className="avatar-md flex-shrink-0 d-none d-xxl-block">
                                                    <span className="avatar-title bg-info-subtle text-info rounded-circle">
                                                        <i className="ti ti-clock fs-xxl"></i>
                                                    </span>
                                                </span>
                                                <span>
                                                    <span className="text-muted">Session Duration</span>
                                                    <p className="fs-xl mb-0 text-dark fw-semibold">
                                                        3m 12s <span className="text-success fs-sm ms-2"><i className="ti ti-arrow-up"></i>7.92%</span>
                                                    </p>
                                                </span>
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="p-3">
                                        <div dir="ltr">
                                            <div id="sessions-overview-users" className="apex-charts"></div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>

                        <div className="col-xxl-3 col-xl-4">
                            <div className="card card-h-100">
                                <div className="card-header justify-content-between">
                                    <h4 className="card-title">Audience Insights</h4>
                                    <div className="dropdown ms-auto">
                                        <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                            <i className="ti ti-dots-vertical fs-lg"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="#"> <i className="ti ti-chart-bar me-2"></i> View Detailed Report </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#"> <i className="ti ti-download me-2"></i> Export Analytics </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#"> <i className="ti ti-filter-2 me-2"></i> Apply Filters </a>
                                            </li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <a className="dropdown-item text-danger" href="#"> <i className="ti ti-trash me-2"></i> Remove Widget </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col">
                                            <div className="border-bottom p-2 border-end border-dashed">
                                                <h3 className="mb-0 d-flex gap-2 align-items-center justify-content-center">
                                                    <i className="ti ti-users"></i>
                                                    <span id="active-users-count">125</span>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="border-bottom p-2 border-dashed">
                                                <h3 className="mb-0 d-flex gap-2 align-items-center justify-content-center">
                                                    <i className="ti ti-device-analytics"></i>
                                                    <span id="active-views-count">125</span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                
                                </div>

                                <div className="card-body">
                                    <div dir="ltr">
                                        <div id="total-users-chart" className="apex-charts"></div>
                                    </div>

                                    <div className="table-responsive mt-2">
                                        <table className="table table-sm table-nowrap table-borderless table-centered mb-0">
                                            <thead className="bg-light bg-opacity-50 thead-sm">
                                                <tr className="text-uppercase fs-xxs">
                                                    <th>Page</th>
                                                    <th>Views</th>
                                                    <th>B. Rate</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <a href="javascript:void(0);" className="text-muted">/dashboard-analytics</a>
                                                    </td>
                                                    <td>25</td>
                                                    <td>87.5%</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="javascript:void(0);" className="text-muted">/dashboard-crm</a>
                                                    </td>
                                                    <td>15</td>
                                                    <td>21.48%</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="javascript:void(0);" className="text-muted">/ubold/dashboard</a>
                                                    </td>
                                                    <td>10</td>
                                                    <td>63.59%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                    
                                    <div className="text-center mt-2">
                                        <a href="#" className="btn btn-sm btn-secondary">View All <i className="ti ti-arrow-right ms-1"></i></a>
                                    </div>
                                </div>
                    
                            </div>
                    
                        </div>
                        
                    </div>

                    <div className="row">
                        <div className="col-xl-7">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <h4 className="card-title">
                                        User Geography Intelligence
                                        <span data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Deep insight into user distribution across the globe."><i className="ti ti-info-circle text-muted ms-1"></i></span>
                                    </h4>
                                    <div className="dropdown ms-auto">
                                        <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                            <i className="ti ti-dots-vertical fs-lg"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="#"><i className="ti ti-map me-2"></i> Open Geo Visualization</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#"><i className="ti ti-download me-2"></i> Export Geo Metrics</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#"><i className="ti ti-filter-2 me-2"></i> Country Filters</a>
                                            </li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <a className="dropdown-item text-danger" href="#"><i className="ti ti-trash me-2"></i> Remove Widget</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card-body pt-0">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div id="session-by-countries" style="height: 300px"></div>
                                        </div>
                                        <div className="col-lg-5" dir="ltr">
                                            <div className="p-3">
                        
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-1"><img src="assets/images/flags/us.svg" alt="user-image" className="me-1 rounded-circle" height="20" /> <span className="align-middle">United States</span></p>
                                                    <div>
                                                        <h5 className="fw-semibold mb-0">67.5k</h5>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center mb-3">
                                                    <div className="col">
                                                        <div className="progress progress-soft progress-sm">
                                                            <div className="progress-bar bg-secondary" role="progressbar" style="width: 72.15%" aria-valuenow="72.15" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <p className="mb-0 text-muted fs-13">72.15%</p>
                                                    </div>
                                                </div>

                                                
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-1"><img src="assets/images/flags/in.svg" alt="user-image" className="me-1 rounded-circle" height="20" /> <span className="align-middle">India</span></p>
                                                    <div>
                                                        <h5 className="fw-semibold mb-0">7.92k</h5>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center mb-3">
                                                    <div className="col">
                                                        <div className="progress progress-soft progress-sm">
                                                            <div className="progress-bar bg-info" role="progressbar" style="width: 28.65%" aria-valuenow="28.65" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <p className="mb-0 text-muted fs-13">28.65%</p>
                                                    </div>
                                                </div>

                            
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-1"><img src="assets/images/flags/br.svg" alt="user-image" className="me-1 rounded-circle" height="20" /> <span className="align-middle">Brazil</span></p>
                                                    <div>
                                                        <h5 className="fw-semibold mb-0">89.05k</h5>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center mb-3">
                                                    <div className="col">
                                                        <div className="progress progress-soft progress-sm">
                                                            <div className="progress-bar bg-warning" role="progressbar" style="width: 62.5%" aria-valuenow="62.5" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <p className="mb-0 text-muted fs-13">62.5%</p>
                                                    </div>
                                                </div>

                                            
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-1"><img src="assets/images/flags/ca.svg" alt="user-image" className="me-1 rounded-circle" height="20" /> <span className="align-middle">Canada</span></p>
                                                    <div>
                                                        <h5 className="fw-semibold mb-0">5.3k</h5>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <div className="progress progress-soft progress-sm">
                                                            <div className="progress-bar bg-success" role="progressbar" style="width: 42.2%" aria-valuenow="42.2" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <p className="mb-0 text-muted fs-13">42.2%</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
            
                        </div>
            

                        <div className="col-xl-5">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <h4 className="card-title">
                                        Top Traffic Sources
                                        <span data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Shows which channels drive the most traffic."><i className="ti ti-info-circle text-muted ms-1"></i></span>
                                    </h4>

                                    <div className="dropdown ms-auto">
                                        <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                            <i className="ti ti-dots-vertical fs-lg"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="#"> <i className="ti ti-chart-bar me-2"></i> View Detailed Report </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#"> <i className="ti ti-download me-2"></i> Export Traffic Data </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#"> <i className="ti ti-filter-2 me-2"></i> Filter by Source </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item text-danger" href="#"> <i className="ti ti-trash me-2"></i> Remove Widget </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <div className="custom-progress mb-3">
                                                <div className="progress-info d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <img src="assets/images/logos/google.svg" alt="user-image" className="me-1" height="24" />
                                                        <span className="align-middle fw-semibold fs-md">Google</span>
                                                    </div>
                                                    <span className="fw-semibold text-muted float-end">87.8k</span>
                                                </div>
                                                <div className="progress-data bg-warning" style="width: 72%"></div>
                                            </div>
                                            <div className="custom-progress mb-3">
                                                <div className="progress-info d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <img src="assets/images/logos/instagram.svg" alt="user-image" className="me-1" height="24" />
                                                        <span className="align-middle fw-semibold fs-md">Instagram</span>
                                                    </div>
                                                    <span className="fw-semibold text-muted float-end">42.9k</span>
                                                </div>
                                                <div className="progress-data bg-danger" style="width: 30%"></div>
                                            </div>

                                            <div className="custom-progress mb-3">
                                                <div className="progress-info d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <img src="assets/images/logos/linkedin.svg" alt="user-image" className="me-1" height="20" />
                                                        <span className="align-middle fw-semibold fs-md">LinkedIn</span>
                                                    </div>
                                                    <span className="fw-semibold text-muted float-end">58.5k</span>
                                                </div>
                                                <div className="progress-data bg-info" style="width: 43%"></div>
                                            </div>

                                            <div className="custom-progress mb-3">
                                                <div className="progress-info d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <img src="assets/images/logos/dribbble.svg" alt="user-image" className="me-1" height="24" />
                                                        <span className="align-middle fw-semibold fs-md">Dribbble</span>
                                                    </div>
                                                    <span className="fw-semibold text-muted float-end">2.85k</span>
                                                </div>
                                                <div className="progress-data bg-secondary" style="width: 12%"></div>
                                            </div>

                                            <div className="custom-progress">
                                                <div className="progress-info d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <img src="assets/images/logos/messenger.svg" alt="user-image" className="me-1" height="24" />
                                                        <span className="align-middle fw-semibold fs-md">Messenger</span>
                                                    </div>
                                                    <span className="fw-semibold text-muted float-end">9.08k</span>
                                                </div>
                                                <div className="progress-data bg-primary" style="width: 18%"></div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="custom-progress mb-3">
                                                <div className="progress-info d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <img src="assets/images/logos/meta.svg" alt="user-image" className="me-1" height="18" />
                                                        <span className="align-middle fw-semibold fs-md">Meta</span>
                                                    </div>
                                                    <span className="fw-semibold text-muted float-end">77.7k</span>
                                                </div>
                                                <div className="progress-data bg-primary" style="width: 66%"></div>
                                            </div>
                                            <div className="custom-progress mb-3">
                                                <div className="progress-info d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <img src="assets/images/logos/telegram.svg" alt="user-image" className="me-1" height="24" />
                                                        <span className="align-middle fw-semibold fs-md">Telegram</span>
                                                    </div>
                                                    <span className="fw-semibold text-muted float-end">31.5k</span>
                                                </div>
                                                <div className="progress-data bg-success" style="width: 46%"></div>
                                            </div>

                                            <div className="custom-progress mb-3">
                                                <div className="progress-info d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <img src="assets/images/logos/x.svg" alt="user-image" className="me-1" height="16" />
                                                        <span className="align-middle fw-semibold fs-md">Twitter X</span>
                                                    </div>
                                                    <span className="fw-semibold text-muted float-end">22.6k</span>
                                                </div>
                                                <div className="progress-data bg-dark" style="width: 29%"></div>
                                            </div>

                                            <div className="custom-progress mb-3">
                                                <div className="progress-info d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <img src="assets/images/logos/whatsapp.svg" alt="user-image" className="me-1" height="24" />
                                                        <span className="align-middle fw-semibold fs-md">WhatsApp</span>
                                                    </div>
                                                    <span className="fw-semibold text-muted float-end">3.1k</span>
                                                </div>
                                                <div className="progress-data bg-danger" style="width: 18%"></div>
                                            </div>

                                            <div className="custom-progress">
                                                <div className="progress-info d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <img src="assets/images/logos/snapchat.svg" alt="user-image" className="me-1" height="28" />
                                                        <span className="align-middle fw-semibold fs-md">Snapchat</span>
                                                    </div>
                                                    <span className="fw-semibold text-muted float-end">5.8k</span>
                                                </div>
                                                <div className="progress-data bg-warning" style="width: 9%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                

                    <div className="row">
                        <div className="col-xl-3">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <h4 className="card-title">Sessions by Browser</h4>

                                    <div className="dropdown ms-auto">
                                        <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                            <i className="ti ti-dots-vertical fs-lg"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="#"> <i className="ti ti-report me-2"></i> View Browser Report </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#"> <i className="ti ti-download me-2"></i> Export Session Data </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#"> <i className="ti ti-filter-2 me-2"></i> Filter Browsers </a>
                                            </li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <a className="dropdown-item text-danger" href="#"> <i className="ti ti-trash me-2"></i> Remove Widget </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card-body py-2 px-0">
                                    <div className="px-2" data-simplebar style="height: 364px">
                                        <div className="d-flex justify-content-between align-items-center p-2">
                                            <div>
                                                <img src="assets/images/browsers/chrome.svg" alt="user-image" className="me-1" height="26" />
                                                <span className="align-middle fw-semibold fs-md">Chrome</span>
                                            </div>
                                            <span className="fw-semibold text-muted float-end">62.5%</span>
                                            <span className="fw-semibold text-muted float-end"><i className="ti ti-arrow-down text-danger"></i> 5.06%</span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center p-2">
                                            <div>
                                                <img src="assets/images/browsers/firefox.svg" alt="user-image" className="me-1" height="26" />
                                                <span className="align-middle fw-semibold fs-md">Firefox</span>
                                            </div>
                                            <span className="fw-semibold text-muted float-end">12.3%</span>
                                            <span className="fw-semibold text-muted float-end"><i className="ti ti-arrow-down text-danger"></i> 1.5%</span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center p-2">
                                            <div>
                                                <img src="assets/images/browsers/safari.svg" alt="user-image" className="me-1" height="26" />
                                                <span className="align-middle fw-semibold fs-md">Safari</span>
                                            </div>
                                            <span className="fw-semibold text-muted float-end">9.86%</span>
                                            <span className="fw-semibold text-muted float-end"><i className="ti ti-arrow-up text-success"></i> 1.03%</span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center p-2">
                                            <div>
                                                <img src="assets/images/browsers/brave.svg" alt="user-image" className="me-1" height="26" />
                                                <span className="align-middle fw-semibold fs-md">Brave</span>
                                            </div>
                                            <span className="fw-semibold text-muted float-end">3.15%</span>
                                            <span className="fw-semibold text-muted float-end"><i className="ti ti-arrow-down text-danger"></i> 0.3%</span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center p-2">
                                            <div>
                                                <img src="assets/images/browsers/opera.svg" alt="user-image" className="me-1" height="26" />
                                                <span className="align-middle fw-semibold fs-md">Opera</span>
                                            </div>
                                            <span className="fw-semibold text-muted float-end">3.01%</span>
                                            <span className="fw-semibold text-muted float-end"><i className="ti ti-arrow-up text-success"></i> 1.58%</span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center p-2">
                                            <div>
                                                <img src="assets/images/browsers/tor.svg" alt="user-image" className="me-1" height="26" />
                                                <span className="align-middle fw-semibold fs-md">Tor</span>
                                            </div>
                                            <span className="fw-semibold text-muted float-end">2.8%</span>
                                            <span className="fw-semibold text-muted float-end"><i className="ti ti-arrow-up text-success"></i> 0.01%</span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center p-2">
                                            <div>
                                                <img src="assets/images/browsers/edge.svg" alt="user-image" className="me-1" height="26" />
                                                <span className="align-middle fw-semibold fs-md">Edge</span>
                                            </div>
                                            <span className="fw-semibold text-muted float-end">4.25%</span>
                                            <span className="fw-semibold text-muted float-end"> <i className="ti ti-arrow-up text-success"></i> 0.75% </span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center p-2">
                                            <div>
                                                <img src="assets/images/browsers/globe.svg" alt="user-image" className="me-1" height="26" />
                                                <span className="align-middle fw-semibold fs-md">Other</span>
                                            </div>
                                            <span className="fw-semibold text-muted float-end">6.38%</span>
                                            <span className="fw-semibold text-muted float-end"><i className="ti ti-arrow-up text-success"></i> 3.6%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9">
                            <div data-table data-table-rows-per-page="5" className="card">
                                <div className="card-header border-light justify-content-between">
                                    <h4 className="card-title">Page Analytics Overview</h4>

                                    <div className="d-flex align-items-center gap-2">
                                
                                        <button data-table-delete-selected className="btn btn-danger d-none">Delete Selected</button>

                        
                                        <div className="app-search">
                                            <input data-table-search type="text" className="form-control" placeholder="Search pages..." />
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

                                <div className="table-responsive">
                                    <table className="table table-custom table-centered table-hover w-100 mb-0">
                                        <thead className="bg-light bg-opacity-25 thead-sm">
                                            <tr className="text-uppercase table-nowrap fs-xxs">
                                                <th scope="col" style="width: 1%">
                                                    <input data-table-select-all className="form-check-input form-check-input-light fs-14 mt-0" type="checkbox" />
                                                </th>
                                                <th data-table-sort>Page Path</th>
                                                <th data-table-sort>Top Referral Source</th>
                                                <th data-table-sort>Page Views</th>
                                                <th data-table-sort>Avg Time on Page</th>
                                                <th data-table-sort>Bounce Rate</th>
                                                <th data-table-sort>Conversion Rate</th>
                                                <th className="text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                        
                                            <tr>
                                                <td><input className="form-check-input form-check-input-light fs-14 mt-0" type="checkbox" /></td>
                                                <td>/dashboard</td>
                                                <td>Direct</td>
                                                <td><i className="ti ti-eye me-1"></i> 3,980</td>
                                                <td><i className="ti ti-clock me-1"></i> 02m:12s</td>
                                                <td>19.5%</td>
                                                <td>4.3%</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"><i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                    
                                            <tr>
                                                <td><input className="form-check-input form-check-input-light fs-14 mt-0" type="checkbox" /></td>
                                                <td>/pricing</td>
                                                <td>Google</td>
                                                <td><i className="ti ti-eye me-1"></i> 1,742</td>
                                                <td><i className="ti ti-clock me-1"></i> 01m:49s</td>
                                                <td>22.1%</td>
                                                <td>6.7%</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"><i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                            
                                            <tr>
                                                <td><input className="form-check-input form-check-input-light fs-14 mt-0" type="checkbox" /></td>
                                                <td>/features</td>
                                                <td>LinkedIn</td>
                                                <td><i className="ti ti-eye me-1"></i> 2,310</td>
                                                <td><i className="ti ti-clock me-1"></i> 02m:05s</td>
                                                <td>17.8%</td>
                                                <td>5.4%</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"><i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr>
                                                <td><input className="form-check-input form-check-input-light fs-14 mt-0" type="checkbox" /></td>
                                                <td>/blog/how-to-boost-sales</td>
                                                <td>Twitter</td>
                                                <td><i className="ti ti-eye me-1"></i> 1,128</td>
                                                <td><i className="ti ti-clock me-1"></i> 03m:14s</td>
                                                <td>14.9%</td>
                                                <td>2.2%</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"><i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                    
                                            <tr>
                                                <td><input className="form-check-input form-check-input-light fs-14 mt-0" type="checkbox" /></td>
                                                <td>/docs/get-started</td>
                                                <td>Reddit</td>
                                                <td><i className="ti ti-eye me-1"></i> 2,540</td>
                                                <td><i className="ti ti-clock me-1"></i> 04m:01s</td>
                                                <td>11.2%</td>
                                                <td>7.9%</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"><i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

            
                                            <tr>
                                                <td><input className="form-check-input form-check-input-light fs-14 mt-0" type="checkbox" /></td>
                                                <td>/signup</td>
                                                <td>Newsletter</td>
                                                <td><i className="ti ti-eye me-1"></i> 3,780</td>
                                                <td><i className="ti ti-clock me-1"></i> 02m:29s</td>
                                                <td>28.5%</td>
                                                <td>9.1%</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"><i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                    
                                            <tr>
                                                <td><input className="form-check-input form-check-input-light fs-14 mt-0" type="checkbox" /></td>
                                                <td>/account/settings</td>
                                                <td>Instagram</td>
                                                <td><i className="ti ti-eye me-1"></i> 1,690</td>
                                                <td><i className="ti ti-clock me-1"></i> 01m:36s</td>
                                                <td>16.3%</td>
                                                <td>3.9%</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"><i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                
                                            <tr>
                                                <td><input className="form-check-input form-check-input-light fs-14 mt-0" type="checkbox" /></td>
                                                <td>/reports/weekly-performance</td>
                                                <td>Direct</td>
                                                <td><i className="ti ti-eye me-1"></i> 2,245</td>
                                                <td><i className="ti ti-clock me-1"></i> 02m:08s</td>
                                                <td>17.2%</td>
                                                <td>4.1%</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"><i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                
                                            <tr>
                                                <td><input className="form-check-input form-check-input-light fs-14 mt-0" type="checkbox" /></td>
                                                <td>/help/faq</td>
                                                <td>Google</td>
                                                <td><i className="ti ti-eye me-1"></i> 3,015</td>
                                                <td><i className="ti ti-clock me-1"></i> 01m:23s</td>
                                                <td>23.9%</td>
                                                <td>2.8%</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"><i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                    
                                            <tr>
                                                <td><input className="form-check-input form-check-input-light fs-14 mt-0" type="checkbox" /></td>
                                                <td>/products</td>
                                                <td>Instagram</td>
                                                <td><i className="ti ti-eye me-1"></i> 4,680</td>
                                                <td><i className="ti ti-clock me-1"></i> 02m:51s</td>
                                                <td>18.4%</td>
                                                <td>6.3%</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"><i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr>
                                                <td><input className="form-check-input form-check-input-light fs-14 mt-0" type="checkbox" /></td>
                                                <td>/downloads</td>
                                                <td>Referral</td>
                                                <td><i className="ti ti-eye me-1"></i> 1,395</td>
                                                <td><i className="ti ti-clock me-1"></i> 03m:22s</td>
                                                <td>13.6%</td>
                                                <td>7.4%</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"><i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                
                                            <tr>
                                                <td><input className="form-check-input form-check-input-light fs-14 mt-0" type="checkbox" /></td>
                                                <td>/contact</td>
                                                <td>Facebook</td>
                                                <td><i className="ti ti-eye me-1"></i> 2,920</td>
                                                <td><i className="ti ti-clock me-1"></i> 01m:41s</td>
                                                <td>21.7%</td>
                                                <td>3.6%</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                                        <a href="javascript:void(0);" data-table-delete-row className="btn btn-default btn-icon btn-sm"><i className="ti ti-trash fs-lg"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="card-footer border-0">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div data-table-pagination-info="entries"></div>

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

        <script src="assets/plugins/jsvectormap/jsvectormap.min.js"></script>
        <script src="assets/js/maps/world-merc.js"></script>
        <script src="assets/js/maps/world.js"></script>

        <script src="assets/js/pages/custom-table.js"></script>

    
        <script src="assets/js/pages/dashboard-analytics.js"></script>
    </div>
    </>
  )
}

export default Analytics
