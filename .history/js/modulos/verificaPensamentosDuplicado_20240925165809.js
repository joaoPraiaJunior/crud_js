function verificaPensamentosDuplicado(conteudo, autoria) {
	const pensamentosSet = new Set();
	const chaveNovoPensamento = `${conteudo.toLowerCase()}-${autoria.toLowerCase()}`;

	if (pensamentosSet.has(chaveNovoPensamento)) {
		return 'Esse pensamento já existe!';
	}
}

export default verificaPensamentosDuplicado;
