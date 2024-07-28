import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success'); // 'error' or 'success'

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/forgot', { email }); // Adjusted endpoint
      setAlertMessage('Password reset email sent!');
      setAlertSeverity('success');
    } catch (err) {
      console.error(err);
      setAlertMessage('Error sending password reset email');
      setAlertSeverity('error');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>Forgot Password</Typography>
        {alertMessage && (
          <Alert
            severity={alertSeverity}
            onClose={() => setAlertMessage('')}
            style={{ marginBottom: '16px' }}
          >
            {alertMessage}
          </Alert>
        )}
        <form onSubmit={handleForgotPassword}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Reset Password
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
