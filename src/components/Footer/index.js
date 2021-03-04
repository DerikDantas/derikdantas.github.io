import React from 'react';

import { Container } from './styles';

function Footer({ toggleTheme, theme }) {
    return (
        <Container>

            <button onClick={toggleTheme}>{theme === "light" ? <i class="fa fa-moon-o"></i> : <i class="fa fa-sun-o"></i>}</button>

            <a href="#top">
                <i class="fa fa-arrow-up btn-scroll"></i>
            </a>
            <div class="redes-sociais">
                <a class="btn-redes" href="https://www.linkedin.com/in/derik-oliveira-109301135/" target="_blank" rel="noreferrer">
                    <i class="fa fa-linkedin"></i>
                </a>
                <a class="btn-redes" href="https://github.com/DerikDantas" target="_blank" rel="noreferrer">
                    <i class="fa fa-github"></i>
                </a>
            </div>

            <h2>Desenvolvido por <b>Dérik Oliveira</b></h2>
            <a href="mailto:derikdantas@hotmail.com">derikdantas@hotmail.com</a>
        </Container>
    )
}

export default Footer;