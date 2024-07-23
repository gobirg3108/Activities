import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';

const UrlShortener = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShortenUrl = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/url/shorten', { longUrl });
      setShortUrl(response.data.shortUrl);
    } catch (err) {
      console.error(err);
      alert('Error shortening URL');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>URL Shortener</Typography>
        <form onSubmit={handleShortenUrl}>
          <TextField
            fullWidth
            label="Long URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            margin="normal"
            required
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Shorten URL
          </Button>
        </form>
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
