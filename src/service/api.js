import axios from 'axios';

const api = axios.create({
  baseURL: 'https://33db-187-35-185-105.ngrok.io',
});

export default api;
