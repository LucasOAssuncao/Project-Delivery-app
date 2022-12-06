import axios from 'axios';

const HOST = process.env.REACT_APP_API_HOST || 'localhost:3001';

const request = axios.create({
  baseURL: `http://${HOST}/`,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const api = async (method, endpoint, body, headers) => request
  .request({ method, url: endpoint, data: body, headers })
  .then(({ status, data }) => ({ status, data }))
  .catch((error) => error.toJSON());

export default api;
