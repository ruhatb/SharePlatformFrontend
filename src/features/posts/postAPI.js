import axios from 'axios';

const API_URL = 'http://localhost:9000/api';

const fetchPosts = () => {
  return axios.get(`${API_URL}/posts`);
};

export default {
  fetchPosts,
};
