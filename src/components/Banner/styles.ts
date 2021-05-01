import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    place-content: center;
    place-items: center;
    height: 100vh;

    h1{
        cursor: context-menu;
        display: inline-block;
        color: ${({ theme }) => theme.text};
        letter-spacing: 3px;
        font-size: 5rem;

        span{
          display: inline-block;
          font-family: 'Luckiest Guy', cursive;
          animation-duration: 1s;
          animation-fill-mode: both;
          animation-iteration-count: 1;

        &:hover{
          color: #4e54c8;
          transition: all .5s;
          animation-name: rubberBand;
        }
        
      }
    }

    .name{
      color: #4e54c8;
      font-size: 105px;
    }
    

    p{
        color: #919191;
        font-weight: 800;
        font-size: 25px;
    }

    .linha-icons > a{
        background: #C4C4C4;
        color: #333;
        font-size: 30px;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        margin: 10px;
        box-shadow: ${({theme}) => theme.toggleShadow};

        &:hover{
            box-shadow: none;
        }
    }

    .m-left{
        margin-left: 30px
    }


    @media(max-width: 768px){
        h1{
            width: 100%;
            text-align: center;
        }
        
        h1{
            font-size: 2.2rem;
        }
        .name{
            font-size: 2.5rem;
        }
        p{
            font-size: 20px;
            text-align: center;
            margin: 20px 0;
        }

        .linha-icons{
            justify-content: center
        }
    }

    /* ANIMATION */
    @keyframes rubberBand {
    from {
      transform: scale3d(1, 1, 1);
    }
  
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
  
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
  
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
  
    65% {
      transform: scale3d(.95, 1.05, 1);
    }
  
    75% {
      transform: scale3d(1.05, .95, 1);
    }
  
    to {
      transform: scale3d(1, 1, 1);
    }
  }
`;
