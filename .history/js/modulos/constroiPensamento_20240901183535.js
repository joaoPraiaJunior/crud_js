function constroiPensamento(pensamento) {
    
    const li = document.createElement('li');
    const imagem = document.createElement('img');
    const divConteudo = document.createElement('div');
    const divAutoria = document.createElement('div');
    const botaoEditar = document.createElement('button');

    li.classList.add('li-pensamento');
    imagem.src = 'assets/imagens/aspas-azuis.png';
    imagem.alt = 'Aspas azuis';
    imagem.classList.add('icone-aspas');
    divConteudo.classList.add('pensamento-conteudo');
    divAutoria.classList.add('pensamento-autoria');
    botaoEditar.classList.add('botao-editar');
    botaoEditar.dataset.js = 'botao-editar');

    li.dataset.id = pensamento.id;
    divConteudo.textContent = pensamento.conteudo;
    divAutoria.textContent = pensamento.autoria;

    li.appendChild(imagem);
    li.appendChild(divConteudo);
    li.appendChild(divAutoria);
    li.appendChild(botaoEditar);

    return li;
}

export default constroiPensamento;