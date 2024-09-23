const URL_BASE = 'http://localhost:3000';

const api = {
	async buscarPensamentos() {
		try {
			const response = await fetch(`${URL_BASE}/pensamentos`);
			const data = await response.json();
			return data;
		} catch (error) {
			console.error('Erro em buscar pensamentos', error);
			throw error;
		}
	},

	async salvarPensamentos(pensamento) {
		try {
			const response = await fetch(`${URL_BASE}/pensamentos`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(pensamento),
			});

			const data = await response.json();
			return data;
		} catch (error) {
			console.error('Erro ao salvar pensamento', error);
			throw error;
		}
	},

	async buscarPensamentosPorId(id) {
		try {
			const response = await fetch(`${URL_BASE}/pensamentos/${id}`);
			const data = await response.json();
			return data;
		} catch (error) {
			console.error('Erro ao buscar pensamento', error);
			throw error;
		}
	},

	async editarPensamentos(pensamento) {
		try {
			const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(pensamento),
			});

			const data = await response.json();
			return data;
		} catch (error) {
			console.error('Erro ao Editar pensamento', error);
			throw error;
		}
	},

	async excluirPensamento(id) {
		try {
			await fetch(`${URL_BASE}/pensamentos/${id}`, {
				method: 'DELETE',
			});
		} catch (error) {
			console.error('Erro ao deletar pensamento', error);
			throw error;
		}
	},

	async buscarPensamentosPorTermo(termo) {
		const pensamentos = await this.buscarPensamentos();
		const termoEmMinusculas = termo.toLowerCase();
		const pensamentosFiltrados = pensamentos.filter((pensamento) => {
			return pensamento.conteudo.toLowerCase().includes(termoEmMinusculas) || pensamento.autoria.toLowerCase().includes(termoEmMinusculas);
		});

		return pensamentosFiltrados;
	},
};

export default api;
