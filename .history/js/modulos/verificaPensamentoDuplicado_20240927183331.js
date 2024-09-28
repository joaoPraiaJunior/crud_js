import adicionarChaveAoPensamento from './adicionarChaveAoPensamento';

async function verificaPensamentoDuplicado(conteudo, autoria) {
	const chaveNovoPensamento = `${conteudo.toLowerCase()}-${autoria.toLowerCase()}`;

	const pensamentosSet = await adicionarChaveAoPensamento();

	if (pensamentosSet.has(chaveNovoPensamento)) {
		return 'Esse pensamento já foi cadastrado!';
	}
}

export default verificaPensamentoDuplicado;
