import adicionarChaveAoPensamento from './adicionarChaveAoPensamento';

function verificaPensamentoDuplicado(conteudo, autoria) {
	const pensamentosSet = new Set();
	const chaveNovoPensamento = `${conteudo.toLowerCase()}-${autoria.toLowerCase()}`;

	pensamentosSet.add(adicionarChaveAoPensamento());

	if (pensamentosSet.has(chaveNovoPensamento)) {
		return 'Esse pensamento já existe!';
	}
}

export default verificaPensamentoDuplicado;
