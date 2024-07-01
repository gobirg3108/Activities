import React from 'react';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container py-4 bg-secondary">
      <h1 className="text-center mb-4 text-white">Smartphones Store</h1>
      <div className="row">
        <div className="col-md-8">
          <ProductList />
        </div>
        <div className="col-md-4">
          <CartPage />
        </div>
      </div>
    </div>
  );
};

export default App;
