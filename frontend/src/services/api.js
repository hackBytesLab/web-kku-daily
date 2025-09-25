import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL || '/api';
const api = axios.create({ baseURL });

export default api;
