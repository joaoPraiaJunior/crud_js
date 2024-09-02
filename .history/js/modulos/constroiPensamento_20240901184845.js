import ui from './ui.js';

function constroiPensamento(pensamento) {
    
    const li = document.createElement('li');
    const imagem = document.createElement('img');
    const divConteudo = document.createElement('div');
    const divAutoria = document.createElement('div');
    const divIcones = document.createElement('div');
    const botaoEditar = document.createElement('button');
    const iconeEditar = document.createElement('image');


    li.classList.add('li-pensamento');
    imagem.src = 'assets/imagens/aspas-azuis.png';
    imagem.alt = 'Aspas azuis';
    imagem.classList.add('icone-aspas');
    divConteudo.classList.add('pensamento-conteudo');
    divAutoria.classList.add('pensamento-autoria');
    divIcones.classList.add('icones');
    botaoEditar.classList.add('botao-editar');
    iconeEditar.src = 'assets/imagens/botao-editar.png';
    iconeEditar.alt = 'Editar pensamento';
    iconeEditar.ariaLabel = 'Editar pensamento';


    li.dataset.id = pensamento.id;
    divConteudo.textContent = pensamento.conteudo;
    divAutoria.textContent = pensamento.autoria;
    botaoEditar.onclick = () => ui.preencherFormularioComDadosDoPensamento(pensamento.id);

    
    botaoEditar.appendChild(iconeEditar);
    li.appendChild(imagem);
    li.appendChild(divConteudo);
    li.appendChild(divAutoria);
    li.appendChild(botaoEditar);

    return li;
}

export default constroiPensamento;