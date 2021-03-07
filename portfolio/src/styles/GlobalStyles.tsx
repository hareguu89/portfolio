import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        width: 100%;
        font-size: 1rem;
        font-family: Helvetica;
        color: white;
        background-color: rgb(21,21,31);
    }
    input{
        border: 0;
    }
    input:focus{
        outline: none;
    }
`;

export default globalStyles;
