import styled from 'styled-components';


interface props{
  urlImg:string;
}
export const Container = styled.div`
  
  display:flex;
  flex:1;
  margin-top:10px;
 
  padding:5px;
  border-radius:5px;
  transition: background-color 0.2s;
  :hover{
    background:#222529;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
  cursor: pointer;
`;


export const Foto = styled.div<props>`
 
  height:101px;
  border-radius: 5px;
  background-image: url(${props => props.urlImg});
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  margin-right:15px;
  width:68px;
`;
export const Data = styled.div`
  display:flex; 
  flex-direction:column;
  flex:1;
  justify-content:space-between;
  strong{
    font-weight: normal;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
  }
  
`;
export const Title= styled.div`
    height:18px;
    font-size:15px;
    font-weight:700;
    color:#ffff;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const Description = styled.div`
  display:flex;
  flex-direction:column;
  padding-top:10px;
`;
export const Nota = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  >strong{
    font-weight: bold;
    font-size: 16px;
  }
  margin-bottom:10px;
`;



export const Tag = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 45px;
  height: 20px;
  background: #FF961B;
  border-radius: 5px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  margin-right:5px;
`;
