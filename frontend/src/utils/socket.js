// utils/socket.js
import { io } from 'socket.io-client';

// Create a shared socket instance with the backend server
const socket = io('https://agri-connect-ruwo.onrender.com/'); // Replace with your server's URL if needed

export default socket;
