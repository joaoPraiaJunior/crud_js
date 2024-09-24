import favoritarPensamento from './favoritarPensamento.js';
import ui from './ui.js';

function constroiPensamento(pensamento) {
	const li = document.createElement('li');
	const imagem = document.createElement('img');
	const divConteudo = document.createElement('div');
	const divAutoria = document.createElement('div');
	const divIcones = document.createElement('div');
	const tagTime = document.createElement('time');
	const botaoEditar = document.createElement('button');
	const botaoExcluir = document.createElement('button');
	const botaoFavoritar = document.createElement('button');
	const iconeEditar = document.createElement('img');
	const iconeExcluir = document.createElement('img');
	const iconeFavoritar = document.createElement('img');
	var options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'UTC',
	};
	const dataFormatada = pensamento.data.toLocaleDateString('pt-BR', { options });

	li.classList.add('li-pensamento');
	imagem.src = 'assets/imagens/aspas-azuis.png';
	imagem.alt = 'Aspas azuis';
	imagem.classList.add('icone-aspas');
	divConteudo.classList.add('pensamento-conteudo');
	divAutoria.classList.add('pensamento-autoria');
	divIcones.classList.add('icones');
	tagTime.classList.add('pensamento-data');
	botaoEditar.classList.add('botao-editar');
	botaoEditar.ariaLabel = 'Editar pensamento';
	botaoExcluir.classList.add('botao-excluir');
	botaoExcluir.ariaLabel = 'Excluir pensamento';
	botaoFavoritar.classList.add('botao-favoritar');
	botaoFavoritar.ariaLabel = 'Favoritar pensamento';
	iconeEditar.src = 'assets/imagens/icone-editar.png';
	iconeEditar.alt = 'Editar pensamento';
	iconeExcluir.src = 'assets/imagens/icone-excluir.png';
	iconeExcluir.alt = 'Excluir pensamento';
	iconeFavoritar.src = pensamento.favorito ? 'assets/imagens/icone-favorito.png' : 'assets/imagens/icone-favorito_outline.png';
	iconeFavoritar.alt = 'Favoritar pensamento';

	li.dataset.id = pensamento.id;
	divConteudo.textContent = pensamento.conteudo;
	divAutoria.textContent = pensamento.autoria;
	tagTime.textContent = dataFormatada;
	botaoEditar.onclick = () => ui.editarPensamentoDaLista(pensamento.id);
	botaoExcluir.onclick = () => ui.excluirPensamentoDaLista(pensamento.id);
	botaoFavoritar.onclick = () => favoritarPensamento(pensamento.id, !pensamento.favorito);

	botaoExcluir.appendChild(iconeExcluir);
	botaoEditar.appendChild(iconeEditar);
	botaoFavoritar.appendChild(iconeFavoritar);
	divIcones.appendChild(botaoFavoritar);
	divIcones.appendChild(botaoEditar);
	divIcones.appendChild(botaoExcluir);
	li.appendChild(imagem);
	li.appendChild(divConteudo);
	li.appendChild(divAutoria);
	li.appendChild(tagTime);
	li.appendChild(divIcones);

	return li;
}

export default constroiPensamento;
