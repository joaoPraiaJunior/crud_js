import api from './api.js';
import resetarFormiulario from './resetarFormulario.js';
import ui from './ui.js';
import validacaoFormulario from './validacaoFormulario.js';
import verificaPensamentoDuplicado from './verificaPensamentoDuplicado.js';

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

	const erro = validacaoFormulario(conteudo, autoria, data);

	if (erro) {
		alert(erro);
		return;
	}

	const verificacaoDePensamentoDuplicado = verificaPensamentoDuplicado(conteudo, autoria);

	if (!verificacaoDePensamentoDuplicado) {
		alert(verificacaoDePensamentoDuplicado);
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
