import axios from 'axios';

const api = axios.create({
  baseURL: 'https://e012-2804-431-c7f0-fc6f-d595-22e8-9e9d-6409.ngrok.io',
});

export default api;
