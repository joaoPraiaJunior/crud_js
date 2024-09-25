import adicionarChaveAoPensamento from './adicionarChaveAoPensamento';

async function verificaPensamentoDuplicado(conteudo, autoria) {
	const chaveNovoPensamento = `${conteudo.toLowerCase()}-${autoria.toLowerCase()}`;

	const pensamentosSet = await adicionarChaveAoPensamento();
	console.log(pensamentosSet);
	if (pensamentosSet.has(chaveNovoPensamento)) {
		return 'Esse pensamento já existe!';
	}
}

export default verificaPensamentoDuplicado;
