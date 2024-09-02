function mensagemDeMuralVazio() {

    const elementos = {
        mensagem: '[data-js="mural-vazio"]',
    }

    const mensagem = document.querySelector(elementos.mensagem);
    
    mensagem.style.display = 'block';

}

export default mensagemDeMuralVazio;
