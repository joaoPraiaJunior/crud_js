function pegarDadosDoFormulario(evento) {

    evento.preventDefault();

    const elementos = {
        formulario: '[data-js="formulario"]',
    }

    const formulario = document.querySelector(elementos.formulario);

    const pensamento = {
        id: formulario.id.value,
        pensamento: formulario.pensamento.value.trim(),
        autor: formulario.autor.value.trim(),
    }


}

export default pegarDadosDoFormulario;