import React from 'react';
// import { useSelector } from "react-redux";
// import { about } from '../../../store/userSlice';

function ContactUs() {
  // const aboutData = useSelector(about);
  return (
    <div className="contact-fixed-butn">
      <div className="butn-presv">
        <a href="#0" className="butn butn-sm bg-white skew" data-scroll-nav="5">
          <span className="text-dark">Contact Us</span>
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
