import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat';
    }

    div#root {
        width: 100%;
        height: 100%;
    }
    html{
        overflow-x: hidden;
    }
    body{
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        margin: 0;    
        padding: 0;    
        transition: all 0.25s linear;
        overflow-x: hidden!important;
    }
`