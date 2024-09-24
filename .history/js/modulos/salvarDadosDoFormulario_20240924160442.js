import api from './api.js';
import resetarFormiulario from './resetarFormulario.js';
import ui from './ui.js';

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

	try {
		if (id) {
			await api.editarPensamentos({ id, conteudo, autoria });
		} else {
			await api.salvarPensamentos({ conteudo, autoria });
		}

		ui.renderizarPensamentos();
		resetarFormiulario();
	} catch (error) {
		console.log('Erro em pegar dados do formulário', error);
	}
}

export default salvarDadosDoFormulario;
