// src/components/Navigation.js

import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = ({ cartItemCount }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://via.placeholder.com/30"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          {' Shopping Cart'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Product List</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart{' '}
              {cartItemCount > 0 && (
                <Badge pill bg="danger">
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
