function pegarDadosDoFormulario() {
    const elementos = {
        formulario: '[data-js="formulario"]',
    }

    const formulario = document.querySelector(elementos.formulario);

    const pensamento = {
        pensamento: formulario.pensamento.value.trim(),
        autor: formulario.autor.value.trim(),
    }


}

export default pegarDadosDoFormulario;