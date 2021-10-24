import axios from 'axios';

const api = axios.create({
  baseURL: 'https://60c7-2804-431-c7f1-793f-29b1-5e2a-1fa5-5fbc.ngrok.io',
});

export default api;
