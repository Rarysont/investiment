import axios from 'axios';

const api = axios.create({
  baseURL: 'https://60c3-2804-431-c7f1-7a1-11b2-b074-e33c-f55f.ngrok.io',
});

export default api;
