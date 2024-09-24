function validarData(data) {
	debugger;
	const dataAtual = new Date();
	const dataInserida = new Date(data);

	return dataInserida <= dataAtual;
}

export default validarData;
