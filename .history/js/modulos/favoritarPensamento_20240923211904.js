import api from './api.js';
import ui from './ui.js';

async function favoritarPensamento(id, favorito) {
	try {
		await api.atualizarFavorito(id, favorito);
		ui.renderizarPensamentos();
	} catch (error) {
		console.error('Não foi possível favoritar', error);
		throw error;
	}
}

export default favoritarPensamento;
