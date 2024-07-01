import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <ul className="list-group mb-3">
        {cartItems.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">{item.title}</h6>
              <small className="text-muted">Price per item: ${item.price}</small>
              <br />
              <small className="text-muted">Quantity: {item.quantity}</small>
              <br />
              <span className="text-muted">Total per item: ${item.price * item.quantity}</span>
            </div>
            <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="total-section">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Total Quantity</span>
          <span className="badge bg-secondary rounded-pill">{totalQuantity}</span>
        </h4>
        <h4 className="d-flex justify-content-between align-items-center">
          <span className="text-muted">Total Amount</span>
          <span className="badge bg-primary rounded-pill">${totalAmount}</span>
        </h4>
      </div>
    </div>
  );
};

export default CartPage;
