import api from './api.js';
import constroiPensamento from './constroiPensamento.js';


const ui = {

    async renderizarPensamentos() {

        const listaPensamentos = document.querySelector('[data-js="lista-de-pensamentos"]');

        try {
            const pensamentos = await api.buscarPensamentos();

            pensamentos.forEach(pensamento => {
                listaPensamentos.appendChild(constroiPensamento(pensamento));
            });

        } catch (error) {
            console.log('Erro em renderizar pensamentos', error);
        }
    }
}

export default ui;