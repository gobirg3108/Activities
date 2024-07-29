import axios from 'axios';

const API_URL = 'https://url-shortener-oh7e.onrender.com/api/dashboard/stats';

export const fetchStats = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
