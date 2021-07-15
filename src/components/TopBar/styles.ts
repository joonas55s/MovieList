import styled from 'styled-components';


export const Container = styled.div`
    grid-area:TB;
    display:flex;
    align-items:center;
    background: var(--background);

    box-sizing: border-box;
    box-shadow: 0px 5px 5px rgba(255, 255, 255, 0.008);
    justify-content:space-between;
    padding:10px;


    z-index:1;
`;

export const Options = styled.div`
    display:flex;
    align-items:center;
    div + div{
        margin-left:15px;
    }

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        
        >img{
            height:60px;
            margin-right:20px;
            @media(max-width:800px){
                height:40px
            }
        }

        @media(max-width:800px){
            font-size: 16px;
            div + div{
                margin-left:20px;
            }
        }
    
`;

export const Button = styled.div`
    cursor: pointer;
    color:#FFFF;
    transition: color 0.3s;
    :hover{
        color:#88A9F0;
    }
`;

