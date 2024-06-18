import axios from 'axios';

const API_URL = 'https://your-api-url.com';

const login = (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};

const register = (credentials) => {
  return axios.post(`${API_URL}/register`, credentials);
};

export default {
  login,
  register,
};
