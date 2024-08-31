const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch('http://http://localhost:3000/pensamentos');
            const data = await response.json();
            return data;
            
        } catch (error) {
            console.error('Erro em buscar pensamentos', error);
            throw error;
            
        }
    }
}

export default api;
