import axios from "axios";

// BASE DA URL: https://api.themoviedb.org/3/
// KEY:

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`
});

export default api;