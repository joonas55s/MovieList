import React from 'react';
import {BsFillPersonFill} from 'react-icons/bs';
import { Container,Foto} from './styles';

const TopBar: React.FC = ({children}) => {
  return (
    <Container>

        <strong>Jonas</strong>
        <Foto >
        <BsFillPersonFill size={35}/>
        </Foto>


    </Container>
  );
}

export default TopBar;