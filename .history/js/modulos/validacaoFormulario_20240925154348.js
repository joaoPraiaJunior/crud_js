function validacaoFormulario(conteudo, autoria, data) {
	const conteudoSemEspacos = removerEspacosEmBranco(conteudo);
	const autoriaSemEspacos = removerEspacosEmBranco(autoria);

	if (!validacaoDoConteudoPensamento(conteudoSemEspacos)) {
		alert('É permitida a inclusão apenas de letras e espaços com no mínimo 10 caracteres');
		return;
	}

	if (!validacaoDaAutoriaPensamento(autoriaSemEspacos)) {
		alert('É permitida a inclusão de apenas letras e entre 3 e 15 caracteres');
		return;
	}

	if (!validarData(data)) {
		alert('Não é permitido o cadastro de datas futuras. Selecione outra data');
		return;
	}
}

export default validacaoFormulario;
