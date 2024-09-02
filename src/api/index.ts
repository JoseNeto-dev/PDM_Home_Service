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
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNWE1NGUyLTkyYzQtNDAxNy1hM2NlLWU5ZTU4ZmVjZTYxZSIsImlhdCI6MTcyNTI4MTM3NCwiZXhwIjoxNzI1MzY3Nzc0LCJzdWIiOiI1YTVhNTRlMi05MmM0LTQwMTctYTNjZS1lOWU1OGZlY2U2MWUifQ.NFKZiUW7YFLGm_W_xC-7FJrNgPnEGDWLt6xkXZhIOkA";
    const email = "joyce@gmail.com"; // Substitua pelo email do prestador autenticado

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