// src/components/Auth/ActivateAccount.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import axios from 'axios';

const ActivateAccount = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const activateAccount = async () => {
      try {
        await axios.post(`https://url-shortener-oh7e.onrender.com/api/auth/activate/${token}`);
        setMessage('Your account has been activated successfully!');
        setTimeout(() => navigate('/login'), 5000); // Redirect after 5 seconds
      } catch (err) {
        console.error(err);
        setMessage('Activation link is invalid or has expired.');
      } finally {
        setLoading(false);
      }
    };

    activateAccount();
  }, [token, navigate]);

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Account Activation
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <Typography variant="body1">{message}</Typography>
        )}
      </Box>
    </Container>
  );
};

export default ActivateAccount;
