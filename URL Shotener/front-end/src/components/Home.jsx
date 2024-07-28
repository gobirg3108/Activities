import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Welcome to URL Shortener
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/login">
        Login
      </Button>
      <Button variant="contained" color="secondary" component={Link} to="/register">
        Register
      </Button>
    </Container>
  );
};

export default Home;
