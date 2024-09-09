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
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczY2E5ZjdhLTZkOWItNGNjZi05YTg1LTViNGJlZDJhMTIxNyIsImlhdCI6MTcyNTg5OTgzNSwiZXhwIjoxNzI1OTg2MjM1LCJzdWIiOiI3M2NhOWY3YS02ZDliLTRjY2YtOWE4NS01YjRiZWQyYTEyMTcifQ.Ple4x2M0wOko-AoHBYrcqnN0sPMeOKxri2oCmPcViwc";
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