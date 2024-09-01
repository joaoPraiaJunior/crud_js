import api from "./api";
import ui from "./ui";

async function pegarDadosDoFormulario(evento) {

    evento.preventDefault();

    const elementos = {
        formulario: '[data-js="formulario"]',
    }

    const formulario = document.querySelector(elementos.formulario);

    const dados = {
        id: formulario.id.value,
        pensamento: formulario.pensamento.value.trim(),
        autor: formulario.autor.value.trim(),
    }

    try {
        await api.salvarPensamentos(dados);
        ui.renderizarPensamentos();
        
    } catch (error) {
        
    }


}

export default pegarDadosDoFormulario;