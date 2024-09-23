import api from './api.js';
import constroiPensamento from './constroiPensamento.js';
import formularioPreenchidoComPensamento from './formularioPreenchidoComPensamento.js';

const ui = {
	async renderizarPensamentos(pensamentosFiltrados = null) {
		const listaPensamentos = document.querySelector('[data-js="lista-de-pensamentos"]');
		listaPensamentos.innerHTML = '';
		let pensamentosParaRenderizar;

		try {
			if (pensamentosFiltrados) {
				pensamentosParaRenderizar = pensamentosFiltrados;
			} else {
				pensamentosParaRenderizar = await api.buscarPensamentos();
			}

			pensamentosParaRenderizar.forEach(ui.adicionarPensamentoNaLista);
		} catch (error) {
			console.log('Erro em renderizar pensamentos', error);
		}
	},

	adicionarPensamentoNaLista(pensamento) {
		const listaPensamentos = document.querySelector('[data-js="lista-de-pensamentos"]');
		listaPensamentos.appendChild(constroiPensamento(pensamento));
	},

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
