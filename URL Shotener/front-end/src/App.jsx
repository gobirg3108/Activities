import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Activate from './components/Auth/Activate';
import Dashboard from './components/Dsahboard/Dashboard';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/activate/:token" element={<Activate />} />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute element={Dashboard} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
