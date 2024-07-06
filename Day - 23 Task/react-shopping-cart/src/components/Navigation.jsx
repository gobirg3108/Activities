import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = ({ cartItemCount }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://t3.ftcdn.net/jpg/03/14/85/06/360_F_314850659_2aQLerz30kWj78tqpaGSbzYD6sAUmuDf.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          {' Shopping Cart'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto py-3">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Product List</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart{' '}
              {cartItemCount > 0 && (
                <Badge pill variant="danger">
                  {cartItemCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
