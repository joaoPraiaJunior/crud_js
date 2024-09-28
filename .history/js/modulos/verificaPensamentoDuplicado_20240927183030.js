import adicionarChaveAoPensamento from './adicionarChaveAoPensamento';
import mensagens from './mensagens';

async function verificaPensamentoDuplicado(conteudo, autoria) {
	const chaveNovoPensamento = `${conteudo.toLowerCase()}-${autoria.toLowerCase()}`;

	const pensamentosSet = await adicionarChaveAoPensamento();

	if (pensamentosSet.has(chaveNovoPensamento)) {
		mensagens('Pensamento duplicado. Por favor, insira um pensamento diferente.');
		return;
	}
}

export default verificaPensamentoDuplicado;
