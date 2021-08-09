import axios from 'axios';

export default axios.create({
  baseURL: 'https://tediber.florian-sanders.fr/api',
  timeout: 5000,
});
