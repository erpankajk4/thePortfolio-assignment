import React from "react";
// import data from "../../../data/services.json";
import { useSelector } from "react-redux";
import { services, mode } from "../../../store/userSlice";

function Services() {
  const selectedMode = useSelector(mode);
  const servicesArray = useSelector(services);
  return (
    <div
      className="sec-box services section-padding bord-thin-bottom"
      id="services"
    >
      <div className="sec-head mb-80 wow fadeInUp">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h6 className="sub-title opacity-7 mb-15">My Services</h6>
            <h3>
              Turn Information{" "}
              <span className="main-color"> Into Actionable</span> Insights
            </h3>
          </div>
        </div>
      </div>
      <div className="row">
        {servicesArray.map((service, index) => {
          const imageCount = index + 1;
          return (
            <div key={service._id} className="col-md-6">
              <div className="item mb-40 wow fadeIn" data-wow-delay=".2s">
                <span className="icon-img-70 mb-30 opacity-7">
                  {selectedMode === "light" ? (
                    <img
                      src={`/light/assets/imgs/serv-img/${imageCount}.png`}
                      alt=""
                    />
                  ) : (
                    <img
                      src={`/assets/imgs/serv-img/${imageCount}.png`}
                      alt=""
                    />
                  )}
                </span>
                <h6 className="text-u ls1 mb-15">{service.name}</h6>
                <p>{service.desc}</p>
                <h6>
                  <strong>Charge:</strong> {service.charge}
                </h6>
                <div className="bord-color"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
