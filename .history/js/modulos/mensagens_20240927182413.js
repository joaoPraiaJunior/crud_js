let ajustarMensagem = null;

function mensagens(mensagem) {
	const elementos = {
		elementoMensagem: '[data-js="mensagem"]',
	};

	const elementoMensagem = document.querySelector(elementos.elementoMensagem);

	if (mensagem) {
		console.log('mensagem', mensagem);
		elementoMensagem.textContent = mensagem;
		elementoMensagem.setAttribute('aria-hidden', false);
		elementoMensagem.setAttribute('role', 'alert');
		elementoMensagem.setAttribute('tabindex', '0');
		elementoMensagem.classList.add('aparecer-mensagem');
		pararAnimacaoMensagem();
		animacaoMensagem();
	}

	function animacaoMensagem() {
		ajustarMensagem = setTimeout(() => {
			elementoMensagem.textContent = '';
			elementoMensagem.removeAttribute('aria-hidden');
			elementoMensagem.removeAttribute('role');
			elementoMensagem.removeAttribute('tabindex');
			elementoMensagem.classList.remove('aparecer-mensagem');
		}, 15000);
	}

	function pararAnimacaoMensagem() {
		if (ajustarMensagem) {
			clearTimeout(ajustarMensagem);
			ajustarMensagem = null;
		}
	}
}

export default mensagens;
