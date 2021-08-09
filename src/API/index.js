import axios from 'axios';

export default axios.create({
  baseURL: 'https://tediber.cod-access-demo.fr/api',
  timeout: 5000,
});
