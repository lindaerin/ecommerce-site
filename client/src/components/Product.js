import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import "../index.css";

const Product = ({ product }) => {
  return (
    <Card className="my-4 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>

      <Card.Body as="h6">
        <a href={`/product/${product._id}`} className="cardlink">
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </Card.Text>

        <Card.Text as="h2">
          <div className="my-3">${product.price}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
