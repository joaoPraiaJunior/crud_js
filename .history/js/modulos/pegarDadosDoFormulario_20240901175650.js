async function pegarDadosDoFormulario(evento) {

    evento.preventDefault();

    const elementos = {
        formulario: '[data-js="formulario"]',
    }

    const formulario = document.querySelector(elementos.formulario);
    const conteudo = formulario.conteudo.value.trim();
    const autoria = formulario.autoria.value.trim();

    try {
        await api.salvarPensamentos({conteudo, autoria});
        ui.renderizarPensamentos();

    } catch (error) {
        console.log('Erro em pegar dados do formulário', error);
    }
}