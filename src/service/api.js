import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fce8-2804-431-c7f0-fc6f-4551-c392-ba42-3de9.ngrok.io',
});

export default api;
