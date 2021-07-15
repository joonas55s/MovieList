import styled from 'styled-components';

interface Props{
    backgroundUrl:string;
}
export const Container = styled.div<Props>`
    display:flex;
    flex-direction:column;
    min-width:217px;

    align-items:flex-start;
    height:317px;
    
    

    background:url(${props=> props.backgroundUrl});
    background-repeat: no-repeat;
    /* background-size:cover; */
    background-position: center;
    background-size: 100%;

    transition: background-size 0.4s ease-in;
    -moz-transition: background-size 0.4s ease-in;
    -ms-transition: background-size 0.4s ease-in;
    -o-transition: background-size 0.4s ease-in;
    -webkit-transition: background-size 0.4s ease-in;
    :hover{
        background-size:110%;
        
    }
    
`;



export const Title= styled.div`
    height:18px;
    font-size:18px;
    font-weight:700;
    color:#ffff;
    overflow: hidden;
    text-overflow: ellipsis;

`;
export const Overlay= styled.div`
    display:flex;
    flex-direction:column;

    height:100%;
    width:100%;
    background:rgba(0,0,0,0);
   
    justify-content:space-between;
    padding:30px 10px 0 10px;
    transition:background 0.3s;

    div{
       
        visibility:hidden;
        transition:visibility 0.2s;
        
    }
     :hover{
        background:rgba(0,0,0,0.6);
        div{
            
            visibility:visible;
        }

     }


`;

export const Overview = styled.div`

    margin-top:50px;
    height:95px;
    width:100%;
    color:white;
    display: -webkit-box;

    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow-y:hidden;
    
    ::-webkit-scrollbar{
        display:none;
    }
`;