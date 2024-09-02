function mensagemDeMuralVazio() {

    const elementos = {
        mural: '[data-js="lista-de-pensamentos"]',
        mensagem: '[data-js="mural-vazio"]',
    }

    const mural = document.querySelector(elementos.mural);
    const mensagem = document.querySelector(elementos.mensagem);
    
    if (mural.children.length === 0) {
        mensagem.style.display = 'block';
    }

}

export default mensagemDeMuralVazio;
