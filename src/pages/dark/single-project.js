import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ProgressScroll from "../../components/Common/ProgressScroll";
import Cursor from "../../components/Common/cusor";
import LoadingScreen from "../../components/Common/loader";
import ContactUs from "../../components/dark/contact/ContactUs";
import Nav from "../../components/dark/blogs/nav";
import ProjectView from "../../components/dark/works/single-project/project-view";
import Footer from "../../components/dark/home/footer";
import Lines from "../../components/Common/Lines";
import { useParams } from "react-router-dom";


import { useSelector } from "react-redux";
import { about, mode } from '../../store/userSlice';

function SingleProject() {
  const { projectId } = useParams();
  const [project_Id, setproject_Id] = useState("");
  const aboutData = useSelector(about);
  const selectedMode = useSelector(mode);
  // console.log(projectId);

  useEffect(() => {
    setproject_Id(projectId);
  }, [projectId]);

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
        <ProjectView projectId={project_Id} />
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

export default SingleProject;
