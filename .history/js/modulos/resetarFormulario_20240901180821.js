function resetarFormulario() {

    const elementos = {
        formulario: '[data-js="formulario"]',
    }

    const formulario = document.querySelector(elementos.formulario);

    formulario.reset();

}