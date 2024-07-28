import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@mui/material';

const CreateShortUrl = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('/api/url/shorten', { longUrl }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Create Short URL</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Shorten
        </Button>
      </form>
      {shortUrl && (
        <Typography variant="h6">Short URL: {shortUrl}</Typography>
      )}
    </Container>
  );
};

export default CreateShortUrl;
