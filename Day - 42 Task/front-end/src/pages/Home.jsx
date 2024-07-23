import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h3" component="h1" gutterBottom>Welcome to URL Shortener</Typography>
        <Typography variant="h6">Manage your URLs efficiently!</Typography>
        <Box mt={2}>
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
