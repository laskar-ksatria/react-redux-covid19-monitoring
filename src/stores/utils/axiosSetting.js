import axios from 'axios';

//BaseAPI
const BaseAPI = 'https://covid19.mathdro.id/api';

//initial axios instance
export const axiosInstance = axios.create({
    baseURL: BaseAPI,
    method: 'GET',
})