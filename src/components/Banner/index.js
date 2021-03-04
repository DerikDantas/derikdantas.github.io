import React from 'react';

import { Container } from './styles';

function Banner() {
    return (
        <Container>
            <div className="container">
                <h1 className="titulo">
                    <span>O</span>
                    <span>L</span>
                    <span>Á</span>
                    <span>,</span>
                    <span className="m-left">S</span>
                    <span>O</span>
                    <span>U</span>
                    <br />
                    <span className="name" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">D</span>
                    <span className="name" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">É</span>
                    <span className="name" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">R</span>
                    <span className="name" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">I</span>
                    <span className="name" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">K</span>
                    <span className="m-left name" data-aos="fade-up" data-aos-once="true" data-aos-duration="1200">O</span>
                    <span className="name" data-aos="fade-up" data-aos-once="true" data-aos-duration="1200">L</span>
                    <span className="name" data-aos="fade-up" data-aos-once="true" data-aos-duration="1200">I</span>
                    <span className="name" data-aos="fade-up" data-aos-once="true" data-aos-duration="1200">V</span>
                    <span className="name" data-aos="fade-up" data-aos-once="true" data-aos-duration="1200">E</span>
                    <span className="name" data-aos="fade-up" data-aos-once="true" data-aos-duration="1200">I</span>
                    <span className="name" data-aos="fade-up" data-aos-once="true" data-aos-duration="1200">R</span>
                    <span className="name" data-aos="fade-up" data-aos-once="true" data-aos-duration="1200">A</span>
                </h1>
                <p data-aos="fade-right" data-aos-once="true" data-aos-duration="1700">Desenvolvedor Front-end Web/Mobile</p>

                <div className="row linha-icons">
                    <a 
                    href="mailto:derikdantas@hotmail.com"  
                    data-aos="fade-up" 
                    data-aos-once="true" 
                    data-aos-duration="1500">
                        <i className="fa fa-at"></i>
                    </a>
                    <a 
                    href="https://github.com/DerikDantas" 
                    data-aos="fade-up" 
                    data-aos-once="true" 
                    data-aos-duration="1500" 
                    target="_blank" rel="noreferrer">
                        <i className="fa fa-github"></i>
                    </a>
                    <a 
                    href="https://www.linkedin.com/in/derik-oliveira-109301135/" 
                    data-aos="fade-up" 
                    data-aos-once="true" 
                    data-aos-duration="1500" 
                    target="_blank" rel="noreferrer">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
            </div>

        </Container>
    )
}
export default Banner;