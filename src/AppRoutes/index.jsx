import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ContactUs from "../Pages/ContactUs";
import FindTutor from "../Pages/FindTutor";
import AboutUs from "../Pages/AboutUs";
import TutorDetail from "../Pages/TutorDetail";
import BecomeTutor from "../Pages/BecomeTutor";
import Admin from "../Pages/AdminDashboard";
import OnBoarding from "../Pages/OnBoarding";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/tutor-list" element={<FindTutor />} />
      <Route path="/tutor-detail" element={<TutorDetail />} />
      <Route path="/become-tutor" element={<BecomeTutor />} />
      <Route path="/onBoarding/:id" element={<OnBoarding />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
};

export default AppRoutes;
