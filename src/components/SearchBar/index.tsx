import React,{HtmlHTMLAttributes} from 'react';

import { Container,Input} from './styles';
import {AiOutlineSearch} from 'react-icons/ai';
interface props extends HtmlHTMLAttributes<HTMLInputElement>{

}
const SearchBar: React.FC<props> = ({...rest}) => {
  return (
    <Container>
        <AiOutlineSearch/>
       <Input {...rest}></Input>

    </Container>
  );
}

export default SearchBar;