import React, { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import axios from 'axios';

const UrlTable = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/url');
        setUrls(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUrls();
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>All URLs</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Long URL</TableCell>
              <TableCell>Short URL</TableCell>
              <TableCell>Click Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {urls.map((url) => (
              <TableRow key={url._id}>
                <TableCell>{url.longUrl}</TableCell>
                <TableCell><a href={url.shortUrl} target="_blank" rel="noopener noreferrer">{url.shortUrl}</a></TableCell>
                <TableCell>{url.clickCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default UrlTable;
