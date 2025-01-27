import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
    baseURL: 'http://localhost:8080',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
};

const axiosInstance: AxiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
