const api = {
    async buscarPensamentos() {

        try {
            const response = await fetch('http://localhost:3000/pensamentos');
            const data = await response.json();
            return data;
            
        } catch (error) {
            console.error('Erro em buscar pensamentos', error);
            throw error;
            
        }
    },

    async salvarPensamentos(pensamento) {

        try {
            const response = await fetch('http://localhost:3000/pensamentos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pensamento)
            });
            
        } catch (error) {
            console.error('Erro ao salvar pensamento', error);
            throw error;
            
        }
    },

    async buscarPensamentosPorId(id) {

        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`);
            const data = await response.json();
            return data;
            
        } catch (error) {
            console.error('Erro ao buscar pensamento', error);
            throw error;
            
        }
    },

    async editarPensamentos(pensamento) {

        try {
            const response = await fetch('http://localhost:3000/pensamentos', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pensamento)
            });
            
        } catch (error) {
            console.error('Erro ao salvar pensamento', error);
            throw error;
            
        }
    },
}

export default api;
