import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box, IconButton, InputAdornment, Alert, CircularProgress, Link } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await axios.post('https://urlshortener-l2ue.onrender.com/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setLoading(false);
      if (err.response) {
        if (err.response.data.email) {
          setError('Email not found.');
        } else if (err.response.data.password) {
          setError('Password incorrect.');
        } else if (err.response.data === 'Please activate your account.') {
          setError('Please activate your account.');
        } else {
          setError('Login failed.');
        }
      } else {
        setError('Login failed.');
      }
      console.error(err);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        {error && (
          <Alert severity="error" onClose={() => setError('')} style={{ marginBottom: '16px' }}>
            {error}
          </Alert>
        )}
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box mt={2} display="flex" justifyContent="center" alignItems="center">
            {loading ? (
              <CircularProgress />
            ) : (
              <Button variant="contained" color="secondary" type="submit" fullWidth>
                Login
              </Button>
            )}
          </Box>
          <Box mt={2} display="flex" justifyContent="center" alignItems="center">
            <Link href="/forgot-password" variant="body2">
              Forgot password?
            </Link>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
