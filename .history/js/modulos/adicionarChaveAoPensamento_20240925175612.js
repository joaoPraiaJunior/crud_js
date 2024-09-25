import api from './api.js';

async function adicionarChaveAoPensamento() {
	const pensamentosSet = new Set();
	try {
		const pensamentos = await api.pegarPensamentos();

		pensamentos.forEach((pensamento) => {
			const chavePensamento = `${pensamento.conteudo.trim().toLowerCase()}-${pensamento.autoria.trim().toLowerCase()}`;
			pensamentosSet.add(chavePensamento);
		});

		return pensamentosSet;
	} catch (error) {
		console.error(error);
	}
}

export default adicionarChaveAoPensamento;
