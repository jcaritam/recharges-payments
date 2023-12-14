import axios from 'axios'
import router from '../router'

const apiRechargesPayments = axios.create({
  baseURL: import.meta.env.VITE_URI_BACKEND,
});

apiRechargesPayments.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json';
    config.headers['Accept'] = 'application/json';
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
    config.headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token';
    config.headers['Access-Control-Allow-Credentials'] = 'true';

    const token = localStorage.getItem('token');
    console.log('token', token);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    Promise.reject(error)
  }
);

apiRechargesPayments.interceptors.response.use(
  response => response,
  error => {
    console.log('error', error);
    if (error.response && error.response.status === 401) {
      router.push({ name: 'unauthorized' });
    }

    return Promise.reject(error)
  }
);

export { apiRechargesPayments };