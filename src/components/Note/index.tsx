import React from 'react';
import { Container,Tag } from './styles';

interface Props{
    note:number;
}
const Note: React.FC<Props> = ({note}) => {
  return (
    <Container>
        <Tag>TMDB</Tag>
        <strong>{note}</strong>
    </Container>
    );
}

export default Note;