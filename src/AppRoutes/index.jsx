import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import ContactUs from "../Pages/ContactUs";
import FindTutor from "../Pages/FindTutor";
import AboutUs from "../Pages/AboutUs";
import TutorDetail from "../Pages/TutorDetail";
import BecomeTutor from "../Pages/BecomeTutor";
import OnBoarding from "../Pages/OnBoarding";
import AdminDashboard from "../Pages/AdminDashboard";
import Admin from "../Pages/SignInAsAdmin";
import { useGlobalContext } from "../hook/Context";
import TutorDashboard from "../Pages/TutorDashboard";

const AppRoutes = () => {
  const { user } = useGlobalContext();

  // console.log(user);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/tutor-list" element={<FindTutor />} />
      <Route path="/tutor-detail/:id" element={<TutorDetail />} />
      <Route path="/become-tutor" element={<BecomeTutor />} />
      <Route path="/onBoarding/:id/:role" element={<OnBoarding />} />
      <Route path="/tutor-Dashboard" element={<TutorDashboard />} />

      <Route
        path="/admin-dashboard"
        element={
          user?.role === "admin" ? (
            <AdminDashboard />
          ) : (
            <Navigate to="/admin" replace />
          )
        }
      />
      <Route
        path="/admin"
        element={
          user?.role === "admin" ? (
            <Navigate to="/admin-dashboard" replace />
          ) : (
            <Admin />
          )
        }
      />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
};

export default AppRoutes;
