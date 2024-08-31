const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch('https://api.pensador.com/v1/quotes/?author=Albert+Einstein');
            const data = await response.json();
            return data;
            
        } catch (error) {
            console.error(error);
            
        }
    }
}
