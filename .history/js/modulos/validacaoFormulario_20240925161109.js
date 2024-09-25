import { removerEspacosEmBranco } from './removerEspacosEmBranco.js';
import { validacaoDaAutoriaPensamento } from './validacaoDaAutoriaPensamento.js';
import validacaoDoConteudoPensamento from './validacaoDoConteudoPensamento.js';
import validarData from './validarData.js';

function validacaoFormulario(conteudo, autoria, data) {
	const conteudoSemEspacos = removerEspacosEmBranco(conteudo);
	const autoriaSemEspacos = removerEspacosEmBranco(autoria);

	if (!validacaoDoConteudoPensamento(conteudoSemEspacos)) {
		return 'É permitida a inclusão apenas de letras e espaços com no mínimo 10 caracteres';
	}

	if (!validacaoDaAutoriaPensamento(autoriaSemEspacos)) {
		return 'É permitida a inclusão de apenas letras e entre 3 e 15 caracteres';
	}

	if (!validarData(data)) {
		return 'Não é permitido o cadastro de datas futuras. Selecione outra data';
	}
}

export default validacaoFormulario;
