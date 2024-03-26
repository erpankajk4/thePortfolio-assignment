import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeDark from "./pages/dark/Home";
import Blogs from "./pages/dark/blogs";
import Works from "./pages/dark/works";
import SingleProject from "./pages/dark/single-project";
import HomeLight from "./pages/light/Home";
import LightBlogs from "./pages/light/blogs";
// import LightSingleBlog from "./pages/light/single-blog";
import LightSingleProject from "./pages/light/single-project";
import LightWorks from "./pages/light/works";
// import SingleBlog from "./pages/dark/single-blog";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserData, setLoading, setError } from "./store/userSlice";
import { fetchDataFromApi } from "./utils/api";

function App() {
  const dispatch = useDispatch();

  // Fetch data form API Efficiently
  useEffect(() => {
    // Create an AbortController to handle cleanup when component unmounts
    const controller = new AbortController();
    const signal = controller.signal;

    fetchApiData();
    // Cleanup function to abort fetching when component unmounts
    return () => controller.abort();
  }, [dispatch]);

  // Function to fetch data from API
  const fetchApiData = async () => {
    try {
      dispatch(setLoading(true));
      const response = await fetchDataFromApi();
      if (response.success) {
        const userData = response.user;
        // Transform the user data according to requirements
        const transformedUserData = {
          about: userData.about,
          id: userData._id,
          username: userData.username,
          email: userData.email,
          role: userData.role,
          timeline: userData.timeline.filter((item) => item.enabled),
          skills: userData.skills
            .filter((skill) => skill.enabled)
            .sort((a, b) => a.sequence - b.sequence),
          youtube: userData.youtube.filter((video) => video.enabled),
          projects: userData.projects
            .filter((project) => project.enabled)
            .sort((a, b) => a.sequence - b.sequence),
          social_handles: userData.social_handles.filter(
            (handle) => handle.enabled
          ),
          services: userData.services.filter((service) => service.enabled),
          testimonials: userData.testimonials
            .filter((testimonial) => testimonial.enabled)
            .sort((a, b) => a.sequence - b.sequence),
          createdAt: userData.createdAt,
          updatedAt: userData.updatedAt,
        };
        // Dispatch action to set user data in Redux store
        dispatch(setUserData(transformedUserData));
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dark" element={<HomeDark />} />
        <Route path="/light-m" element={<HomeLight />} />
        <Route path="/allProjects" element={<Blogs />} />
        {/* <Route path="/single-blog" element={<SingleBlog />} /> */}
        <Route path="/works" element={<Works />} />
        <Route path="/l-works" element={<LightWorks />} />
        <Route path="/project/:projectId" element={<SingleProject />} />
        <Route path="/lAllProjects" element={<LightBlogs />} />
        {/* <Route path="/l-single-blog" element={<LightSingleBlog />} /> */}
        <Route path="/lproject/:projectId" element={<LightSingleProject />} />
      </Routes>
    </Router>
  );
}

export default App;
