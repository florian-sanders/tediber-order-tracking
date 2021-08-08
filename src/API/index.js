import axios from 'axios';

export default axios.create({
  baseURL: 'http://euhn2042.odns.fr/api',
  timeout: 5000,
});
