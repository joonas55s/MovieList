import styled from 'styled-components';

export const Container = styled.div`

  display:flex;
  align-items:center;
  justify-content:center;
  margin-right:10px;
  background: transparent;
  
  border-bottom:2px solid #2D2F34;
  padding-left:10px;

  svg{
    color:rgba(255,255,255,0.5);
   
  }
  transition:color 0.3s;
    :hover{
      svg{
        color:#88A9F0;
      }
  }
  @media(max-width:800px){
    margin-right:10px;
    width:200px;
    height:38px;
    justify-content:flex-start;
  }
  @media(max-width:1100px){
    margin-right:20px;
  }
  transition:border-color 0.3s;
  :hover{
    border-color:#88A9F0;
  }
`;

export const Input= styled.input`

  display:flex;
  background: transparent;
  
  height:39px;
  width:300px;
  outline:none;
  color:rgba(255,255,255,0.5);
   padding-left:10px;
   font-size:16px;
   font-weight:bold;
  border:none;
  

`;

