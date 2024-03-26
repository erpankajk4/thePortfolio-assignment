import React from "react";
// import data from "../../../data/blogs.json";
import { useSelector } from "react-redux";
import { timeline } from "../../../store/userSlice";
function Timeline() {
  const timelineData = useSelector(timeline);
  const educationTimeline = timelineData
    .filter((timeline) => timeline.forEducation)
    .sort((a, b) => a.sequence - b.sequence);
  const experienceTimeline = timelineData
    .filter((timeline) => !timeline.forEducation)
    .sort((a, b) => a.sequence - b.sequence);

  return (
    <>
      {/* Sorted Education Timeline  */}
      <div className="sec-box services section-padding bord-thin-bottom" id="timeline">
        <div className="sec-head mb-80 wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center wow fadeInUp">
              <h6 className="sub-title opacity-7 mb-15">My Timeline</h6>
              <h3>
                Education <span className="main-color">Timeline</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {educationTimeline?.map((item, index) => {
            return (
              <div key={item?._id} className="col-md-6">
                <div
                  className="item mb-40 wow fadeIn"
                  data-wow-delay=".2s"
                  style={{ padding: "10px" }}
                >
                  {/* <span className="icon-img-70 mb-30 opacity-7">
                  <img src={item?.icon?.url} alt="" />
                </span> */}
                  <h5 className="text-u ls1 mb-15">{item?.company_name}</h5>
                  <div className="d-flex justify-content-between">
                    <h6>{item?.jobTitle}</h6>
                    <p>
                      {item?.startDate.substring(0, 10)} to{" "}
                      {item?.endDate.substring(0, 10)}
                    </p>
                  </div>
                  <p>
                    <em>{item?.jobLocation}</em>
                  </p>
                  <p>
                    <em>{item?.summary}</em>
                  </p>
                  <ul>
                    {item?.bulletPoints?.map((li, index) => (
                      <li key={index}>● {li}</li>
                    ))}
                  </ul>
                  <div className="bord-color"></div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Sorted Experience Timeline  */}
        <div className="sec-head mb-80">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center wow fadeInUp">
              <h3>
                Experience <span className="main-color">Timeline</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {experienceTimeline.map((item, index) => {
            return (
              <div key={item?._id} className="col-md-6">
                <div
                  className="item mb-40 wow fadeIn"
                  data-wow-delay=".2s"
                  style={{ padding: "10px" }}
                >
                  {/* <span className="icon-img-70 mb-30 opacity-7">
                  <img src={item?.icon?.url} alt="" />
                </span> */}
                  <h5 className="text-u ls1 mb-15">{item.company_name}</h5>
                  <div className="d-flex justify-content-between">
                    <h6>{item?.jobTitle}</h6>
                    <p>
                      {item?.startDate?.substring(0, 10)} to{" "}
                      {item?.endDate?.substring(0, 10)}
                    </p>
                  </div>
                  <p>
                    <em>{item?.jobLocation}</em>
                  </p>
                  <p>
                    <em>{item?.summary}</em>
                  </p>
                  <ul>
                    {item?.bulletPoints
                      ?.filter((li) => li)
                      ?.map((li, index) => (
                        <li key={index}>● {li}</li>
                      ))}
                  </ul>
                  <div className="bord-color"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Timeline;
