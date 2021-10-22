import axios from 'axios';

const api = axios.create({
  baseURL: 'http://09bc-2804-431-c7f0-9b34-1fb-96a8-81d4-a688.ngrok.io',
});

export default api;
