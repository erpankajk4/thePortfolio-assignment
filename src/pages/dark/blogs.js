import React from 'react';
import { Helmet } from 'react-helmet';
import ProgressScroll from '../../components/Common/ProgressScroll';
import Cursor from '../../components/Common/cusor';
import LoadingScreen from '../../components/Common/loader';
import ContactUs from '../../components/dark/contact/ContactUs';
import Nav from '../../components/dark/blogs/nav';
// import Blog from '../../components/dark/blogs/blog';
import Posts from '../../components/dark/blogs/posts';
import Footer from '../../components/dark/home/footer';

import Lines from '../../components/Common/Lines';

import { useSelector } from "react-redux";
import { about, mode } from '../../store/userSlice';
function Blogs() {
  const aboutData = useSelector(about);
  const selectedMode = useSelector(mode);
  return (
    <div>
      <Helmet>
        <title>{aboutData?.name ? `${aboutData?.name} | PortFolio` : "PortFolio"}</title>
        <link rel="icon" href={`/${selectedMode === 'dark' ? 'assets/imgs/favicon.ico' : 'light/assets/imgs/favicon.ico'}`} />
        <link rel="shortcut icon" href={`/${selectedMode === 'dark' ? 'assets/imgs/favicon.ico' : 'light/assets/imgs/favicon.ico'}`} />
        <link rel="stylesheet" type="text/css" href={`/${selectedMode === 'dark' ? 'assets/css/plugins.css' : 'light/assets/css/plugins.css'}`} />
        <link rel="stylesheet" type="text/css" href={`/${selectedMode === 'dark' ? 'assets/css/style.css' : 'light/assets/css/style.css'}`} />
      </Helmet>
      <Cursor />
      <ContactUs />
      <Lines />
      <LoadingScreen />
      <ProgressScroll />
      <Nav />
      <main className="container">
        {/* <Blog /> */}
        <Posts />
      </main>
      <Footer />
      <script
        src="/assets/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <script
        src="/assets/js/jquery-migrate-3.4.0.min.js"
        strategy="beforeInteractive"
      />
      <script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <script src="/assets/js/scripts.js" strategy="beforeInteractive" />
      <script src="/assets/js/three.min.js" strategy="lazyOnload" />
    </div>
  );
}

export default Blogs;
