import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { socialHandles, email, setMode, mode } from "../../../store/userSlice";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaRegSun } from "react-icons/fa";
function Nav() {
  const selectedMode = useSelector(mode);
  const dispatch = useDispatch();
  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <a href="#0" className="logo icon-img-60">
              <img
                src={
                  selectedMode === "light"
                    ? "/assets/imgs/logo-dark.png"
                    : "/assets/imgs/logo-light.png"
                }
                alt=""
              />
            </a>
          </div>
          <div className="col-md-8">
            <div className="navbar">
              <div className="row justify-content-end rest">
                <div className="col-lg-8 rest">
                  <ul className="navbar-nav main-bg d-flex justify-content-end">
                    <li className="nav-item">
                      <a href="/dark">
                        <span>Home</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/dark#services">
                        <span>Services</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/dark#home">
                        <span>About</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/dark#portfolio">
                        <span>Portfolio</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/dark#price">
                        <span>Price</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/dark#contact">
                        <span>Contact</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/dark#timeline">
                        <span>Timeline</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/dark#blog">
                        <span>Projects</span>
                      </a>
                    </li>
                    <li
                      className="social text-center"
                      style={{ marginLeft: "10px" }}
                    >
                      <a
                        onClick={() =>
                          dispatch(
                            setMode(selectedMode === "light" ? "dark" : "light")
                          )
                        }
                      >
                        {selectedMode === "light" ? (
                          <FaRegSun />
                        ) : (
                          <BsFillMoonStarsFill />
                        )}
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
