import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import $ from 'jquery';
import { socialHandles, email } from "../../../store/userSlice";
function NavTop() {
  const socialLinks = useSelector(socialHandles);
  const emailAddress = useSelector(email);
  
  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <a href="#0" className="logo icon-img-60">
              <img src="/assets/imgs/logo-dark.png" alt="" />
            </a>
          </div>
          <div className="col-md-4 valign">
            <div className="social text-center full-width">
              {socialLinks.map((social, i) => (
                <a
                  href={social.url}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${social.platform.toLowerCase()}`}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="col-md-4 valign">
            <div className="full-width info">
              <div className="d-flex justify-content-end">
                <a href="mailto:abc@example.com">
                  <span className="sub-title fz-12">{emailAddress}</span>
                </a>
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

export default NavTop;
