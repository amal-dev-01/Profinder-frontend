import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import dayjs from 'dayjs'; 

const baseURL = 'http://127.0.0.1:8000';
let token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null;

const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${token?.access}` },
});

axiosInstance.interceptors.request.use(async (req) => {
  if (!token) {
    token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null;
    req.headers.Authorization = `Bearer ${token?.access}`;
  }

  const user = jwtDecode(token.access);
  const isExpired = dayjs.unix(user.exp).isBefore(dayjs());  // Compare if token is expired
  if (!isExpired) return req;

  try {
    const response = await axios.post(`${baseURL}/token/refresh/`, {
      refresh: token.refresh,
    });

    
    localStorage.setItem('token', JSON.stringify(response.data));
    req.headers.Authorization = `Bearer ${response.data.access}`;
  } catch (refreshError) {
    console.error('Error refreshing token:', refreshError);
  }

  return req;
});

export default axiosInstance;
