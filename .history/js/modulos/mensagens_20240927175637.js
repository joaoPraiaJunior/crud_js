let ajustarMensagem = null;

function mensagens(mensagem) {
	const elementos = {
		elementoMensagem: '[data-js="mensagem"]',
	};

	const elementoMensagem = document.querySelector(elementos.mensagem);

	if (mensagem) {
		elementoMensagem.textContent = mensagem;
		elementoMensagem.setArribute('aria-hidden', false);
		elementoMensagem.setArribute('role', 'alert');
	}
}

export default mensagens;
