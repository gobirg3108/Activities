import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-4">
      <div className="container">
        <p className="mb-0">© 2024 Shopping Cart. All rights reserved.</p>
        <p className="mb-0">
          Designed by{" "}
          <a href="https://startbootstrap.com" className="text-white">
            Start Bootstrap
          </a>
        </p>
        <div className="mt-2">
          <a href="https://facebook.com" className="text-white mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="text-white mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-white mx-2">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
