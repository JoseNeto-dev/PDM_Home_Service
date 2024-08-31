import axios from 'axios';
import { configIp } from './configIp';

const baseURL = `http://${configIp.apiBaseUrl}:3005`;

export const api = axios.create({
  baseURL: baseURL

})