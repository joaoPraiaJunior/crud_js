import api from './api.js';
import ui from './ui.js';

async function pegarDadosDoFormulario(evento) {

    evento.preventDefault();

    const elementos = {
        formulario: '[data-js="formulario"]',
    }

    const formulario = document.querySelector(elementos.formulario);
    const id = formulario.id.value;
    const conteudo = formulario.conteudo.value.trim();
    const autoria = formulario.autoria.value.trim();

    try {

        if(id) {
            await api.salvarPensamentos({id, conteudo, autoria});
        }
        await api.salvarPensamentos({conteudo, autoria});
        ui.renderizarPensamentos();

    } catch (error) {
        console.log('Erro em pegar dados do formulário', error);
    }
}

export default pegarDadosDoFormulario;