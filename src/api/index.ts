import axios from 'axios';
import { configIp } from './config/configIp';

const baseURL = `http://${configIp.apiBaseUrl}:3005`;

export const api = axios.create({
  baseURL: baseURL

})

// Interceptador para adicionar automaticamente o token e o email no cabeçalho de todas as requisições feitas através da instância api. 
api.interceptors.request.use(
  (config) => {
    // Simulando o token e o email pois ainda não está usando o contexto API
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdiYWU4YWZjLTJlZmUtNDQzZS1iNTJhLWZmZTFmNmU3ZTVhZiIsImlhdCI6MTcyNTk5MjQ0NSwiZXhwIjoxNzI2MDc4ODQ1LCJzdWIiOiI3YmFlOGFmYy0yZWZlLTQ0M2UtYjUyYS1mZmUxZjZlN2U1YWYifQ.njl2zexyTeL4V_QR7RDBydRYOOqQRJemrI182GHwQBU";
    const email = "joaozin@gmail.com"; // Substitua pelo email do prestador autenticado

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (email) {
      config.headers.email = email;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);