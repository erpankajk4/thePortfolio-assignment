import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import $ from "jquery";
import { socialHandles, email, setMode, mode } from "../../../store/userSlice";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaRegSun } from "react-icons/fa";

function NavTop() {
  const socialLinks = useSelector(socialHandles);
  const emailAddress = useSelector(email);
  const selectedMode = useSelector(mode);
  const dispatch = useDispatch();

  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
        <div className="col-md-4 valign">
            <a href="#0" className="logo icon-img-60">
              <img src={selectedMode === "light" ? "/assets/imgs/logo-dark.png" : "/assets/imgs/logo-light.png"} alt="" />
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
                <a href="mailto:abc@example.com" style={{ display: "flex", alignItems: "center" }}>
                  <span className="sub-title fz-12">{emailAddress}</span>
                </a>
                <div className="social text-center" style={{ marginLeft: "10px" }}>
                  <a
                    onClick={() =>
                      dispatch(setMode(selectedMode === "light" ? "dark" : "light"))
                    }
                  >
                    {selectedMode === "light" ? <FaRegSun /> : <BsFillMoonStarsFill />}
                  </a>
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

export default NavTop;
