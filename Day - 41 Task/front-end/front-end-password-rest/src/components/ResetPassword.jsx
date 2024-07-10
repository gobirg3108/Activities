import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Snackbar, Alert } from '@mui/material';
import axios from '../utils/api';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { resetToken } = useParams();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleResetPassword = async () => {
    try {
      const response = await axios.put(`/resetpassword/${resetToken}`, { password });
      console.log('Password reset successful:', response.data);
      setSuccess(true);
      setError('');
      // Reset form
      setPassword('');
    } catch (error) {
      setError(error.response.data.message);
      setSuccess(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>Reset Password</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <TextField
          fullWidth
          margin="normal"
          type="password"
          label="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleResetPassword}
        >
          Reset Password
        </Button>
        <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
          <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
            Password reset successful!
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default ResetPassword;
