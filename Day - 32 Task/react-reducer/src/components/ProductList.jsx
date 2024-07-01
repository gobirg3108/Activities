import React from 'react';
import ProductCard from './ProductCard';
import smartphonesData from '../data/smartphones.json';

const ProductList = () => {
  return (
    <div className="product-list">
      {smartphonesData.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
