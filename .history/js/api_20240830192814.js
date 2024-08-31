async function buscarPensamentos() {
    try {
        const response = await fetch('http://localhost:3000/pensamentos');
        const data = await response.json();
        return data;
    }catch (error) {
        console.error(error);
    }
}