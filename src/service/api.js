import axios from 'axios';

const api = axios.create({
  baseURL: 'https://78a2-2804-431-c7f0-1c40-3df5-34e4-a7b4-a619.ngrok.io',
});

export default api;
