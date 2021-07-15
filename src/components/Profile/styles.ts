import styled from 'styled-components';


interface ProfileProps{
  urlfoto?:string;
}
export const Container = styled.div`
  grid-area:TB;
  display:flex;
  align-items:center;
  
  strong{
      color:#ffff;
      font-style:normal;
      font-size:18px;
      margin-right:15px;
      transition:color 0.3s;
      :hover{
        color:#88A9F0;
      }

  }
  
  cursor: pointer;
`;

export const Foto = styled.div<ProfileProps>`

  display:flex;
  justify-content:center;
  align-items:center;
  color:rgba(255,255,255,0.8);
  height:48px;
  width:48px;
  background:rgba(255,255,255,0.2);
  /* background:#0000 url(${props=>props.urlfoto}); */
  background-size:120%;
  background-position:top;
  border-radius:5px;


`;
