import axios from 'axios';

const api = axios.create({
  baseURL: 'https://f786-2804-431-c7f1-a145-35dc-189a-2c68-3355.ngrok.io',
});

export default api;
