import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="card product-card">
      <div className="product-card-content">
        <img src={product.images} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Price: ${product.price}</p>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary btn-sm" onClick={handleAddToCart}>Add to Cart</button>
            <span className="badge bg-success">{product.stock} in stock</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
