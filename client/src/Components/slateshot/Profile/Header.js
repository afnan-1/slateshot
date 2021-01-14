import React from 'react'

function Header() {
  return (
    <nav className="navbar navbar-expand navbar-dark topbar p-2 mb-4 pl-0 static-top shadow">
    {/* Sidebar Toggle (Topbar) */}
    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
      <i className="fa fa-bars" />
    </button>
    {/* Topbar Search */}
    <p className="sidebar-brand d-flex align-items-center justify-content-start pt-2 pb-1 mt-2" href="index.html">
               <div className="sidebar-brand-icon">
                  <img src="/img/logo-icon.png" alt=""/>
               </div>
               <div className="sidebar-brand-text mx-3"><img src="/img/logo.png" alt=""/></div>
            </p>
    <form className="d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search">
      <div className="input-group">
        <input type="text" className="form-control bg-white border-0 small" placeholder="Search for Movies, Events, Plays, Sports and Activities..." aria-label="Search" aria-describedby="basic-addon2" />
        <div className="input-group-append">
          
          <button className="btn bg-white" type="button">
            <i className="fas fa-search fa-sm" />
          </button>
        </div>
      </div>
    </form>
    {/* Topbar Navbar */}
    <ul className="navbar-nav ml-auto">
      {/* Nav Item - Search Dropdown (Visible Only XS) */}
      <li className="nav-item dropdown no-arrow d-sm-none">
        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-search fa-fw" />
        </a>
        {/* Dropdown - Messages */}
        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
          <form className="form-inline mr-auto w-100 navbar-search">
            <div className="input-group">
              <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>
      {/* Nav Item - Alerts */}
      <li className="nav-item no-arrow mx-1">
        <a className="nav-link" href="offers.html">
          <i className="fas fa-fire fa-fw" />
          {/* Counter - Alerts */}
          <span className="badge badge-danger bg-gradient-danger">NEW</span>
        </a>
      </li>
      <li className="nav-item dropdown no-arrow mx-1">
        <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-bell fa-fw" />
          {/* Counter - Alerts */}
          <span className="badge badge-danger badge-counter">8+</span>
        </a>
        {/* Dropdown - Alerts */}
        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
          <h6 className="dropdown-header">
            Alerts
          </h6>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="mr-3">
              <div className="icon-circle bg-primary text-white">
                KN
              </div>
            </div>
            <div>
              <div className="small text-gray-500">December 12, 2020</div>
              <span className="font-weight-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
          </a>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="dropdown-list-image mr-3">
              <img className="rounded-circle w-60" src="img/s1.png" alt="" />
              <div className="status-indicator bg-success" />
            </div>
            <div>
              <div className="text-truncate">Duis vel est sit amet ipsum egestas efficitur.</div>
              <div className="small text-gray-500">Gurdeep Osahan · 58m</div>
            </div>
          </a>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="dropdown-list-image mr-3">
              <img className="rounded-circle w-60" src="img/s2.png" alt="" />
              <div className="status-indicator" />
            </div>
            <div>
              <div className="text-truncate">Pellentesque euismod diam sit amet nibh molestie, imperdiet feugiat mi feugiat.</div>
              <div className="small text-gray-500">Jae Chun · 1d</div>
            </div>
          </a>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="dropdown-list-image mr-3">
              <img className="rounded-circle w-60" src="img/s3.png" alt="" />
              <div className="status-indicator bg-warning" />
            </div>
            <div>
              <div className="text-truncate">Quisque ac justo bibendum nunc fringilla pharetra nec sit amet mauris.</div>
              <div className="small text-gray-500">Morgan Alvarez · 2d</div>
            </div>
          </a>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="mr-3">
              <div className="icon-circle bg-success">
                <i className="fas fa-donate text-white" />
              </div>
            </div>
            <div>
              <div className="small text-gray-500">December 7, 2020</div>
              Sed aliquet nibh nec odio congue, in condimentum massa dapibus.
            </div>
          </a>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="mr-3">
              <div className="icon-circle bg-warning">
                <i className="fas fa-exclamation-triangle text-white" />
              </div>
            </div>
            <div>
              <div className="small text-gray-500">December 2, 2020</div>
              Pellentesque sit amet nunc consectetur, porta sapien a, bibendum dolor.
            </div>
          </a>
          <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
        </div>
      </li>
      {/* Nav Item - User Information */}
      <li className="nav-item dropdown no-arrow">
        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="mr-2 d-none d-lg-inline text-gray-600 small">Afnan</span>
          <img className="img-profile rounded-circle" src="data:image/jpeg;base64,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" />
        </a>
        {/* Dropdown - User Information */}
        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
          <a className="dropdown-item" href="profile.html">
            <i className="fas fa-user-circle fa-sm fa-fw mr-2 text-gray-400" />
            Profile
          </a>
          <a className="dropdown-item" href="profile.html">
            <i className="fas fa-heart fa-sm fa-fw mr-2 text-gray-400" />
            Watchlist
          </a>
          <a className="dropdown-item" href="profile.html">
            <i className="fas fa-list-alt fa-sm fa-fw mr-2 text-gray-400" />
            Your Lists
          </a>
          <a className="dropdown-item" href="profile.html">
            <i className="fas fa-cog fa-sm fa-fw mr-2 text-gray-400" />
            Account Settings
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
            Logout
          </a>
        </div>
      </li>
    </ul>
  </nav>
  )
}

export default Header
