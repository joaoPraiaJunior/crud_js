import api from './api.js';
import constroiPensamento from './constroiPensamento.js';
import formularioPreenchidoComPensamento from './formularioPreenchidoComPensamento.js';
import mensagemDeMuralVazio from './mensagemDeMuralVazio.js';

const ui = {
	async renderizarPensamentos(pensamentosFiltrados = null) {
		const listaPensamentos = document.querySelector('[data-js="lista-de-pensamentos"]');
		listaPensamentos.innerHTML = '';

		try {
			let pensamentosParaRenderizar;

			if (pensamentosFiltrados) {
				pensamentosParaRenderizar = pensamentosFiltrados;
				return;
			}

			if (pensamentos.length === 0) {
				mensagemDeMuralVazio();
				return;
			}

			pensamentos.forEach(ui.adicionarPensamentoNaLista);
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
