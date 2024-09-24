import ui from './ui.js';

function constroiPensamento(pensamento) {
	const li = document.createElement('li');
	const imagem = document.createElement('img');
	const divConteudo = document.createElement('div');
	const divAutoria = document.createElement('div');
	const divIcones = document.createElement('div');
	const botaoEditar = document.createElement('button');
	const botaoExcluir = document.createElement('button');
	const botaoFavoritar = document.createElement('button');
	const iconeEditar = document.createElement('img');
	const iconeExcluir = document.createElement('img');
	const iconeFavoritar = document.createElement('img');

	li.classList.add('li-pensamento');
	imagem.src = 'assets/imagens/aspas-azuis.png';
	imagem.alt = 'Aspas azuis';
	imagem.classList.add('icone-aspas');
	divConteudo.classList.add('pensamento-conteudo');
	divAutoria.classList.add('pensamento-autoria');
	divIcones.classList.add('icones');
	botaoEditar.classList.add('botao-editar');
	botaoExcluir.classList.add('botao-excluir');
	botaoFavoritar.classList.add('botao-favoritar');
	iconeEditar.src = 'assets/imagens/icone-editar.png';
	iconeEditar.alt = 'Editar pensamento';
	iconeEditar.ariaLabel = 'Editar pensamento';
	iconeExcluir.src = 'assets/imagens/icone-excluir.png';
	iconeExcluir.alt = 'Excluir pensamento';
	iconeExcluir.ariaLabel = 'Excluir pensamento';
	iconeFavoritar.src = 'assets/imagens/icone-favorito_outline.png';
	iconeFavoritar.alt = 'Favoritar pensamento';
	iconeFavoritar.ariaLabel = 'Favoritar pensamento';

	li.dataset.id = pensamento.id;
	divConteudo.textContent = pensamento.conteudo;
	divAutoria.textContent = pensamento.autoria;
	botaoEditar.onclick = () => ui.editarPensamentoDaLista(pensamento.id);
	botaoExcluir.onclick = () => ui.excluirPensamentoDaLista(pensamento.id);

	botaoExcluir.appendChild(iconeExcluir);
	botaoEditar.appendChild(iconeEditar);
	divIcones.appendChild(botaoEditar);
	divIcones.appendChild(botaoExcluir);
	li.appendChild(imagem);
	li.appendChild(divConteudo);
	li.appendChild(divAutoria);
	li.appendChild(divIcones);

	return li;
}

export default constroiPensamento;
