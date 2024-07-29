import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Paper, Grid, CircularProgress } from '@mui/material';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title);

const Dashboard = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          setError('No authentication token found');
          setLoading(false);
          return;
        }

        console.log('Token:', token); // Debugging log
        const response = await axios.get('http://localhost:5000/api/dashboard/stats', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error:', err.response ? err.response.data : err.message); // Improved error logging
        setError('Failed to fetch data');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const chartData = {
    labels: data.labels || [],
    datasets: [
      {
        label: 'URLs Created',
        data: data.values || [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      }
    ]
  };

  if (loading) {
    return (
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Box mt={5} textAlign="center">
          <Typography variant="h6" color="error">{error}</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6" gutterBottom>
            URL Statistics
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Line data={chartData} options={{ responsive: true, plugins: { title: { display: true, text: 'URL Statistics Over Time' } } }} />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;
