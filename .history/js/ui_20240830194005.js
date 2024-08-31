import api from './api.js';

const ui = {

    async renderizarPensamentos() {
        const listaPensamentos = document.querySelector('[data-js="lista-de-pensamentos"]');
        const pensamentos = await api.buscarPensamentos();
    }
}

export default ui;