import axios from "axios";

const api = axios.create({
  baseURL: "https://remitera-challenge.onrender.com"
});

export default api;