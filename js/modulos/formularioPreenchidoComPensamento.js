function formularioPreenchidoComPensamento(pensamento) {

    const elmentos = {
        formulario: '[data-js="formulario"]',
    }

    const formulario = document.querySelector(elmentos.formulario);

    formulario.id.value = pensamento.id;
    formulario.conteudo.value = pensamento.conteudo;
    formulario.autoria.value = pensamento.autoria;
    formulario.conteudo.focus();
}

export default formularioPreenchidoComPensamento;