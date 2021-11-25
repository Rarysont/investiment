import axios from 'axios';

const api = axios.create({
  baseURL: 'https://d1be-2804-431-c7f1-1561-2889-8a73-f21d-e50d.ngrok.io',
});

export default api;
