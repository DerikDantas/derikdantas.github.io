import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    p{
        text-align: center;
        margin: 30px 0;
    }

    a{
        color: ${({ theme }) => theme.text};
        text-decoration: none;

        &:hover{
            text-decoration: underline;
            font-weight: 500;
        }
    }
    
    .box-titulo{
        border: 5px solid ${({ theme }) => theme.text};
        text-align: center;
        width: 50%;

        h1{
            font-weight: bold;
            font-size: 80px;
            letter-spacing: 5px;
            margin: 0;
        }
    }

    .row{

        .col-md-6{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .logo-1{
            width: 35%;
            height: auto;
        }
        .logo-2{
            width: 25%;
        }
    }

    @media(max-width: 768px){
        height: auto;
        margin-top: 100px;
        
        .box-titulo{
            width: 60%;

            h1{
                font-size: 30px;
            }
        }

        img{
            margin: 30px 0;
        }
    }
        
`;  
