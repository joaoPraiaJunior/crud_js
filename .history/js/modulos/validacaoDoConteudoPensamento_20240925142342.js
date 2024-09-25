function validacaoDoConteudoPensamento(conteudo) {
	const elementos = {
		formulario: '[data-js="formulario"]',
	};

	const formulario = document.querySelector(elementos.formulario);
	const minimoDeCaracteres = parseInt(formulario.conteudo.minLength);
	const regexConteudo = new RegExp(`^[A-Za-z\\s]{${minimoDeCaracteres},}$`);

	return regexConteudo.test(conteudo);
}

export default validacaoDoConteudoPensamento;
