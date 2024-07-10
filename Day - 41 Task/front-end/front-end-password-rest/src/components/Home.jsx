import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h3" gutterBottom>Welcome</Typography>
        <Button variant="contained" color="primary" component={Link} to="/register">
          Register
        </Button>
        <Button variant="contained" color="secondary" component={Link} to="/forgotpassword" style={{ marginLeft: '10px' }}>
          Forgot Password
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
