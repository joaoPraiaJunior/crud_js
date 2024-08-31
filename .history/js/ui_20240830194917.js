import api from './api.js';

const ui = {

    async renderizarPensamentos() {

        const listaPensamentos = document.querySelector('[data-js="lista-de-pensamentos"]');

        try {
            const pensamentos = await api.buscarPensamentos();

            pensamentos.foprEach(pensamento => {
                criarPensamento(pensamento);
            });

            
        } catch (error) {
            
        }
    }
}

export default ui;