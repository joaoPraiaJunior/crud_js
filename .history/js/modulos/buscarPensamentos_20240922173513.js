async function buscarPensamentos() {
	const elementos = {
		buscaPensamento: '[data-js="busca-pensamento"]',
	};

	const buscaPensamento = document.querySelector(elementos.buscaPensamento);
	const termoDaBusca = buscaPensamento.value;

	try {
		const pensamentosFiltrados = await api.buscarPensamentosPorTermo(termoDaBusca);
	} catch (error) {
		console.error('Erro em buscar pensamentos', error);
		throw error;
	}
}

export default buscarPensamentos;
