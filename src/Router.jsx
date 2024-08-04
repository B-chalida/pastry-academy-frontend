import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import LoginPage from "./pages/login/Login";
import RegistrationPage from "./pages/registration/Registration";
import OurStoryPage from "./pages/our-story/OurStory";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/story" element={<OurStoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
