import axios from "axios";

// /movie/now_playing?api_key=ab689815313a6cb4fd9a5df7af38599f&language=pt-BR
// BASE DA URL: https://api.themoviedb.org/3/
// KEY: ?api_key=ab689815313a6cb4fd9a5df7af38599f

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;