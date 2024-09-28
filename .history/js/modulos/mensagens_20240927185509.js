let ajustarMensagem = null;

function mensagens(mensagem, cadastroPensamento = null) {
	const elementos = {
		elementoMensagem: '[data-js="mensagem"]',
	};

	const elementoMensagem = document.querySelector(elementos.elementoMensagem);

	if (mensagem) {
		console.log('mensagem', mensagem);
		elementoMensagem.textContent = mensagem;
		elementoMensagem.setAttribute('aria-hidden', false);
		cadastroPensamento ? elementoMensagem.setAttribute('aria-live', 'polite') : elementoMensagem.setAttribute('role', 'alert');
		elementoMensagem.setAttribute('tabindex', '0');
		elementoMensagem.classList.add('aparecer-mensagem');
		elementoMensagem.focus();
		pararAnimacaoMensagem();
		animacaoMensagem();
	}

	function animacaoMensagem() {
		ajustarMensagem = setTimeout(() => {
			elementoMensagem.textContent = '';
			elementoMensagem.removeAttribute('aria-hidden');
			cadastroPensamento ? elementoMensagem.removeAttribute('aria-live') : elementoMensagem.removeAttribute('role', 'alert');
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
