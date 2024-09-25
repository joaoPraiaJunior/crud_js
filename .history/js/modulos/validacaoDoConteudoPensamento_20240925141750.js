function validacaoDoConteudoPensamento(conteudo) {
	const elementos = {
		formulario: '[data-js="formulario"]',
	};

	const formulario = document.querySelector(elementos.formulario);
	const maximoDeCaracteres = parseInt(formulario.conteudo.maxLengh);
	const regexConteudo = new RegExp(`^[A-Za-z\\s]{${maximoDeCaracteres},}$`);

	return regexConteudo.test(conteudo);
}

export default validacaoDoConteudoPensamento;
