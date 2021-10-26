import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fc6d-2804-431-c7f0-fc6f-8908-b56e-7175-c2ae.ngrok.io',
});

export default api;
