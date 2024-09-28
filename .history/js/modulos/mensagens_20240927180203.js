let ajustarMensagem = null;

function mensagens(mensagem) {
	const elementos = {
		elementoMensagem: '[data-js="mensagem"]',
	};

	const elementoMensagem = document.querySelector(elementos.mensagem);

	if (mensagem) {
		elementoMensagem.textContent = mensagem;
		elementoMensagem.setAttribute('aria-hidden', false);
		elementoMensagem.setAttribute('role', 'alert');
		elementoMensagem.setAttribute('tabindex', '0');
		pararAnimacaoMensagem();
		animacaoMensagem();
	}

	function animacaoMensagem() {
		ajustarMensagem = setTimeout(() => {
			elementoMensagem.textContent = '';
			elementoMensagem.removeAttribute('aria-hidden');
			elementoMensagem.removeAttribute('role');
			elementoMensagem.removeAttribute('tabindex');
		}, 3000);
	}

	function pararAnimacaoMensagem() {
		if (ajustarMensagem) {
			clearTimeout(ajustarMensagem);
			ajustarMensagem = null;
		}
	}
}

export default mensagens;
