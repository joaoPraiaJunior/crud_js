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

        const listaPensamentos = document.querySelector('[data-js="lista-de-pensamentos"]');
        listaPensamentos.appendChild(constroiPensamento(pensamento));
    },

    async preencherFormularioComDadosDoPensamento(pensamentoId) {

        const pensamento = await api.buscarPensamentosPorId(pensamentoId);
        const formulario = document.querySelector('[data-js="formulario"]');

        formulario.id.value = pensamento.id;
        formulario.conteudo.value = pensamento.conteudo;
        formulario.autoria.value = pensamento.autoria;
        formulario.conteudo.focus();
    },

    async excluirPensamentoDaLista(pensamentoId) {

        try {
            await api.excluirPensamento(pensamentoId);
            ui.renderizarPensamentos();

        } catch (error) {
            console.log('Erro em excluir pensamento', error);
        }
    }
}

export default ui;