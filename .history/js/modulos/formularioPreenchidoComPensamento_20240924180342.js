function formularioPreenchidoComPensamento(pensamento) {
	const elmentos = {
		formulario: '[data-js="formulario"]',
	};

	const formulario = document.querySelector(elmentos.formulario);
	const dataFormatada = pensamento.data.toLocaleString('pt-BR');

	formulario.id.value = pensamento.id;
	formulario.conteudo.value = pensamento.conteudo;
	formulario.autoria.value = pensamento.autoria;
	formulario.data.value = dataFormatada;
	formulario.scrollIntoView();
}

export default formularioPreenchidoComPensamento;
