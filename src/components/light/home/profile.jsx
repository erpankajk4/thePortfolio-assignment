import React from 'react';
import { useSelector } from "react-redux";
import { about, socialHandles } from '../../../store/userSlice';
function Profile() {
  const aboutData = useSelector(about);
  const socialLinks = useSelector(socialHandles);
  return (
    <section id="home" className="intro-profile md-mb50">
      <div className="row rest">
        <div className="col-lg-4 box-img main-bg">
          <div className="cont valign">
            <div className="full-width">
              <div className="img">
                <img src={aboutData?.avatar?.url} alt="" />
                <span className="icon">
                  <img src="/assets/imgs/header/icon1.png" alt="" />
                </span>
                <span className="icon">
                  <img src="/assets/imgs/header/icon2.png" alt="" />
                </span>
                <span className="icon">
                  <img src="/assets/imgs/header/icon4.png" alt="" />
                </span>
              </div>
              <div className="info text-center mt-30">
                <h5>{aboutData?.name}</h5>
                <p className="fz-13 text-u">Available For Freelance</p>
              </div>
              <div className="social text-center mt-20">
              {socialLinks?.map((social, i) => (
                <a
                  href={social.url}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${social?.platform.toLowerCase()}`}></i>
                </a>
              ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 content main-bg">
          <h1>
            Hello, I’m <span className="main-color">{aboutData?.name}</span>, 
            <span className="bord">
            {aboutData?.title}<i></i>
            </span>{' '}
            Based in {aboutData?.address}.
          </h1>
          <br />
          <h5>{aboutData?.subTitle}</h5>
          <br />
          <p style={{ textAlign: "justify" }}>{aboutData?.description}</p>
          <div className="stauts mt-80">
            <div className="d-flex align-items-center">
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>{aboutData?.exp_year}</h2>
                  <p>
                    Years <br /> of Experience
                  </p>
                </div>
              </div>
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>{aboutData?.some_total}+</h2>
                  <p>
                    Clients <br /> Worldwide
                  </p>
                </div>
              </div>
              <div>
                <div className="butn-presv">
                  <a href="#0" className="butn butn-md butn-bord radius-5 skew">
                    <span>Dwonload C.V</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
