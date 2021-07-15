import styled from 'styled-components';


interface Props{
  backgroundUrl:string;
}
export const Container = styled.div`
  grid-area:CO;
  display:flex;
  
  flex-direction:column;
  /* justify-content:space-between; */
  align-items:center;
  padding-top:10px;
  background:var(--background);
  overflow-y:scroll;

  ::-webkit-scrollbar{
    display:none;
  }
  background:linear-gradient(to top, rgba(12, 14, 16, 1) 5%, rgba(18, 21, 24, 1) 50%); 
`;

export const Banner = styled.div<Props>`
  display:flex;
  flex:1;
  min-height:60vh;
  background:url(${props => props.backgroundUrl});
  border-radius:5px;
  background-repeat: no-repeat;

  background-position: top;
  background-size: 100%;

  transition:background-size 1s;
  :hover{
    background-size: 105%;
  }


`;
export const Details = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
 height:100%;
 width:100%;
 padding:10px;
 border-radius:5px;

 background:
 linear-gradient(90deg, rgba(18, 21, 24, 1) 5px, rgba(18, 21, 24, 0) 50%),
 linear-gradient(-90deg, rgba(18, 21, 24, 1) 5px, rgba(18, 21, 24, 0.0) 50%),
 linear-gradient(180deg, rgba(18, 21, 24, 0.5) 5px, rgba(18, 21, 24, 0.1) 50%),
 linear-gradient(360deg, rgba(18, 21, 24, 0.5) 5px, rgba(18, 21, 24, 0.1) 50%); 
  h1{
    color:white;
  }
 
  >div{
    
    display:flex;
    max-width:500px;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    padding-left:10px;
    >strong{
      margin-top:20px;
      color:rgba(255,255,255,0.8);
      font-weight:normal;
      margin-bottom:60px;
    }
    height:auto;
  }
  padding:20px;

  div + div{
    margin-top:10px;
  }
`;
export const Title = styled.div`

  


`;
export const Data = styled.div`

 display:flex;
 flex-direction:column;
 max-width:95%;
  
`;

export const Poster = styled.div<Props>`

  height:300px;
  width:200px;
  border-radius:5px;
  background:red;
  background:url(${props => props.backgroundUrl}) no-repeat center;
  background-size:100%;
`;