import adicionarChaveAoPensamento from './adicionarChaveAoPensamento';

async function verificaPensamentoDuplicado(conteudo, autoria) {
	const chaveNovoPensamento = `${conteudo.toLowerCase()}-${autoria.toLowerCase()}`;

	const pensamentosSet = await adicionarChaveAoPensamento();

	if (pensamentosSet.has(chaveNovoPensamento)) {
		console.log(pensamentosSet.has(chaveNovoPensamento));
		return 'Esse pensamento já existe!';
	}
}

export default verificaPensamentoDuplicado;
