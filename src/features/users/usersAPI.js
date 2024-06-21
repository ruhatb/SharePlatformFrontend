import axios from 'axios';

const API_URL = 'http://localhost:9000/api';

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
