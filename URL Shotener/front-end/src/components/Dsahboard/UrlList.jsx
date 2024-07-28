import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const UrlList = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/url', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUrls(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUrls();
  }, []);

  return (
    <Container>
      <Typography variant="h4">Your URLs</Typography>
      <List>
        {urls.map((url) => (
          <ListItem key={url._id}>
            <ListItemText primary={url.shortUrl} secondary={url.longUrl} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default UrlList;
