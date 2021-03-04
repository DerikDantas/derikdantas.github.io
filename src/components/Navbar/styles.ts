import styled from 'styled-components';

export const Container = styled.div`
    padding: 35px;
    height: auto;
    width: 100%;
    z-index: 999;
    position: absolute;
    
    
    nav{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
    }

    ul{
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin: 0;
        padding: 0;

        li > a {
            color: ${({ theme }) => theme.text};
            text-decoration: none;
            font-weight: 700;
            padding: 10px 15px;

            &:hover{
                border: 2px solid ${({ theme }) => theme.text};
            }
        }
    }

    
    button{
        background: none;
        border: 2px solid ${({ theme }) => theme.toggleBorder};
        border-radius: 10px;
        padding: 5px 15px;

        &:focus{
            outline: none;
        }
    }
    

    .menu-toggle{
        display: none;
    }

    @media(max-width: 768px){
        position: relative;
                
        nav{
            display: none;
            margin-top: 40px;

            div{
                text-align: center;
            }
        }
        
        .menu-toggle{
            display: block;
            width: 40px;
            height: 30px;
            margin-right: 20px;
            position: absolute;
            right: 25px;
            top: 15px;
        }

        
        .one,
        .two,
        .three {
            background-color: ${({ theme }) => theme.text};
            height: 5px;
            width: 100%;
            margin: 6px auto;

            transition-duration: 0.3s;
        }
        .menu-section.on nav {
            display: block;
        }

        .menu-section.on .menu-toggle {
            position: absolute;
            right: 25px;
            top: 15px;

        }

        .menu-section.on .menu-toggle .one {
            transform: rotate(45deg) translate(7px, 7px);
        }

        .menu-section.on .menu-toggle .two {
            opacity: 0;
        }

        .menu-section.on .menu-toggle .three {
            transform: rotate(-45deg) translate(8px, -9px);
        }

        .menu-section.on nav ul {
            text-align: center;
            display: block;
        }

        .menu-section.on nav ul a{
            transition-duration: 0.5s;
            line-height: 4rem;
            display: block;
            border: none;
        }

    }
`;
