//centeralized API setup

import axios from 'axios';
import qs from 'qs';
console.log("API BASE URL =", import.meta.env.VITE_API_BASE_URL);

export const axiosInstance = axios.create({
    baseURL: "https://homelyhub-1vww.onrender.com/api",
    withCredentials: true,
    paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),//cntrl how query con 2 url stringify is sim to slugify
})

