import styled from 'styled-components';

export const Grid = styled.div`


  display:grid;
  grid-template-columns:auto 300px;
  grid-template-rows:60px auto;
  grid-template-areas:
  "TB TB"
  "CO CO";
  height:100%;
  @media(max-width:800px){
    grid-template-columns:auto;
    grid-template-rows:60px;
    grid-template-areas:
    "TB"
    "CO";
  }
`;