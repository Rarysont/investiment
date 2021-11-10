import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5208-2804-431-c7f0-796e-69cb-4446-1f7-3465.ngrok.io',
});

export default api;
