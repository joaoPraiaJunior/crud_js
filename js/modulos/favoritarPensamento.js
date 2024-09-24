import api from './api.js';
import ui from './ui.js';

async function favoritarPensamento(pensamentoId, pensamentoFavorito) {
	try {
		await api.atualizarFavorito(pensamentoId, pensamentoFavorito);
		ui.renderizarPensamentos();
	} catch (error) {
		console.error('Não foi possível favoritar', error);
		throw error;
	}
}

export default favoritarPensamento;
