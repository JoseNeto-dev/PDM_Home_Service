import axios from 'axios';
import { configIp } from './config/configIp';
import { useContext } from 'react';


const baseURL = `http://${configIp.apiBaseUrl}:3005`;

export const api = axios.create({
  baseURL: baseURL

})

// Interceptador para adicionar automaticamente o token e o email no cabeçalho de todas as requisições feitas através da instância api. 
// api.interceptors.request.use(
//   (config) => {
  
//     // Simulando o token e o email pois ainda não está usando o contexto API
//     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMzMGNhMTdmLTcwNzMtNDRlMC1hNmU0LTVlMzYyODUzNTUzZiIsImlhdCI6MTcyNjE0MDQxOCwiZXhwIjoxNzI2MjI2ODE4LCJzdWIiOiJjMzBjYTE3Zi03MDczLTQ0ZTAtYTZlNC01ZTM2Mjg1MzU1M2YifQ.BKdgj5F5bEkzQnR50UN9d2nbyMsa8037Xy6yJImldIo";
//     const email = "joyce@gmail.com"; // Substitua pelo email do prestador autenticado

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     if (email) {
//       config.headers.email = email;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );