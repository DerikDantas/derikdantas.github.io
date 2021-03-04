import styled from 'styled-components';

export const Container = styled.div`
    background: ${({ theme }) => theme.backgroundFooter};
    color: ${({ theme }) => theme.footerText};
    text-align: center;
    padding-bottom: 50px;

    button{
        background: ${({ theme }) => theme.toggleBackground};
        border: 2px solid ${({ theme }) => theme.toggleBorder};
        border-radius: 30px;
        position: fixed;
        bottom: 30px;
        left: 30px;
        height: 60px;
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: ${({ theme }) => theme.toggleShadow};

        &:focus{
            outline: none;
        }

        i{  
            font-size: 25px;
            color: ${({ theme }) => theme.toggleThemeI};
        }

    }

    .btn-scroll{
        background: #4e54c8;
        cursor: pointer;
        font-size: 20px;
        height: 50px;
        border-radius: 50%;
        left: 0;
        line-height: 45px;
        margin: 0 auto;
        position: relative;
        right: 0;
        top: -20px;
        width: 50px;
        box-shadow: 0 5px 15px -5px #00000070;
        color: ${({ theme }) => theme.text};
    }

    .btn-redes{
        color: ${({ theme }) => theme.footerText};
        font-size: 35px;
        margin: 0 20px;

        &:hover{
            color: #4e54c8   
        }
    }

    h2{
        font-size: 20px;
        font-weight: 400;
        cursor: context-menu;
    }

    a{
        color: ${({ theme }) => theme.footerText};
        text-decoration: none;

        &:hover{
            color: #4e54c8
        }
    }

    @media(max-width: 768px){
        button{
            right: 25px;
            bottom: 25px;
        }
    }
`;
