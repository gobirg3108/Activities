import axios from 'axios';

const API_URL = 'https://urlshortener-l2ue.onrender.com/api/url/create';

export const shortenUrl = async (longUrl) => {
  const response = await axios.post(`${API_URL}shorten`, { longUrl });
  return response.data;
};

export const fetchUrls = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
