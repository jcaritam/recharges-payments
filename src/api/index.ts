import axios from 'axios'
import router from '../router'

const apiRechargesPayments = axios.create({
  baseURL: 'http://bun-burn-env.eba-ftyx2m3h.us-east-1.elasticbeanstalk.com'
});

apiRechargesPayments.interceptors.request.use(
  config => {
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