import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}login`, { username, password });
  return response.data;
};

export const register = async (username, firstName, lastName, password) => {
  const response = await axios.post(`${API_URL}register`, { username, firstName, lastName, password });
  return response.data;
};

export const forgotPassword = async (email) => {
  const response = await axios.post(`${API_URL}forgot-password`, { email });
  return response.data;
};
