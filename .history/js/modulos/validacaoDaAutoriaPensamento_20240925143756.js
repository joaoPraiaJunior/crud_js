const validacaoDaAutoriaPensamento = (autoria) => {
	const elementos = {
		formulario: '[data-js="formulario"]',
	};

	const formulario = document.querySelector(elementos.formulario);
	const minimoDeCaracteres = parseInt(formulario.autoria.minLength);
	const maximoDeCaracteres = parseInt(formulario.autoria.maxLength);

	const regexAutoria = new RegExp(`^[A-Za-z\\s]{${minimoDeCaracteres},${maximoDeCaracteres}}$`);

	return regexAutoria.test(autoria);
};

export { validacaoDaAutoriaPensamento };
