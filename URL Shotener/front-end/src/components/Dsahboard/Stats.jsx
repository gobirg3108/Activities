import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import axios from 'axios';

const Stats = () => {
  const [dailyUrls, setDailyUrls] = useState(0);
  const [monthlyUrls, setMonthlyUrls] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/stats', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setDailyUrls(response.data.dailyUrls);
        setMonthlyUrls(response.data.monthlyUrls);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStats();
  }, []);

  return (
    <Container>
      <Typography variant="h4">Stats</Typography>
      <Typography variant="h6">Daily URLs: {dailyUrls}</Typography>
      <Typography variant="h6">Monthly URLs: {monthlyUrls}</Typography>
    </Container>
  );
};

export default Stats;
