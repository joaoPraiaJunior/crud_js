import api from './api.js';
import constroiPensamento from './modulos/constroiPensamento.js';


const ui = {

    async renderizarPensamentos() {

        const listaPensamentos = document.querySelector('[data-js="lista-de-pensamentos"]');

        try {
            const pensamentos = await api.buscarPensamentos();

            pensamentos.foprEach(pensamento => {
                listaPensamentos.appendChild(constroiPensamento(pensamento));
            });

            
        } catch (error) {
            
        }
    }
}

export default ui;