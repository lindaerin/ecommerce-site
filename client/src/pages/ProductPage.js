import React from "react";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import products from "../products";

const ProductPage = ({ match }) => {
  // for each product find the id that matches the id that is being passed in product page path
  const product = products.find((p) => p._id === match.params.id);
  console.log(product.name);

  return (
    <div>
      <Link className="btn btn-light my-3 rounded border-dark" to="/">
        View Other Products
      </Link>
      <Row className='my-4'> 
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid className='rounded'></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={` ${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>
                Price: {product.price}
            </ListGroupItem>
            <ListGroupItem >
                Details: {product.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                Price: 
                            </Col>
                            <Col>
                                {product.price}
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                Status: 
                            </Col>
                            <Col>
                                {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Button className='btn-block btn-dark rounded px-5 text-center' type='button' disabled={product.countInStock === 0}> Add to Cart</Button>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductPage;
