// axios instance
// src/api.js
import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://asmita.onrender.com/api',
});

instance.interceptors.request.use((config) => {
   const token = localStorage.getItem('token');
   if (token) {
      config.headers['x-auth-token'] = token;
   }
   return config;
});

export default instance;
