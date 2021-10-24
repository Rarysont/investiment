import axios from 'axios';

const api = axios.create({
  baseURL: 'https://1c8a-2804-431-c7f0-fc6f-d191-685b-2ae4-4ba9.ngrok.io',
});

export default api;
