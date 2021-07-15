import React from 'react';

import { Container, Title, Overlay,Overview } from './styles';
import Note from '../Note';

interface Props {
  title: string;
  backgroundUrl: string;
  note: number;
  overview?:string;
}
const MoviesObj: React.FC<Props> = ({ title, backgroundUrl,overview, note }) => {
  
  
  return (
    <Container backgroundUrl={backgroundUrl}>
      <Overlay>
        <Title>{title}</Title>
        <Overview>{overview}</Overview>
          {/* <strong>{overview}</strong> */}
        <Note note={note}/>
      </Overlay>
    </Container>
  );
}

export default MoviesObj;