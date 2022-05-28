import axios from "axios";

// BASE DA URL: https://api.themoviedb.org/3/
// KEY:

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;