import ApiService from 'utils/api';
import { apiWeb, apiBase } from '../config';

const BASE_URL = process.env.REACT_APP_BASE_URL
const client = new ApiService({
  baseURL: BASE_URL,
});

const webClient = new ApiService({
  baseURL: apiWeb,
});

const managementClient = new ApiService({
  baseURL: apiBase,
});

const authApi = {};

authApi.login = (username, password) => managementClient.post(`/api/firm/getToken`, {
  username,
  password,
});

authApi.loginSuperAdmin = (username, password) => client.post(`/superadmin/login`, {
  username,
  password,
});

authApi.loginSupervisitor = (username, password) => client.post(`/supervisitor/login`, {
  username,
  password,
});

authApi.register = (username, password, email) => webClient.post(`/pilot/register`, {
  name: username,
  password,
  password_confirmation: password,
  email
})

authApi.activate = (token) => webClient.get(`/pilot/activate/${token}`, {})

export default authApi;
