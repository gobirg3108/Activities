import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', rating: 4.5 },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', rating: 3.0 },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', rating: 4.0 },
    { id: 4, name: 'Product 4', description: 'Description of Product 4', rating: 2.5 },
    { id: 5, name: 'Product 5', description: 'Description of Product 5', rating: 5.0 },
    { id: 6, name: 'Product 6', description: 'Description of Product 6', rating: 3.5 },
    { id: 7, name: 'Product 7', description: 'Description of Product 7', rating: 4.2 },
    { id: 8, name: 'Product 8', description: 'Description of Product 8', rating: 3.8 },
    { id: 9, name: 'Product 9', description: 'Description of Product 9', rating: 4.7 },
    { id: 10, name: 'Product 10', description: 'Description of Product 10', rating: 2.0 },
  ];

  const handleAddToCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.includes(productId)
        ? prevCartItems.filter((id) => id !== productId)
        : [...prevCartItems, productId]
    );
  };

  const cartItemCount = cartItems.length;

  return (
    <Router>
      <div className="App">
        <Navigation cartItemCount={cartItemCount} />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<ProductList products={products} onAddToCart={handleAddToCart} cartItems={cartItems} />} />
            <Route path="/products" element={<ProductList products={products} onAddToCart={handleAddToCart} cartItems={cartItems} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} products={products} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
