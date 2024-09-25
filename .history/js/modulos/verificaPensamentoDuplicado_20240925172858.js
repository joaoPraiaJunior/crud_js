import adicionarChaveAoPensamento from './adicionarChaveAoPensamento';

async function verificaPensamentoDuplicado(conteudo, autoria) {
	const pensamentosSet = new Set();
	const chaveNovoPensamento = `${conteudo.toLowerCase()}-${autoria.toLowerCase()}`;

	pensamentosSet.add(await adicionarChaveAoPensamento());
	console.log(await adicionarChaveAoPensamento());

	if (pensamentosSet.has(chaveNovoPensamento)) {
		return 'Esse pensamento já existe!';
	}
}

export default verificaPensamentoDuplicado;
