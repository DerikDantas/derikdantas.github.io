import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 50px;
    
    .container-skills{
        display: flex;
        flex-direction: column;
        align-items: center;

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
    }
    
    
    h2{
        font-weight: bold;
        font-size: 30px
    }

    .box-icon{
        width: 25%;
        text-align: center;
        margin-top: 50px;

        h3{
            font-size: 24px;
            margin-top: 20px
        }
    }

    @media(max-width: 768px){
        .container-skills{
            .box-titulo{
                h1{
                    font-size: 40px
                }
            }
        }
        
        h2{
            font-weight: bold;
            font-size: 25px
        }
        .row{
            flex-direction: column;
            align-items: center;
        }
        .box-icon{
            width: 100%
        }
    }
`;
