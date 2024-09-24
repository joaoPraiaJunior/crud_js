import api 

async function favoritarPensamento(id, favorito) {

    try {
        await api.atualizarFavorito(id, favorito)
        ui.renderizarPensamentos();
    } catch (error) {
        
    }

}

export default favoritarPensamento;
