import React, { useEffect, useState } from 'react';
import { api } from '../../utils/api';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Stats = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/urls/stats');
      const stats = response.data;
      setData({
        labels: stats.labels,
        datasets: [
          {
            label: 'URLs Created',
            data: stats.data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }
        ]
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>URL Statistics</h2>
      <Bar data={data} />
    </div>
  );
};

export default Stats;
