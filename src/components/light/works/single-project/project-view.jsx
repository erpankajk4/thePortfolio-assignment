import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { projects } from "../../../../store/userSlice";

function ProjectView({ projectId }) {
  const projectsArray = useSelector(projects);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(null);

  useEffect(() => {
    if (projectsArray && projectId) {
      const foundProjectIndex = projectsArray.findIndex(
        (item) => item?._id === projectId
      );
      setCurrentProjectIndex(foundProjectIndex);
    }
  }, [projectId, projectsArray]);


  // Note: projectsArray is already sorted according to their sequence.
  const nextProjectIndex = (currentProjectIndex + 1) % projectsArray.length;
  const prevProjectIndex =
    (currentProjectIndex - 1 + projectsArray.length) % projectsArray.length;

  // const goToNextProject = () => {
  //   setCurrentProjectIndex(nextProjectIndex);
  // };

  // const goToPrevProject = () => {
  //   setCurrentProjectIndex(prevProjectIndex);
  // };

  const project = projectsArray[currentProjectIndex];

  return (
    <section className="sec-box project section-padding radius-15">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          {project && (
            <>
              <div className="img mb-80">
                <img src={project?.image?.url} alt="" className="radius-5" />
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="cont md-mb50">
                    <h3 className="mb-15 fw-500">{project?.title}</h3>
                    <div className="mt-30">
                      <p>{project?.description}</p>
                      <ul className="rest list-arrow mt-50">
                        <h5 className="mb-15 fw-500">Tech Stacks Used</h5>
                        {project?.techStack.map((tech, index) => (
                          <li key={index}>
                            <span className="icon">
                              <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 9 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                                  fill="#fff"
                                ></path>
                              </svg>
                            </span>
                            <h6 className="inline fz-18">{tech}</h6>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="info sub-bg" id="sticky_item">
                    <ul>
                      <li className="mb-30">
                        <span className="sub-title">
                          <i className="far fa-calendar-alt mr-10"></i> Project
                          Sequence :
                        </span>
                        <p>{project?.sequence}</p>
                      </li>
                      <li className="mb-30">
                        <span className="sub-title">
                          <i className="far fa-user mr-10"></i> GitHub Link :
                        </span>
                        <p>{project?.githuburl}</p>
                      </li>
                      <li>
                        <span className="sub-title">
                          <i className="fas fa-globe mr-10"></i> Live Link :
                        </span>
                        <p>{project?.liveurl}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="next-prev">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="d-flex align-items-center mt-80 pt-80 bord-thin-top">
              <div className="prev">
                <h6 className="sub-title">
                  <a href={`/lproject/${projectsArray[prevProjectIndex]?._id}`}>
                    <i className="fas fa-long-arrow-alt-left"></i> Prev Project
                  </a>
                </h6>
              </div>
              <div className="next ml-auto">
                <h6 className="sub-title">
                  <a href={`/lproject/${projectsArray[nextProjectIndex]?._id}`}>
                    next Project <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectView;
