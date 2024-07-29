import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';
import axios from 'axios';

const UrlShortener = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleShortenUrl = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://urlshortener-l2ue.onrender.com/api/url/create', { longUrl });
      setShortUrl(response.data.shortUrl);
    } catch (err) {
      console.error('Error fetching data:', err);
      const errorMsg = err.response ? err.response.data.message || 'Error shortening URL. Please try again.' : 'Network error. Please try again.';
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          URL Shortener
        </Typography>
        <form onSubmit={handleShortenUrl}>
          <TextField
            fullWidth
            label="Long URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            margin="normal"
            required
            error={Boolean(error)}
            helperText={error && "Please enter a valid URL."}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            disabled={loading}
          >
            {loading ? 'Shortening...' : 'Shorten URL'}
          </Button>
        </form>
        {error && (
          <Box mt={2}>
            <Alert severity="error">{error}</Alert>
          </Box>
        )}
        {shortUrl && (
          <Box mt={2}>
            <Typography variant="h6">Short URL:</Typography>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default UrlShortener;
