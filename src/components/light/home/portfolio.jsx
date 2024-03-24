import React from "react";
// import data from "../../../ldata/home/works.json";
import { useSelector } from "react-redux";
import { projects } from "../../../store/userSlice";
function Portfolio() {
  const projectsArray = useSelector(projects);
  return (
    <div className="sec-box portfolio section-padding" id="blog">
      <div className="sec-head mb-30">
        <div className="row">
          <div className="col-lg-6">
            <h6 className="sub-title opacity-7 mb-15">My Portfolio</h6>
            <h3>
              Look at my work & <br /> give us{" "}
              <span className="main-color">your feedback</span>
            </h3>
          </div>
          <div className="col-lg-6 valign">
            <div className="go-more full-width d-flex justify-content-end">
              <a href="/l-works" className="d-flex">
                <span>
                  View All My Works
                  <svg
                    className="arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 34.2 32.3"
                    xmlSpace="preserve"
                    style={{ strokeWidth: 2 }}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="row">
          {projectsArray?.slice(0, 4)?.map((item, index) => (
            <div key={index} className="col-lg-6 items">
              <div className="item mt-50 wow fadeInUp" data-wow-delay=".2s">
                <div className="img">
                  <a href={item.liveurl}>
                    <img src={item.image.url} alt="" />
                  </a>
                </div>
                <div className="cont mt-30 d-flex align-items-center">
                  <div>
                    {item.techStack.map((tech, index) => (
                      <span key={index} className="tag">
                        {tech}
                      </span>
                    ))}
                    <h6 className="line-height-1">
                      <a href={item.liveurl}>{item.title}</a>
                    </h6>
                  </div>
                  <div className="ml-auto">
                    <div className="arrow">
                      <a href={item.githuburl}>
                        {/* <svg
                          className="arrow-right"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 34.2 32.3"
                          xmlSpace="preserve"
                          style={{ strokeWidth: 2 }}
                        /> */}
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="5rem"
                          width="5rem"
                        >
                          <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
