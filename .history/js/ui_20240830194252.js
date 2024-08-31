import api from './api.js';

const ui = {

    async renderizarPensamentos() {

        const listaPensamentos = document.querySelector('[data-js="lista-de-pensamentos"]');

        try {
            const pensamentos = await api.buscarPensamentos();
            const li = document.createElement('li');
            const imagem = document.createElement('img');
            const divConteudo = document.createElement('div');
            const divAutoria = document.createElement('div');

            
        } catch (error) {
            
        }
    }
}

export default ui;