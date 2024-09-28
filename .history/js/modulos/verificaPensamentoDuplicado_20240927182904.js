import adicionarChaveAoPensamento from './adicionarChaveAoPensamento';
import mensagens from './mensagens';

async function verificaPensamentoDuplicado(conteudo, autoria) {
	const chaveNovoPensamento = `${conteudo.toLowerCase()}-${autoria.toLowerCase()}`;

	const pensamentosSet = await adicionarChaveAoPensamento();

	if (pensamentosSet.has(chaveNovoPensamento)) {
		return mensagens('Pensamento duplicado. Por favor, insira um pensamento diferente.');
	}
}

export default verificaPensamentoDuplicado;
