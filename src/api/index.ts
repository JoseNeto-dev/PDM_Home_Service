import axios from 'axios';
import { configIp } from './configIp';

const baseURL = `http://${configIp.apiBaseUrl}:3005`;

export const api = axios.create({
  baseURL: baseURL

})

// Interceptador para adicionar automaticamente o token e o email no cabeçalho de todas as requisições feitas através da instância api. 
api.interceptors.request.use(
  (config) => {
    // Simulando o token e o email pois ainda não está usando o contexto API
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU2ZTdhNmRlLTg4ZjUtNGM2MS05Y2YyLTgzYTdmNmIwOTc2OSIsImlhdCI6MTcyNTIyMTIyMCwiZXhwIjoxNzI1MzA3NjIwLCJzdWIiOiI1NmU3YTZkZS04OGY1LTRjNjEtOWNmMi04M2E3ZjZiMDk3NjkifQ.sQXcDsGeTQqFOsnCamQNYF_lzB1lODPWYnndSneJaQE";
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