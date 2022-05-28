import axios from "axios";

const apiKey = "6279760b4a5ef80e2c0a3b8a";
const version = "v1";
const endpoint = "products";
const baseURL = `https://${apiKey}.mockapi.io/api/${version}`;
const api = axios.create({
  baseURL,
});

const get = () => api.get(`/${endpoint}`);

const add = (data) => api.post(`/${endpoint}`, data);

const edit = (id) => api.put(id);

const remove = (id) => api.delete(id);

export { get, add, edit, remove };
