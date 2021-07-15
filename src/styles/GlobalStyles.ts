import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle `

*{
padding:0;
margin:0;
box-sizing:border-box;
}
body, html, #root{
  height:100%;
  font-family:"Roboto";
}
:root{
  --background: #121518;
  --backgroundBold: #0C0B10;
  --border:#222529;
}

`;