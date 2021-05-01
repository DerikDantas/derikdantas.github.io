import styled from 'styled-components';

export const Container = styled.div`
    padding: 50px 0 150px 0;

    .container-contato{
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
            text-decoration: uppercase;
        }
    }
    


    .form-contato{
        margin-top: 35px;
        position: relative;;
        width:50vw;
        height:60vh;
        border-radius: 15px;
        padding: 10px;
        text-align: center;

        img{
            margin: 20px;
        }

        h2{
            font-size: 30px;
            text-align: center;
        }
        .feedback-input {
            color:${({ theme }) => theme.text};;
            font-weight:500;
            font-size: 18px;
            border-radius: 5px;
            line-height: 22px;
            background-color: transparent;
            border:2px solid #4e54c8;
            transition: all 0.3s;
            padding: 13px;
            margin-bottom: 15px;
            width:100%;
            box-sizing: border-box;
            outline:0;
        }
        
        .feedback-input:focus { border:2px solid ${({ theme }) => theme.text}; }
        
        textarea {
            height: 150px;
            line-height: 150%;
            resize:vertical;
        }
        
        [type="submit"] {
            width: 100%;
            background:#CC4949;
            border-radius:5px;
            border:0;
            cursor:pointer;
            color: ${({ theme }) => theme.text};
            font-size:24px;
            padding-top:10px;
            padding-bottom:10px;
            transition: all 0.3s;
            margin-top:-4px;
            font-weight:700;
        }
        [type="submit"]:hover { background:#4e54c8; color: white}
    }

    @media(max-width: 768px){
        padding: 100px 0;
        
        .container-contato{
            .box-titulo{
                width: 60%
            }
            h1{
                font-size: 40px;
            }
        }

        .form-contato{
            width: 100%
        }
    }
    
`;
