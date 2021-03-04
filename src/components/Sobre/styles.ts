import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 35px;

    .container-sobre{
        display: flex;
        flex-direction: column;
        align-items: center;

        .box-titulo{
            border: 5px solid ${({ theme }) => theme.text};
            text-align: center;
            width: 50%
        }
        h1{
            font-weight: bold;
            font-size: 80px;
            letter-spacing: 5px;
            margin: 0;
        }

        .box-descricao{
            text-align: center;
            margin: 45px 0;

            p{
                margin: 0;
                padding: 0;
            }
        }

        .box-promo{
            margin: 100px;

            .alg-center, .card-promo {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;

                h2{
                    color: ${({ theme }) => theme.text};
                    margin-top: 35px;
                    font-size: 20px;
                    text-transform: uppercase;
                }
            }
            .hexagono {
                width: 100px;
                height: 55px;
                background: #4e54c8;
                position: relative;

                img{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 150px;
                    height: auto;
                }

                &:before{
                    content: "";
                    position: absolute;
                    top: -25px;
                    left: 0;
                    width: 0;
                    height: 0;
                    border-left: 50px solid transparent;
                    border-right: 50px solid transparent;
                    border-bottom: 25px solid #4e54c8;
                }

                &:after{
                    content: "";
                    position: absolute;
                    bottom: -25px;
                    left: 0;
                    width: 0;
                    height: 0;
                    border-left: 50px solid transparent;
                    border-right: 50px solid transparent;
                    border-top: 25px solid #4e54c8;
                }
            }

        }
        
    }


    .separator{
        filter: ${({ theme }) => theme.separatorColor};
    }
    .rotate-img{
        transform: rotate(180deg);
    }

    @media(max-width: 768px){
        .container-sobre{
            h1{
                font-size: 40px
            }
        }

        .box-promo{
            margin: 100px 0;
        }
        
        .row{
            flex-direction: column;
        }
        .card-promo{
            margin: 30px 0;
        }
    }
`;
