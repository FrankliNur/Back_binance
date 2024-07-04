import axios from 'axios';

// Configura una instancia de Axios con la URL base de tu servidor backend
const api = axios.create({
  baseURL: 'http://localhost:5000', // Asegúrate de que la URL coincida con tu backend
});

export default api;