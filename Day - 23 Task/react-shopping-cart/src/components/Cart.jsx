import React from 'react';

const Cart = ({ cartItems, products }) => {
  return (
    <div className="card my-4">
      <div className="card-body">
        <h5 className="card-title">Shopping Cart</h5>
        <p className="card-text">Items in cart: {cartItems.length}</p>
        <ul className="list-group list-group-flush">
          {cartItems.map((itemId) => {
            const product = products.find((product) => product.id === itemId);
            return (
              <li key={itemId} className="list-group-item">
                {product.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
