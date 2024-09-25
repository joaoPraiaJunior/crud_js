import api from './api.js';

async function adicionarChaveAoPensamento() {
	try {
		const pensamentos = await api.buscarPensamentos();

		pensamentos.forEach((pensamento) => {
			const chavePensamento = `${pensamento.conteudo.toLowerCase()}-${pensamento.autoria.toLowerCase()}`;
			return chavePensamento;
		});
	} catch (error) {
		console.error(error);
	}
}

export default adicionarChaveAoPensamento;
