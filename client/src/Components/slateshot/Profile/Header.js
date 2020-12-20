import React from 'react'

function Header() {
  return (
    <nav className="navbar navbar-expand navbar-dark topbar mb-4 pl-0 static-top shadow">
      {/* Sidebar Toggle (Topbar) */}
      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <i className="fa fa-bars" />
      </button>
      {/* Topbar Search */}
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

        <li className="nav-item dropdown no-arrow mx-1">

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
