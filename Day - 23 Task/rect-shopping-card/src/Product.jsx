// Product.js
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Product = ({ name, description, addToCart, removeFromCart, isInCart }) => {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>{description}</p>
      {isInCart ? (
        <Button variant="danger" onClick={removeFromCart}>Remove from Cart</Button>
      ) : (
        <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
      )}
    </div>
  );
};

export default Product;
