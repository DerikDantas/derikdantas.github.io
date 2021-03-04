import React from 'react';

import { Container } from './styles';

import HTML from '../../assets/Icons/html5.png'
import CSS from '../../assets/Icons/css3.png'
import JS from '../../assets/Icons/js.png'
import REACT from '../../assets/Icons/react.png'
import BOOTSTRAP from '../../assets/Icons/bootstrap.png'
import STYLED from '../../assets/Icons/styled-components.png'
import GIT from '../../assets/Icons/git.png'
import WP from '../../assets/Icons/wp.png'
import JAVA from '../../assets/Icons/java.png'
import TS from '../../assets/Icons/ts.png'
import FLUTTER from '../../assets/Icons/flutter.png'
import PYTHON from '../../assets/Icons/python.png'
import SQL from '../../assets/Icons/mysql.png'


function Skills() {
    return (
        <Container id="skills">
            <div className="container container-skills">
                <div className="box-titulo" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                    <h1>SKILLS</h1>
                </div>
            </div>

            <div className="container" style={{marginTop: "100px"}}>
                <h2 data-aos="fade-right" data-aos-once="true" data-aos-duration="800">USANDO ATUALMENTE:</h2>

                <div class="row" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                    <div className="box-icon">
                        <img src={HTML} alt="..." />
                        <h3>HTML 5</h3>
                    </div>
                    <div className="box-icon">
                        <img src={CSS} alt="..." />
                        <h3>CSS 3</h3>
                    </div>
                    <div className="box-icon">
                        <img src={JS} alt="..." />
                        <h3>JAVASCRIPT</h3>
                    </div>
                    <div className="box-icon">
                        <img src={REACT} alt="..." />
                        <h3>REACT JS</h3>
                    </div>
                </div>

                <div class="row" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                    <div className="box-icon">
                        <img src={BOOTSTRAP} alt="..." />
                        <h3>BOOTSTRAP</h3>
                    </div>
                    <div className="box-icon">
                        <img src={STYLED} alt="..." />
                        <h3>STYLED COMPONENTS</h3>
                    </div>
                    <div className="box-icon">
                        <img src={GIT} alt="..." />
                        <h3>GIT</h3>
                    </div>
                    <div className="box-icon">
                        <img src={WP} alt="..." />
                        <h3>WORDPRESS</h3>
                    </div>
                </div>


                <h2 style={{marginTop: "120px"}} ata-aos="fade-right" data-aos-once="true" data-aos-duration="800">APRENDENDO:</h2>
                <div class="row" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                    <div className="box-icon">
                        <img src={JAVA} alt="..." />
                        <h3>JAVA</h3>
                    </div>
                    <div className="box-icon">
                        <img src={TS} alt="..." />
                        <h3>TYPESCRIPT</h3>
                    </div>
                </div>

                <h2 style={{marginTop: "120px"}} ata-aos="fade-right" data-aos-once="true" data-aos-duration="800">OUTRAS SKILLS:</h2>
                <div class="row" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                    <div className="box-icon">
                        <img src={FLUTTER} alt="..." />
                        <h3>FLUTTER</h3>
                    </div>
                    <div className="box-icon">
                        <img src={PYTHON} alt="..." />
                        <h3>PYTHON</h3>
                    </div>
                    <div className="box-icon">
                        <img src={SQL} alt="..." />
                        <h3>MySQL</h3>
                    </div>
                </div>
            </div>

        </Container>
    )
}

export default Skills;