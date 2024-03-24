import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { skills } from "../../../store/userSlice";

function Skills() {
  const skillsArray = useSelector(skills);

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.skill-progress .progres').forEach((element) => {
        const bottom_of_object = element.offsetTop + element.offsetHeight;
        const bottom_of_window = window.scrollY + window.innerHeight;
        const myVal = element.getAttribute('data-value');

        if (bottom_of_window > bottom_of_object) {
          element.style.width = myVal;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="sec-box skills section-padding bord-thin-bottom" id="skills">
      <div className="row">
        <div className="col-lg-4 valign">
          <div className="sec-head md-mb80 wow fadeIn">
            <h6 className="sub-title opacity-7 mb-15">My Skills</h6>
            <h3>
              <span className="main-color">Awards</span> & Recognitions
            </h3>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row">
            {skillsArray.map((skill, index) => {
              const skillPercentage = `${skill.percentage}%`;
              return (
                <div key={index} className="col-md-6">
                  <div className="item mb-30">
                    <div className="d-flex align-items-center mb-30">
                      <div className="mr-30">
                        <div className="img icon-img-40">
                          <img src={skill.image.url} alt="" />
                        </div>
                      </div>
                      <div>
                        <h6 className="fz-18">{skill.name}</h6>
                      </div>
                    </div>
                    <div className="skill-progress">
                      <span
                        className="progres"
                        data-value={skillPercentage}
                        style={{ width: skillPercentage }}
                      ></span>
                    </div>
                    <span className="value">{skillPercentage}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
