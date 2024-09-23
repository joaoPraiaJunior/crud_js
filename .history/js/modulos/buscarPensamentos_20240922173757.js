import api from '../api/api.js';
import ui from './ui.js';

async function buscarPensamentos() {
	const elementos = {
		buscaPensamento: '[data-js="busca-pensamento"]',
	};

	const buscaPensamento = document.querySelector(elementos.buscaPensamento);
	const termoDaBusca = buscaPensamento.value;

	try {
		const pensamentosFiltrados = await api.buscarPensamentosPorTermo(termoDaBusca);
		ui.renderizarPensamentos(pensamentosFiltrados);
		console.log(pensamentosFiltrados);
	} catch (erro) {
		alert('Erro ao buscar pensamentos', erro);
		console.error('Erro em buscar pensamentos', erro);
		throw erro;
	}
}

export default buscarPensamentos;
