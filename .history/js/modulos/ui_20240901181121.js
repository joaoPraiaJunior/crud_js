import api from './api.js';
import constroiPensamento from './constroiPensamento.js';


const ui = {

    async renderizarPensamentos() {

        try {
            const pensamentos = await api.buscarPensamentos();

            pensamentos.forEach(ui.adicionarPensamentoNaLista);

        } catch (error) {
            console.log('Erro em renderizar pensamentos', error);
        }
    },

    adicionarPensamentoNaLista(pensamento) {
        const listaPensamentos = document.querySelector('[data-js="lista-de-pensamentos"]');
        listaPensamentos.appendChild(constroiPensamento(pensamento));
    }
}

export default ui;