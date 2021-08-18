import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';

axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
  'cuidar_access_token'
)}`;

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
