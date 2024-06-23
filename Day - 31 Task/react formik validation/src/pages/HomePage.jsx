import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container-fluid home-page-container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6 text-center">
          <h1 className="display-4 mb-4">Welcome to Our Library</h1>
          <p className="lead mb-5">Explore a world of books and authors.</p>
          <div className="d-flex justify-content-center">
            <Link to="/books" className="btn btn-primary mr-3">
              Manage Books
            </Link>
            <Link to="/authors" className="btn btn-secondary">
              Manage Authors
            </Link>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="https://editor.analyticsvidhya.com/uploads/66982lms.jpg"
            alt="Library"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
