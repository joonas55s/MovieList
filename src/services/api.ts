import axios from 'axios';


const api = axios.create({
    //baseURL:'https://api.themoviedb.org/3/trending/all/day?api_key=36ab7481e20d4e0a5e84048036212508',
    //https://api.themoviedb.org/3/genre/movie/list?api_key=36ab7481e20d4e0a5e84048036212508&language=en-US
});

export default api;