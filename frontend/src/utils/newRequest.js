import axios from 'axios'
axios.defaults.withCredentials = true;
const newRequest = axios.create({
    baseURL: "https://agri-connect-2-d3lh.onrender.com/api",
    withCredentials: true,
})

export default newRequest;