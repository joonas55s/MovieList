import React from 'react';

import { Container, Options, Button } from './styles';
import Profile from '../Profile';
import SearchBar from '../SearchBar';
import LOGO2 from '../../assets/LOGO2.png';
const TopBar: React.FC = ({ children }) => {
  return (
    <Container>

      <Options>
        <img src={LOGO2} />
        <Button>Series</Button>
        <Button>Filmes</Button>
        <Button>Mais recomendados</Button>
      </Options>

      <Options>
        <SearchBar placeholder="Search" />
        <Profile />
      </Options>

    </Container>
  );
}

export default TopBar;