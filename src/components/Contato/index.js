import React, { Component } from 'react';

import { Container } from './styles';
import Separator from '../../assets/Icons/separator.png'

export default class Contato extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

    render() {
        const { status } = this.state;

        return (
            <Container id="contato">
                <div className="container container-contato">
                    <div className="box-titulo" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                        <h1>Contato</h1>
                    </div>

                    <div className="form-contato">
                        <h2>ENVIE SUA MENSAGEM:</h2>
                        <img src={Separator} alt="..." className="separator " />
                        <form onSubmit={this.submitForm}
                            action="https://formspree.io/mknvajpw"
                            method="POST">
                            <input name="name" type="text" class="feedback-input" placeholder="Nome" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" />
                            <input name="email" type="text" class="feedback-input" placeholder="Email" data-aos="fade-up" data-aos-once="true" data-aos-duration="1200" />
                            <textarea name="text" id="mensagem" class="feedback-input" placeholder="Mensagem" data-aos="fade-up" data-aos-once="true" data-aos-duration="1300"></textarea>
                            {status === "SUCCESS" ? <p>Mensagem enviada com Sucesso!</p> : <input type="submit" value="Enviar" />}
                            {status === "ERROR" && <p>Ocorreu algum erro. Tente novamente!</p>}

                        </form>
                    </div>


                </div>
            </Container>
        )
    }

}

