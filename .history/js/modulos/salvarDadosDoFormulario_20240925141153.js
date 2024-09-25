import api from './api.js';
import resetarFormiulario from './resetarFormulario.js';
import ui from './ui.js';
import validacaoDoConteudoPensamento from './validacaoDoConteudoPensamento.js';
import validarData from './validarData.js';

async function salvarDadosDoFormulario(evento) {
	evento.preventDefault();

	const elementos = {
		formulario: '[data-js="formulario"]',
	};

	const formulario = document.querySelector(elementos.formulario);
	const id = formulario.id.value;
	const conteudo = formulario.conteudo.value.trim();
	const autoria = formulario.autoria.value.trim();
	const data = formulario.data.value;

	if (!validacaoDoConteudoPensamento(conteudo)) {
		alert('É permitida a inclusão apenas de letras e espaços com no mínimo 200 caracteres');
		return;
	}

	if (!validarData(data)) {
		alert('Não é permitido o cadastro de datas futuras. Selecione outra data');
		return;
	}

	try {
		if (id) {
			await api.editarPensamentos({ id, conteudo, autoria, data });
		} else {
			await api.salvarPensamentos({ conteudo, autoria, data });
		}

		ui.renderizarPensamentos();
		resetarFormiulario();
	} catch (error) {
		console.log('Erro em pegar dados do formulário', error);
	}
}

export default salvarDadosDoFormulario;
