const ui = {

    async renderizarPensamentos() {
        const listaPensamentos = document.querySelector('[data-js="lista-de-pensamentos"]');
        const pensamentos = await api.buscarPensamentos();
    }
}