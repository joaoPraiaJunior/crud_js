function resetarFormulario() {
	const elementos = {
		formulario: '[data-js="formulario"]',
	};

	const formulario = document.querySelector(elementos.formulario);

	formulario.reset();
	formulario.id.value = '';
}

export default resetarFormulario;
