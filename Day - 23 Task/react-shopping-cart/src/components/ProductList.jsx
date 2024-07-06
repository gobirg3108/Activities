import React from 'react';
import Product from './Product';

const ProductList = ({ products, onAddToCart, cartItems }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-6 mb-4" key={product.id}>
          <Product
            product={product}
            onAddToCart={onAddToCart}
            isInCart={cartItems.includes(product.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
