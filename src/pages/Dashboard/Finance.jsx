import React from 'react'

function Finance() {
  return (
    <div>
        {/* <Sidebar /> */}
        <div className="wrapper">
     
            <div className="content-page">
                <div className="container-fluid">
                    <div className="page-title-head d-flex align-items-center">
                        <div className="flex-grow-1">
                            <h4 className="page-main-title m-0">Finance</h4>
                        </div>

                        <div className="text-end">
                            <ol className="breadcrumb m-0 py-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Paces</a></li>
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                                <li className="breadcrumb-item active">Finance</li>
                            </ol>
                        </div>
                    </div>


                    <div className="alert alert-primary alert-dismissible d-flex align-items-center" role="alert">
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        <i className="ti ti-lifebuoy fs-24 me-1"></i>
                        <div><strong> Dear David Dev - </strong> We kindly encourage you to review your recent transactions and financial commitments to ensure that your account is in good standing.</div>
                        <a href="#!" className="text-reset text-decoration-underline ms-auto link-offset-2"><b>Action Now</b></a>
                    </div>

                    <div className="row">
                        <div className="col-xxl-4">
                            <div className="card card-h-100">
                                <div className="card-header border-0 justify-content-between">
                                    <h4 className="card-title">Total Balance</h4>
                                    <div className="dropdown ms-auto">
                                        <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                            <i className="ti ti-dots-vertical fs-lg"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="#"> <i className="ti ti-wallet me-2"></i> Add Funds </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#"> <i className="ti ti-cash-banknote-move-back me-2"></i> Withdraw Funds </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#"> <i className="ti ti-transaction-dollar me-2"></i> Transaction History </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item text-danger" href="#"> <i className="ti ti-lock me-2"></i> Freeze Account </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card-body pt-0">
                                    <h2 className="fw-bold" id="user-balance-data">
                                        <span id="user-balance-number">$76,852.36</span>
                                        <span data-toggler="off" id="user-b-show-hide">
                                            <a href="#" data-toggler-on className="d-none">
                                                <i className="ti ti-eye text-warning fs-xxl"></i>
                                            </a>
                                            <a href="#" data-toggler-off>
                                                <i className="ti ti-eye-off text-muted fs-xxl"></i>
                                            </a>
                                        </span>
                                    </h2>

                                    <div className="p-2 bg-light bg-opacity-50 rounded mt-3 gap-2 d-flex align-items-center">
                                        <img src="assets/images/debit-card.png" alt="" height="36" className="rounded me-1" />
                                        <div>
                                            <p className="mb-0 fw-semibold">$<span data-target="59,258.25">0</span></p>
                                            <p className="text-muted fs-12 mb-0">**** **** **** 3698</p>
                                        </div>
                                        <a href="#!" className="btn btn-link fw-medium text-reset ms-auto text-decoration-underline link-offset-2">Details</a>
                                    </div>

                                    <div className="row g-2 mt-3">
                                        <div className="col">
                                            <a href="#!" className="btn btn-secondary bg-gradient w-100"><i className="ti ti-coin me-1"></i> Transfer</a>
                                        </div>
                                        <div className="col">
                                            <a href="#!" className="btn btn-info bg-gradient w-100"><i className="ti ti-coin me-1"></i> Request</a>
                                        </div>
                                    </div>
                                </div>
                    
                            </div>
        
                        </div>
                        

                        <div className="col-xxl-8">
                            <div className="row">
                                <div className="col-xl-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <iconify-icon icon="solar:leaf-bold-duotone" className="fs-36 text-success"></iconify-icon>
                                            <h3 className="fw-bold mt-3 mb-1">$<span data-target="51.68">0</span>k</h3>
                                            <p className="text-muted">Total Income</p>
                                            <span className="badge fs-12 badge-soft-success"><i className="ti ti-arrow-badge-up"></i> 8.72%</span>

                                            <div id="total-income-chart" className="mt-3"></div>
                                        </div>
                                    
                                    </div>
            
                                </div>
                    

                                <div className="col-xl-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <iconify-icon icon="solar:wallet-money-bold-duotone" className="fs-36 text-info"></iconify-icon>
                                            <h3 className="fw-bold mt-3 mb-1">$<span data-target="24.03">0</span>k</h3>
                                            <p className="text-muted">Total Expenses</p>
                                            <span className="badge fs-12 badge-soft-danger"><i className="ti ti-arrow-badge-down"></i> 3.28%</span>

                                            <div id="total-expenses-chart" className="mt-3"></div>
                                        </div>
                            
                                    </div>
                            
                                </div>
                    

                                <div className="col-xl-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <iconify-icon icon="solar:chart-2-bold-duotone" className="fs-36 text-warning"></iconify-icon>
                                            <h3 className="fw-bold mt-3 mb-1">$<span data-target="48.21">0</span>k</h3>
                                            <p className="text-muted">Investments</p>
                                            <span className="badge fs-12 badge-soft-danger"><i className="ti ti-arrow-badge-down"></i> 5.69%</span>

                                            <div id="investments-chart" className="mt-3"></div>
                                        </div>
                                        
                                    </div>
                    
                                </div>

                                <div className="col-xl-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <iconify-icon icon="solar:hand-money-bold" className="fs-36 text-secondary"></iconify-icon>
                                            <h3 className="fw-bold mt-3 mb-1">$<span data-target="11.65">0</span>k</h3>
                                            <p className="text-muted">Savings</p>
                                            <span className="badge fs-12 badge-soft-success"><i className="ti ti-arrow-badge-up"></i> 10.58%</span>

                                            <div id="savings-chart" className="mt-3"></div>
                                        </div>
                        
                                    </div>
                    
                                </div>
                            
                            </div>
                        </div>
                    </div>
                

                    <div className="row">
                        <div className="col-xl-8">
                            <div className="card card-h-100">
                                <div className="card-header border-0 justify-content-between">
                                    <h4 className="card-title">Financial Overview</h4>
                                    <div className="dropdown ms-auto">
                                        <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                            <i className="ti ti-dots-vertical fs-lg"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="#"> <i className="ti ti-refresh me-2"></i> Refresh Data </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#"> <i className="ti ti-chart-bar me-2"></i> View Analytics </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#"> <i className="ti ti-filter-2 me-2"></i> Filter Report </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item text-danger" href="#"> <i className="ti ti-download me-2"></i> Export Data </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card-body p-0">
                                    <div className="bg-light bg-opacity-40">
                                        <div className="row text-center">
                                            <div className="col">
                                                <p className="text-muted mt-3 mb-1">Revenue</p>
                                                <h4 className="mb-3">
                                                    <span className="ti ti-square-rounded-arrow-down text-success me-1"></span>
                                                    <span>$<span data-target="29.56">0</span>k</span>
                                                </h4>
                                            </div>
                                            <div className="col">
                                                <p className="text-muted mt-3 mb-1">Expenses</p>
                                                <h4 className="mb-3">
                                                    <span className="ti ti-square-rounded-arrow-up text-danger me-1"></span>
                                                    <span>$<span data-target="15.08">0</span>k</span>
                                                </h4>
                                            </div>
                                            <div className="col">
                                                <p className="text-muted mt-3 mb-1">Investment</p>
                                                <h4 className="mb-3">
                                                    <span className="ti ti-chart-infographic me-1"></span>
                                                    <span>$<span data-target="3.67">0</span>k</span>
                                                </h4>
                                            </div>
                                            <div className="col">
                                                <p className="text-muted mt-3 mb-1">Savings</p>
                                                <h4 className="mb-3">
                                                    <span className="ti ti-pig me-1"></span>
                                                    <span>$<span data-target="6.72">0</span>k</span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-2">
                                        <div dir="ltr">
                                            <div id="financial-overview-chart" className="apex-charts"></div>
                                        </div>
                                    </div>
                                </div>
                
                            </div>
            
                        </div>
                
                        <div className="col-xl-4">
                            <div className="card bg-secondary bg-gradient">
                                <div className="card-body" style="background-image: url(assets/images/flower-style.svg); background-size: contain; background-repeat: no-repeat; background-position: right bottom">
                                    <h4 className="text-white">Investment Growth</h4>
                                    <p className="text-white text-opacity-75">Track performance and see where your money is heading.</p>
                                    <a href="#!" className="btn btn-sm rounded-pill btn-info bg-gradient">View Portfolio</a>
                                </div>
                    
                            </div>

                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <h4 className="card-title">
                                        Quick Transfer
                                        <i className="ti ti-info-octagon text-muted ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Quickly send money to your saved contacts."></i>
                                    </h4>
                                    <div className="dropdown ms-auto">
                                        <a href="#" className="btn btn-sm btn-default btn-icon" data-bs-toggle="dropdown">
                                            <i className="ti ti-dots-vertical fs-lg"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a href="#!" className="dropdown-item"> <span className="me-2 ti ti-user-plus"></span> Add Recipient </a>
                                            <a href="#!" className="dropdown-item"> <span className="me-2 ti ti-history"></span> Recent Transfers </a>
                                            <a href="#!" className="dropdown-item"> <span className="me-2 ti ti-download"></span> Export Transfers </a>
                                            <a href="#!" className="dropdown-item text-danger"> <span className="me-2 ti ti-trash"></span> Remove All </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="d-flex gap-2 justify-content-center">
                                        <input type="radio" className="btn-check" name="recipient" id="rec1" autocomplete="off" checked />
                                        <label className="avatar-label" for="rec1" data-bs-toggle="tooltip" data-bs-title="Alexa Newsome">
                                            <img src="assets/images/users/user-4.jpg" alt="" className="rounded-circle img-thumbnail avatar-lg" />
                                        </label>

                                        <input type="radio" className="btn-check" name="recipient" id="rec2" autocomplete="off" />
                                        <label className="avatar-label" for="rec2" data-bs-toggle="tooltip" data-bs-title="Shelly Dorey">
                                            <img src="assets/images/users/user-5.jpg" alt="" className="rounded-circle img-thumbnail avatar-lg" />
                                        </label>

                                        <input type="radio" className="btn-check" name="recipient" id="rec3" autocomplete="off" />
                                        <label className="avatar-label" for="rec3" data-bs-toggle="tooltip" data-bs-title="Fredrick Arnett">
                                            <img src="assets/images/users/user-3.jpg" alt="" className="rounded-circle img-thumbnail avatar-lg" />
                                        </label>

                                        <input type="radio" className="btn-check" name="recipient" id="rec4" autocomplete="off" />
                                        <label className="avatar-label" for="rec4" data-bs-toggle="tooltip" data-bs-title="Barbara Frink">
                                            <img src="assets/images/users/user-8.jpg" alt="" className="rounded-circle img-thumbnail avatar-lg" />
                                        </label>

                                        <input type="radio" className="btn-check" name="recipient" id="rec5" autocomplete="off" />
                                        <label className="avatar-label" for="rec5" data-bs-toggle="tooltip" data-bs-title="Adam M">
                                            <img src="assets/images/users/user-2.jpg" alt="" className="rounded-circle img-thumbnail avatar-lg" />
                                        </label>
                                    </div>

                                    <div className="my-3">
                                        <label for="sendFrom" className="form-label">Send From</label>
                                        <select id="sendFrom" className="form-select">
                                            <option value="visa">Visa •••• 3698</option>
                                            <option value="mastercard">Mastercard •••• 1425</option>
                                            <option value="paypal">PayPal Wallet</option>
                                        </select>
                                    </div>

                                    <div className="row g-3 mb-2">
                                        <div className="col-12 col-md-6">
                                            <label for="currency" className="form-label">Currency</label>
                                            <select id="currency" className="form-select">
                                                <option value="USD">$ USD — US Dollar</option>
                                                <option value="EUR">€ EUR — Euro</option>
                                                <option value="GBP">£ GBP — British Pound</option>
                                                <option value="INR">₹ INR — Indian Rupee</option>
                                            </select>
                                        </div>

                                        <div className="col-12 col-md-6">
                                            <label for="enterAmount" className="form-label">Amount</label>
                                            <input type="number" id="enterAmount" className="form-control" placeholder="0.00" min="1" step="0.01" />
                                        </div>
                                    </div>

                                    <div className="row g-2 mt-3">
                                        <div className="col">
                                            <a href="#!" className="btn btn-primary w-100">Send Money</a>
                                        </div>
                                        <div className="col">
                                            <a href="#!" className="btn btn-outline-secondary w-100">Save as Draft</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                

                    <div className="row">
                        <div className="col-12">
                            <div data-table data-table-rows-per-page="8" className="card">
                                <div className="card-header border-light justify-content-between">
                                    <h4 className="card-title">Recent Transactions <span className="text-muted fw-normal fs-14">(95.6k+ Transactions)</span></h4>

                                    <div className="d-flex align-items-center gap-2">
                                        <span className="me-2 fw-semibold">Filter By:</span>

                                        <div className="app-search">
                                            <select data-table-filter="transaction-status" className="form-select form-control my-1 my-md-0">
                                                <option value="All">All Status</option>
                                                <option value="Success">Success</option>
                                                <option value="Pending">Pending</option>
                                                <option value="Failed">Failed</option>
                                                <option value="Processing">Processing</option>
                                                <option value="Onhold">On Hold</option>
                                            </select>
                                            <i className="ti ti-filter-2 app-search-icon text-muted"></i>
                                        </div>

                            
                                        <div className="app-search">
                                            <input data-table-search type="search" className="form-control" placeholder="Search transactions..." />
                                            <i className="ti ti-search app-search-icon text-muted"></i>
                                        </div>

                                        
                                        <div>
                                            <select data-table-set-rows-per-page className="form-select form-control my-1 my-md-0">
                                                <option value="5">5</option>
                                                <option value="10" selected>10</option>
                                                <option value="15">15</option>
                                                <option value="20">20</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table className="table table-custom table-nowrap table-centered table-select table-hover w-100 mb-0">
                                        <thead className="bg-light align-middle bg-opacity-25 thead-sm">
                                            <tr className="text-uppercase fs-xxs">
                                                <th data-table-sort className="text-muted">ID</th>
                                                <th data-table-sort className="text-muted">Name / Business</th>
                                                <th className="text-muted">Description</th>
                                                <th data-table-sort className="text-muted">Amount</th>
                                                <th data-table-sort className="text-muted">Timestamp</th>
                                                <th data-table-sort className="text-muted">Type</th>
                                                <th data-table-sort className="text-muted">Payment Method</th>
                                                <th data-table-sort data-column="transaction-status" className="text-muted">Status</th>
                                                <th className="text-muted">•••</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><a href="#!" className="fw-medium text-reset">#TX901</a></td>
                                                <td>
                                                    <img src="assets/images/users/user-5.jpg" alt="" className="avatar-xs rounded-circle me-1" />
                                                    <span className="align-middle text-reset">Sophia Miller</span>
                                                </td>
                                                <td>Subscription Renewal</td>
                                                <td className="text-success">USD $299.00</td>
                                                <td>22 Nov,25 <small className="text-muted">08:24 am</small></td>
                                                <td>Credit</td>
                                                <td><img src="assets/images/cards/visa.svg" height="24" className="me-1" /> *4321</td>
                                                <td><span className="badge bg-success-subtle text-success p-1">Success</span></td>
                                                <td>
                                                    <a href="#!" className="text-muted fs-20"><i className="ti ti-eye"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><a href="#!" className="fw-medium text-reset">#TX900</a></td>
                                                <td>
                                                    <img src="assets/images/users/user-2.jpg" alt="" className="avatar-xs rounded-circle me-1" />
                                                    <span className="align-middle">James Carter</span>
                                                </td>
                                                <td>Refund Processed</td>
                                                <td className="text-danger">-USD $150.50</td>
                                                <td>21 Nov,25 <small className="text-muted">07:40 pm</small></td>
                                                <td>Debit</td>
                                                <td><img src="assets/images/cards/mastercard.svg" height="24" className="me-1" /> *9333</td>
                                                <td><span className="badge bg-warning-subtle text-warning p-1">Pending</span></td>
                                                <td>
                                                    <a href="#!" className="text-muted fs-20"><i className="ti ti-eye"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><a href="#!" className="fw-medium text-reset">#TX899</a></td>
                                                <td>
                                                    <div className="avatar-xs d-inline-block me-1">
                                                        <span className="avatar-title bg-secondary-subtle text-secondary fw-semibold rounded-circle"> W </span>
                                                    </div>
                                                    WavePay
                                                </td>
                                                <td>Wallet Top-Up</td>
                                                <td className="text-success">USD $620.00</td>
                                                <td>21 Nov,25 <small className="text-muted">03:12 pm</small></td>
                                                <td>Credit</td>
                                                <td><img src="assets/images/cards/paypal.svg" height="24" className="me-1" /> PayPal</td>
                                                <td><span className="badge bg-success-subtle text-success p-1">Success</span></td>
                                                <td>
                                                    <a href="#!" className="text-muted fs-20"><i className="ti ti-eye"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><a href="#!" className="fw-medium text-reset">#TX898</a></td>
                                                <td>
                                                    <img src="assets/images/users/user-3.jpg" alt="" className="avatar-xs rounded-circle me-1" />
                                                    <span className="align-middle">Liam Thompson</span>
                                                </td>
                                                <td>Service Charge</td>
                                                <td className="text-danger">-USD $19.99</td>
                                                <td>20 Nov,25 <small className="text-muted">11:09 am</small></td>
                                                <td>Debit</td>
                                                <td><img src="assets/images/cards/stripe.svg" height="24" className="me-1" /> Stripe</td>
                                                <td><span className="badge bg-danger-subtle text-danger p-1">Failed</span></td>
                                                <td>
                                                    <a href="#!" className="text-muted fs-20"><i className="ti ti-eye"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><a href="#!" className="fw-medium text-reset">#TX897</a></td>
                                                <td>
                                                    <img src="assets/images/users/user-4.jpg" alt="" className="avatar-xs rounded-circle me-1" />
                                                    <span className="align-middle">Emma Stone</span>
                                                </td>
                                                <td>Invoice #2112</td>
                                                <td className="text-success">EUR €420.72</td>
                                                <td>18 Nov,25 <small className="text-muted">09:51 pm</small></td>
                                                <td>Credit</td>
                                                <td><img src="assets/images/cards/mastercard.svg" height="24" className="me-1" /> *2112</td>
                                                <td><span className="badge bg-success-subtle text-success p-1">Success</span></td>
                                                <td>
                                                    <a href="#!" className="text-muted fs-20"><i className="ti ti-eye"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><a href="#!" className="fw-medium text-reset">#TX896</a></td>
                                                <td>
                                                    <div className="avatar-xs d-inline-block me-1">
                                                        <span className="avatar-title bg-warning-subtle text-warning fw-semibold rounded-circle"> S </span>
                                                    </div>
                                                    StorePay
                                                </td>
                                                <td>Point of Sale Payment</td>
                                                <td className="text-danger">-GBP £15.00</td>
                                                <td>17 Nov,25 <small className="text-muted">02:10 pm</small></td>
                                                <td>Debit</td>
                                                <td><img src="assets/images/cards/unionpay.svg" height="24" className="me-1" /> *5510</td>
                                                <td><span className="badge bg-success-subtle text-success p-1">Success</span></td>
                                                <td>
                                                    <a href="#!" className="text-muted fs-20"><i className="ti ti-eye"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><a href="#!" className="fw-medium text-reset">#TX895</a></td>
                                                <td>
                                                    <img src="assets/images/users/user-8.jpg" alt="" className="avatar-xs rounded-circle me-1" />
                                                    <span className="align-middle">Olivia Brown</span>
                                                </td>
                                                <td>Personal Transfer</td>
                                                <td className="text-success">USD $250.00</td>
                                                <td>16 Nov,25 <small className="text-muted">07:48 am</small></td>
                                                <td>Credit</td>
                                                <td><img src="assets/images/cards/visa.svg" height="24" className="me-1" /> *0244</td>
                                                <td><span className="badge bg-success-subtle text-success p-1">Success</span></td>
                                                <td>
                                                    <a href="#!" className="text-muted fs-20"><i className="ti ti-eye"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><a href="#!" className="fw-medium text-reset">#TX894</a></td>
                                                <td>
                                                    <img src="assets/images/users/user-1.jpg" alt="" className="avatar-xs rounded-circle me-1" />
                                                    <span className="align-middle">David Chen</span>
                                                </td>
                                                <td>ATM Withdrawal</td>
                                                <td className="text-danger">-USD $180.00</td>
                                                <td>15 Nov,25 <small className="text-muted">04:33 pm</small></td>
                                                <td>Debit</td>
                                                <td><img src="assets/images/cards/mastercard.svg" height="24" className="me-1" /> *7780</td>
                                                <td><span className="badge bg-warning-subtle text-warning p-1">Processing</span></td>
                                                <td>
                                                    <a href="#!" className="text-muted fs-20"><i className="ti ti-eye"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><a href="#!" className="fw-medium text-reset">#TX893</a></td>
                                                <td>
                                                    <img src="assets/images/users/user-6.jpg" alt="" className="avatar-xs rounded-circle me-1" />
                                                    <span className="align-middle">Marcus Lee</span>
                                                </td>
                                                <td>Online Purchase</td>
                                                <td className="text-danger">-USD $65.49</td>
                                                <td>14 Nov,24 <small className="text-muted">02:09 pm</small></td>
                                                <td>Debit</td>
                                                <td><img src="assets/images/cards/stripe.svg" height="24" className="me-1" /> Stripe</td>
                                                <td><span className="badge bg-success-subtle text-success p-1">Success</span></td>
                                                <td>
                                                    <a href="#!" className="text-muted fs-20"><i className="ti ti-eye"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><a href="#!" className="fw-medium text-reset">#TX892</a></td>
                                                <td>
                                                    <div className="avatar-xs d-inline-block me-1">
                                                        <span className="avatar-title bg-danger-subtle text-danger fw-semibold rounded-circle"> U </span>
                                                    </div>
                                                    Utility Co.
                                                </td>
                                                <td>Electricity Bill</td>
                                                <td className="text-danger">-GBP £72.10</td>
                                                <td>12 Nov,24 <small className="text-muted">09:30 am</small></td>
                                                <td>Debit</td>
                                                <td><img src="assets/images/cards/visa.svg" height="24" className="me-1" /> *1188</td>
                                                <td><span className="badge bg-success-subtle text-success p-1">Success</span></td>
                                                <td>
                                                    <a href="#!" className="text-muted fs-20"><i className="ti ti-eye"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><a href="#!" className="fw-medium text-reset">#TX891</a></td>
                                                <td>
                                                    <img src="assets/images/users/user-7.jpg" alt="" className="avatar-xs rounded-circle me-1" />
                                                    <span className="align-middle">Henry Walker</span>
                                                </td>
                                                <td>Loan EMI Payment</td>
                                                <td className="text-danger">-USD $320.00</td>
                                                <td>11 Nov,24 <small className="text-muted">04:55 pm</small></td>
                                                <td>Debit</td>
                                                <td><img src="assets/images/cards/mastercard.svg" height="24" className="me-1" /> *9982</td>
                                                <td><span className="badge bg-success-subtle text-success p-1">Success</span></td>
                                                <td>
                                                    <a href="#!" className="text-muted fs-20"><i className="ti ti-eye"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><a href="#!" className="fw-medium text-reset">#TX890</a></td>
                                                <td>
                                                    <div className="avatar-xs d-inline-block me-1">
                                                        <span className="avatar-title bg-primary-subtle text-primary fw-semibold rounded-circle"> G </span>
                                                    </div>
                                                    Google Services
                                                </td>
                                                <td>Cloud Subscription</td>
                                                <td className="text-danger">-USD $12.99</td>
                                                <td>10 Nov,24 <small className="text-muted">08:12 am</small></td>
                                                <td>Debit</td>
                                                <td><img src="assets/images/cards/stripe.svg" height="24" className="me-1" /> Stripe</td>
                                                <td><span className="badge bg-warning-subtle text-warning p-1">Pending</span></td>
                                                <td>
                                                    <a href="#!" className="text-muted fs-20"><i className="ti ti-eye"></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><a href="#!" className="fw-medium text-reset">#TX889</a></td>
                                                <td>
                                                    <img src="assets/images/users/user-3.jpg" alt="" className="avatar-xs rounded-circle me-1" />
                                                    <span className="align-middle">Emily Frost</span>
                                                </td>
                                                <td>Client Invoice #2455</td>
                                                <td className="text-success">USD $980.00</td>
                                                <td>09 Nov,24 <small className="text-muted">11:21 am</small></td>
                                                <td>Credit</td>
                                                <td><img src="assets/images/cards/paypal.svg" height="24" className="me-1" /> PayPal</td>
                                                <td><span className="badge bg-success-subtle text-success p-1">Success</span></td>
                                                <td>
                                                    <a href="#!" className="text-muted fs-20"><i className="ti ti-eye"></i></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer border-0">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div data-table-pagination-info="transactions"></div>
                                        <div data-table-pagination></div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>

                    <div className="d-flex align-items-center mb-3 mt-2">
                        <h4 className="fw-bold fs-md">My Targets & Goals</h4>
                        <a href="#!" className="text-decoration-underline fw-semibold fs-15 ms-auto link-offset-2 link-dark">See All</a>
                    </div>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-5">
                        <div className="col">
                            <div className="card border-0 rounded-3 text-white" style="background-image: url(assets/images/stock/small-1.jpg); background-size: cover">
                                <div className="card-body bg-gradient bg-primary bg-opacity-90 rounded-3">
                                    <iconify-icon icon="solar:bus-bold-duotone" className="fs-36"></iconify-icon>
                                    <p className="text-white text-opacity-75 mb-1 text-uppercase">Goal</p>
                                    <h3 className="fw-semibold mb-2 fs-20 text-white">New Car</h3>
                                    <h4 className="fw-medium fs-16 mb-1 text-white">$<span data-target="25000">0</span></h4>
                                </div>
                            </div>
                        </div>
                        

                        <div className="col">
                            <div className="card border-0 rounded-3 text-white" style="background-image: url(assets/images/stock/small-2.jpg); background-size: cover">
                                <div className="card-body bg-gradient bg-secondary bg-opacity-90 rounded-3">
                                    <iconify-icon icon="solar:globus-bold-duotone" className="fs-36"></iconify-icon>
                                    <p className="text-white text-opacity-75 mb-1 text-uppercase">Goal</p>
                                    <h3 className="fw-semibold mb-2 fs-20 text-white">Vacation Trip</h3>
                                    <h4 className="fw-medium fs-16 mb-1 text-white">$<span data-target="7500">0</span></h4>
                                </div>
                            </div>
                        </div>
                    

                        <div className="col">
                            <div className="card border-0 rounded-3 text-white" style="background-image: url(assets/images/stock/small-3.jpg); background-size: cover">
                                <div className="card-body bg-gradient bg-warning bg-opacity-90 rounded-3">
                                    <iconify-icon icon="solar:square-academic-cap-2-bold-duotone" className="fs-36"></iconify-icon>
                                    <p className="text-white text-opacity-75 mb-1 text-uppercase">Goal</p>
                                    <h3 className="fw-semibold mb-2 fs-20 text-white">Education</h3>
                                    <h4 className="fw-medium fs-16 mb-1 text-white">$<span data-target="15200">0</span></h4>
                                </div>
                            </div>
                        </div>
            

                        <div className="col">
                            <div className="card border-0 rounded-3 text-white" style="background-image: url(assets/images/stock/small-4.jpg); background-size: cover">
                                <div className="card-body bg-gradient bg-danger bg-opacity-90 rounded-3">
                                    <iconify-icon icon="solar:home-2-bold-duotone" className="fs-36"></iconify-icon>
                                    <p className="text-white text-opacity-75 mb-1 text-uppercase">Goal</p>
                                    <h3 className="fw-semibold mb-2 fs-20 text-white">New Home</h3>
                                    <h4 className="fw-medium fs-16 mb-1 text-white">$<span data-target="120000">0</span></h4>
                                </div>
                            </div>
                        </div>
                    

                        <div className="col">
                            <div className="card border-0 rounded-3 text-white" style="background-image: url(assets/images/stock/small-5.jpg); background-size: cover">
                                <div className="card-body bg-gradient bg-info bg-opacity-90 rounded-3">
                                    <iconify-icon icon="solar:banknote-2-bold-duotone" className="fs-36"></iconify-icon>
                                    <p className="text-white text-opacity-75 mb-1 text-uppercase">Goal</p>
                                    <h3 className="fw-semibold mb-2 fs-20 text-white">Emergency Fund</h3>
                                    <h4 className="fw-medium fs-16 mb-1 text-white">$<span data-target="10000">0</span></h4>
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

        <script src="assets/js/pages/dashboard-finance.js"></script>
    </div>
  )
}

export default Finance
