import axios from 'axios';

const api = axios.create({
    
    baseURL: 'https://car-rental-backend-7n5k.onrender.com'
})

export default api;