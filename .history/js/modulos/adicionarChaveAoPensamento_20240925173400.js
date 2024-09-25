import api from './api.js';

async function adicionarChaveAoPensamento() {
	try {
		const pensamentos = await api.pegarPensamentos();

		const chavesDosPensamentos = pensamentos.forEach((pensamento) => {
			const chavePensamento = `${pensamento.conteudo.toLowerCase()}-${pensamento.autoria.toLowerCase()}`;
			return chavePensamento;
		});
		console.log(chavesDosPensamentos);
		return chavesDosPensamentos;
	} catch (error) {
		console.error(error);
	}
}

export default adicionarChaveAoPensamento;
