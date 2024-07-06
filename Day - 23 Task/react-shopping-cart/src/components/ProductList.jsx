import React from "react";
import { Card, Button } from "react-bootstrap";
import { StarFill, StarHalf, Star } from "react-bootstrap-icons";

const ProductList = ({ products, onAddToCart, cartItems }) => {
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<StarFill key={i} className="text-warning" />);
      } else if (i - rating === 0.5) {
        stars.push(<StarHalf key={i} className="text-warning" />);
      } else {
        stars.push(<Star key={i} className="text-warning" />);
      }
    }
    return stars;
  };

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <Card className="card">
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.name}
              className="card-img-top"
            />
            <Card.Body>
              <Card.Title className="card-title">{product.name}</Card.Title>
              <Card.Text className="card-text">{product.description}</Card.Text>
              <div className="mb-2">{renderRating(product.rating)}</div>
              <Button
                variant={cartItems.includes(product.id) ? "danger" : "primary"}
                onClick={() => onAddToCart(product.id)}
              >
                {cartItems.includes(product.id)
                  ? "Remove from Cart"
                  : "Add to Cart"}
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
