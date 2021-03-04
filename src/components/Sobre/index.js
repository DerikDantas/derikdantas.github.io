import React from 'react';

import { Container } from './styles';

import Separator from '../../assets/Icons/separator.png'

function Sobre() {
    return (
        <Container id="sobre">
            <div className="container container-sobre">
                <div className="box-titulo" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                    <h1 >SOBRE</h1>
                </div>

                <div className="box-descricao">
                    <p>Sou desenvolvedor front-end de Campinas/SP.</p>
                    <p>Tenho uma grande paixão por efeitos de interface do usuário, animações e criação de experiências intuitivas e dinâmicas para o usuário.</p>
                </div>

                <img src={Separator} alt="..." className="separator rotate-img" />

                <div className="container box-promo">
                    <div className="row">
                        <div className="col-md-6 alg-center">
                            <div className="card-promo" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                                <div className="hexagono">
                                    <img src="https://image.flaticon.com/icons/svg/256/256451.svg" style={{ width: '60px', zIndex: '1' }} alt="..." />
                                </div>
                                <h2>Responsivos</h2>
                            </div>
                        </div>
                        <div className="col-md-6 alg-center">
                            <div className="card-promo" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                                <div className="hexagono">
                                    <img src="https://image.flaticon.com/icons/svg/1584/1584942.svg" style={{ width: '60px', zIndex: '1' }} alt="..." />
                                </div>
                                <h2>Entregas Rápidas</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 alg-center">
                            <div className="card-promo" data-aos="fade-up" data-aos-once="true" data-aos-duration="1200">
                                <div className="hexagono">
                                    <img src="https://image.flaticon.com/icons/svg/2057/2057748.svg" style={{ width: '60px', zIndex: '1' }} alt="..." />
                                </div>
                                <h2>Buscando Sempre o melhor<br /> para os clientes</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={Separator} alt="..." className="separator " />


            </div>
        </Container>
    )
}

export default Sobre;