function constroiPensamento() {
    
    const li = document.createElement('li');
    const imagem = document.createElement('img');
    const divConteudo = document.createElement('div');
    const divAutoria = document.createElement('div');
    li.classList.add('li-pensamento');
    imagem.src = 'assets/imagens/aspas-azuis.png';
    imagem.alt = 'Aspas azuis';
    imagem.classList.add('icone-aspas');
    divConteudo.classList.add('pensamento-conteudo');
    divAutoria.classList.add('pensamento-autoria');

    li.appendChild(imagem);
    li.appendChild(divConteudo);
    li.appendChild(divAutoria);

    return li
}

export default constroiPensamento;