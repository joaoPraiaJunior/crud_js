import axios from 'axios';
import converterDataParaUTC from './converterDataParaUTC';

const URL_BASE = 'http://localhost:3000';

const api = {
	async buscarPensamentos() {
		try {
			// const response = await fetch(`${URL_BASE}/pensamentos`);
			// const data = await response.json();
			// return data;

			const response = await axios.get(`${URL_BASE}/pensamentos`);
			return await response.data;
		} catch (error) {
			console.error('Erro em buscar pensamentos', error);
			throw error;
		}
	},

	async salvarPensamentos(pensamento) {
		try {
			// const response = await fetch(`${URL_BASE}/pensamentos`, {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	},
			// 	body: JSON.stringify(pensamento),
			// });

			// const data = await response.json();
			// return data;
			const data = converterDataParaUTC(pensamento.data);
			const response = await axios.post(`${URL_BASE}/pensamentos`, {
				...pensamento,
				data,
			});
			return await response.data;
		} catch (error) {
			console.error('Erro ao salvar pensamento', error);
			throw error;
		}
	},

	async buscarPensamentosPorId(id) {
		try {
			// const response = await fetch(`${URL_BASE}/pensamentos/${id}`);
			// const data = await response.json();
			// return data;

			const response = await axios.get(`${URL_BASE}/pensamentos/${id}`);
			return await response.data;
		} catch (error) {
			console.error('Erro ao buscar pensamento', error);
			throw error;
		}
	},

	async editarPensamentos(pensamento) {
		try {
			// const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
			// 	method: 'PUT',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	},
			// 	body: JSON.stringify(pensamento),
			// });

			// const data = await response.json();
			// return data;

			const response = await axios.put(`${URL_BASE}/pensamentos/${pensamento.id}`, pensamento);
			return await response.data;
		} catch (error) {
			console.error('Erro ao Editar pensamento', error);
			throw error;
		}
	},

	async excluirPensamento(id) {
		try {
			// await fetch(`${URL_BASE}/pensamentos/${id}`, {
			// 	method: 'DELETE',
			// });

			await axios.delete(`${URL_BASE}/pensamentos/${id}`);
		} catch (error) {
			console.error('Erro ao deletar pensamento', error);
			throw error;
		}
	},

	async buscarPensamentosPorTermo(termo) {
		try {
			const pensamentos = await this.buscarPensamentos();
			const termoEmMinusculas = termo.toLowerCase();
			const pensamentosFiltrados = pensamentos.filter((pensamento) => {
				return pensamento.conteudo.toLowerCase().includes(termoEmMinusculas) || pensamento.autoria.toLowerCase().includes(termoEmMinusculas);
			});

			return pensamentosFiltrados;
		} catch (error) {
			console.error('Erro ao buscar pensamentos por termo', error);
			throw error;
		}
	},

	async atualizarFavorito(id, favorito) {
		try {
			const response = await axios.patch(`${URL_BASE}/pensamentos/${id}`, { favorito });
			return await response.data;
		} catch (error) {
			console.log('Erro ao atualizar favorito', error);
			throw error;
		}
	},
};

export default api;
