import React,{useEffect,useState} from 'react';

import { Container,Banner,Data,Details,Poster,Title} from './styles';
import api from '../../services/api';
import MovieCategories from '../MovieCategories';
import Note from '../Note';
interface PropsCategories {
  id: number;
  name: string;
}

interface BannerProps{
  backdrop_path:string;
  title:string;
  overview:string;
  poster_path: string;
  vote_average: number;
}
const Catalog: React.FC = ({children}) => {
  const [categories, setCategories] = useState<PropsCategories[]>([]);
  const[banner,setBanner] = useState<BannerProps>();

  useEffect(()=>{
    api.get("https://api.themoviedb.org/3/genre/movie/list?api_key=36ab7481e20d4e0a5e84048036212508&&language=pt-br").then(response => setCategories(response.data.genres));
    api.get("https://api.themoviedb.org/3/movie/346910?api_key=36ab7481e20d4e0a5e84048036212508&language=pt-br").then(response => setBanner(response.data));
  },[]);

  useEffect(()=>{
    console.log(banner);
  })
  return (
    <Container>
      <Data>
        <Banner backgroundUrl={"https://image.tmdb.org/t/p/w1920_and_h800_multi_faces"+banner?.backdrop_path}>
          <Details>
            <div>
              <Poster backgroundUrl={"https://image.tmdb.org/t/p/w500"+banner?.poster_path}/>
            </div>
            <div>
              <Title>
                <h1>{banner?.title}</h1>
              </Title>
              <strong>{banner?.overview}</strong>
              <Note note={banner?.vote_average!+0} />
            </div>
          </Details>
        </Banner>
        {categories.length >0  && categories.map((cat)=>
        <MovieCategories  title={cat.name} id={cat.id}/>
        )}

      </Data>
    </Container>
  );
}

export default Catalog;