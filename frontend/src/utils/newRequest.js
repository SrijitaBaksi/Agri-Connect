import axios from 'axios';

const token = document.cookie
  .split('; ')
  .find((row) => row.startsWith('token='))
  ?.split('=')[1];

const newRequest = axios.create({
  // baseURL: "https://weather-xgyu.onrender.com", // this is for the original link dont use this please
  baseURL: "https://agri-connect-ruwo.onrender.com",
  // baseURL: "http://localhost:8000",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true,  // This keeps cookies in requests
});

export default newRequest;
