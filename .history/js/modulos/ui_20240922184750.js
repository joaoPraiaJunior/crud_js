import api from './api.js';
import constroiPensamento from './constroiPensamento.js';
import formularioPreenchidoComPensamento from './formularioPreenchidoComPensamento.js';
import mensagemDeMuralVazio from './mensagemDeMuralVazio.js';

const ui = {
	async renderizarPensamentos(pensamentosFiltrados = null) {
		const listaPensamentos = document.querySelector('[data-js="lista-de-pensamentos"]');
		const freagmento = document.createDocumentFragment();

		try {
			let pensamentosParaRenderizar;

			if (Array.isArray(pensamentosFiltrados) && pensamentosFiltrados.length > 0) {
				pensamentosParaRenderizar = pensamentosFiltrados;
			} else {
				pensamentosParaRenderizar = await api.buscarPensamentos();
			}

			if (pensamentosParaRenderizar.length === 0) {
				mensagemDeMuralVazio();
				return;
			}

			pensamentosParaRenderizar.forEach((pensamento) => {
				freagmento.appendChild(constroiPensamento(pensamento));
			});
			listaPensamentos.appendChild(freagmento);
		} catch (error) {
			console.log('Erro em renderizar pensamentos', error);
		}
	},

	// adicionarPensamentoNaLista(pensamento) {
	// 	const listaPensamentos = document.querySelector('[data-js="lista-de-pensamentos"]');
	// 	listaPensamentos.appendChild(constroiPensamento(pensamento));
	// },

	async editarPensamentoDaLista(pensamentoId) {
		const pensamento = await api.buscarPensamentosPorId(pensamentoId);
		formularioPreenchidoComPensamento(pensamento);
	},

	async excluirPensamentoDaLista(pensamentoId) {
		try {
			await api.excluirPensamento(pensamentoId);
			ui.renderizarPensamentos();
		} catch (error) {
			console.log('Erro em excluir pensamento', error);
		}
	},
};

export default ui;
