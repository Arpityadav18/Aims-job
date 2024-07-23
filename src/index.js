
import React from "react";
import ReactDOM from "react-dom/client";
import {HashRouter as BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import './index.css'
import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import JobCard from "components/JobCard";
import SearchBar from "components/SearchBar"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/landing-page" exact element={<Landing />} />
      <Route path="/login-page" exact element={<Login />} />
      <Route path="/profile-page" exact element={<Profile />} />
      <Route path="/register-page" exact element={<Register />} />
      <Route path="/jobCard-page" exact element={<JobCard />} />      
      <Route path="/searchBar-page" exact element={<SearchBar />} />      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
