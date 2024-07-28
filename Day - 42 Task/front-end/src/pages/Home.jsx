// src/pages/Home.jsx
import React from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Welcome to URL Shortener
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Manage your URLs efficiently!
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => navigate('/shorten')}
              style={{ height: '100%' }}
            >
              URL Shortener
            </Button>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={() => navigate('/register')}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
