import axios from 'axios';

const hpptRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (patch, options = {}) => {
    const response = await hpptRequest.get(patch, options);
    return response.data;
};

export default hpptRequest;
