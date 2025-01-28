import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';

export const api = axios.create({ baseURL: BASE_URL });

export const registerUser = (data) => api.post('/users/', data);
export const getParkingPlaces = () => api.get('/parking-places/');
