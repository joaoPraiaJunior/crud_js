import api from './api.js';
import constroiPensamento from './constroiPensamento.js';


const ui = {

    async renderizarPensamentos() {

        const listaPensamentos = document.querySelector('[data-js="lista-de-pensamentos"]');

        try {
            const pensamentos = await api.buscarPensamentos();

            pensamentos.forEach(ui.adicionarPensamentoNaLista);

        } catch (error) {
            console.log('Erro em renderizar pensamentos', error);
        }
    },

    adicionarPensamentoNaLista(pensamento) {
        constroiPensamento(pensamento);
    }
}

export default ui;