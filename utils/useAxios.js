import axios from 'axios';

const baseAxios = axios.create({
    baseURL: 'http://localhost:7700/api',
    timeout: 30000,
});

export const httpGet = async (url, config) => {
    return await baseAxios.get(url, config);
}

export const httpPost = async (url, payload, config) => {
    return baseAxios.post(url, payload, config);
}
