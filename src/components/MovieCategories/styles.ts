import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    flex:1;
    
   
    >h2{
        color:white;
        margin-bottom:20px;
    }
    margin-top:30px;
    

`;

export const Movies = styled.div`

   display:flex;
   overflow-x:scroll;
   cursor: pointer;
   height:350px;
   ::-webkit-scrollbar {
    width: 5px;
    height:10px;
    
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background:rgba(14,16,19,1); 
    
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background:rgba(23,27,32,1); 
         
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background:rgba(33,38,46,1); 

    }
`;