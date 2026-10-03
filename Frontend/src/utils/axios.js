//centeralized API setup

import axios from 'axios';
import qs from 'qs';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_UR||'/api',
    withCredentials: true,
    paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),//cntrl how query con 2 url stringify is sim to slugify
})

