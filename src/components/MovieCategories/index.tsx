import React, { useEffect,useState } from 'react';
import api from '../../services/api';

import { Container, Movies } from './styles';
import MoviesObj from '../MoviesObj';
interface Props {
  title: string;
  id:number;

}
interface Propsmovies {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  genre_ids: [];
  overview:string;
  
}
const MovieCategories: React.FC<Props> = ({ title,id }) => {
  const [movies, setmovies] = useState<Propsmovies[]>([]);

 
  useEffect(() => {
    api.get(`https://api.themoviedb.org/3/discover/movie?api_key=36ab7481e20d4e0a5e84048036212508&language=pt-br&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate&language=pt-br`).then(response => setmovies(response.data.results));

  }, []);

  return (
    <Container>
      <h2>{title}</h2>
      <Movies>
      {movies.length >0  && movies.map((movie)=>
      <MoviesObj title={movie.title} overview={movie.overview}  note={movie.vote_average} backgroundUrl={"https://image.tmdb.org/t/p/w500"+movie.poster_path}/>
      )}

      </Movies>
    </Container>
  );
}

export default MovieCategories;