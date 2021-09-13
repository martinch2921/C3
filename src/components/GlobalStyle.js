import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media (max-width: 1700px){
        font-size: 80%;
    }
    @media (max-width: 1300px){

    }
}

body{
    background: whitesmoke;
    font-family: 'Montserrat', sans-serif;
}
button{
    font-weight: bold;
    font-size: 1.1.rem;
    border-radius: 25px;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #3FBDF1;
    background: transparent;
    color: black;
    transition: all 0.2s ease;
    font-family: 'Montserrat', sans-serif;
    &:hover{
        background-color: #16b8f3;
        color: white;
    }
}
h2{
    font-weight: lighter;
    font-size: 4rem;  
}

h3{
    color: #3FBDF1;
    
}

p{
    padding: 3rem 0rem;
    color: #1f1d1c;
    font-size: 1.4rem;
    line-height: 150%;
}
h4{
    font-weight: bold;
    font-size: 2rem;
    
}
a{
    font-size: 1.1rem;
}
span{
    font-weight: bold;
    color: #3FBDF1;   
}

`;

export default GlobalStyle;


