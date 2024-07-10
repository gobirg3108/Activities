import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Snackbar, Alert } from '@mui/material';
import axios from '../utils/api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('/forgotpassword', { email });
      console.log('Password reset email sent:', response.data);
      setSuccess(true);
      setError('');
      // Reset form
      setEmail('');
    } catch (error) {
      setError(error.response.data.message);
      setSuccess(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>Forgot Password</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <TextField
          fullWidth
          margin="normal"
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleForgotPassword}
        >
          Send Reset Email
        </Button>
        <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
          <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
            Password reset email sent successfully!
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
