import React from 'react';

import { Container,Foto,Data,Description,Title,Tag} from './styles';
import Note from '../Note';
interface props{
  name:string;
  genre:string;
  note:number;
  urlImg:string;
}
const BestMovies: React.FC<props>= ({name,genre,note,urlImg}) => {
  return (
    <Container>
      <Foto urlImg={urlImg}/>
      <Data>
        <Description>
          <Title>{name}</Title>
          <strong>{genre}</strong>
        </Description>
        <Note note={note}></Note>
        
      </Data>
      

    </Container>
  );
}

export default BestMovies;