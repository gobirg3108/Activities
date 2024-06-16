// App.js
import React, { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Create this file for custom styles

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const removeFromCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    <div className="container">
      <h1 className="my-4 text-center">Shop Homepage</h1>
      <div className="row">
        <div className="col-lg-3">
          <h2 className="my-4">Shop Name</h2>
          <div className="list-group">
            <Product
              name="Product 1"
              description="Description of Product 1"
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isInCart={cartCount > 0}
            />
            {/* Add more products as needed */}
          </div>
        </div>
        <div className="col-lg-9">
          <Cart itemCount={cartCount} />
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
