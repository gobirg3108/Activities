import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box, Alert, CircularProgress } from '@mui/material';
import axios from 'axios';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`https://url-shortener-oh7e.onrender.com/api/auth/reset/${token}`, { password });
      setSuccess('Your password has been successfully reset.');
      setTimeout(() => navigate('/login'), 3000); // Redirect after 3 seconds
    } catch (err) {
      setLoading(false);
      if (err.response) {
        setError(err.response.data || 'An error occurred. Please try again.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Reset Password
        </Typography>
        {error && (
          <Alert severity="error" onClose={() => setError('')} style={{ marginBottom: '16px' }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" style={{ marginBottom: '16px' }}>
            {success}
          </Alert>
        )}
        <form onSubmit={handleResetPassword}>
          <TextField
            fullWidth
            label="New Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            margin="normal"
            required
          />
          <Box mt={2} display="flex" justifyContent="center" alignItems="center">
            {loading ? (
              <CircularProgress />
            ) : (
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Reset Password
              </Button>
            )}
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default ResetPassword;
