import axios from 'axios';

const API_URL = 'https://your-api-url.com';

const fetchPosts = () => {
  return axios.get(`${API_URL}/posts`);
};

export default {
  fetchPosts,
};
