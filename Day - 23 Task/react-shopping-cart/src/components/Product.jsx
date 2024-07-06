import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Product = ({ product, onAddToCart, isInCart }) => {
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FaStar key={`full-${i}`} />
          ))}
        {halfStar === 1 && <FaStarHalfAlt />}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <FaRegStar key={`empty-${i}`} />
          ))}
      </>
    );
  };

  return (
    <div className="card text-center bg-light">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <div className="mb-2">{renderRating(product.rating)}</div>
        <button
          className={`btn ${isInCart ? 'btn-danger' : 'btn-success'}`}
          onClick={() => onAddToCart(product.id)}
        >
          {isInCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default Product;
