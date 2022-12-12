import axios from 'axios';

const HOST = process.env.REACT_APP_API_HOST || 'localhost:3001';

const api = axios.create({
  baseURL: `http://${HOST}/`,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: localStorage.getItem('token'),
  },
});

// export const setToken = (token) => {
//   api.defaults.headers.common.Authorization = token;
// };

export const requestPost = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestGet = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export default api;
