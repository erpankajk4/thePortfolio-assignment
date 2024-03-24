import React from 'react';

function Nav() {
  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <a href="/light" className="logo icon-img-60">
              <img src="/light/assets/imgs/logo-dark.png" alt="" />
            </a>
          </div>
          <div className="col-md-8">
            <div className="navbar">
              <div className="row justify-content-end rest">
                <div className="col-lg-8 rest">
                  <ul className="navbar-nav main-bg d-flex justify-content-end">
                    <li className="nav-item">
                      <a href="/light-m">
                        <span>Home</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/light-m#services">
                        <span>Services</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/light-m#about">
                        <span>About</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/light-m#portfolio">
                        <span>Portfolio</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/light-m#price">
                        <span>Price</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/light-m#contact">
                        <span>Contact</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/light-m#timeline">
                        <span>Timeline</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-butn">
          <span className="pe-7s-menu"></span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
