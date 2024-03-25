import axios, { AxiosInstance } from "axios";

console.log(process.env.NEXT_APP_BACKEND_URL);
const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 100000,
});

export default axiosInstance;
