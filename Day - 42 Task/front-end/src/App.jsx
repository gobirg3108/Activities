// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage';
import UrlShortenerPage from './pages/UrlShortenerPage';
import ActivateAccountPage from './pages/ActivateAccountPage'; // Import the new page
import ResetPassword from './components/Auth/ResetPassword';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/shorten" element={<UrlShortenerPage />} />
      <Route path="/activate/:token" element={<ActivateAccountPage />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} /> 
      
      {/* Add new route */}
    </Routes>
  );
};

export default App;
