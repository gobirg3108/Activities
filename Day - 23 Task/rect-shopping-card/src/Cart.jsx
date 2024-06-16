// Cart.js
import React from 'react';

const Cart = ({ itemCount }) => {
  return (
    <div className="cart">
      <h3>Cart</h3>
      <p>Items in Cart: {itemCount}</p>
    </div>
  );
};

export default Cart;
