describe('Teste de acessibilidade', () => {
	it('home', () => {
		cy.visit('http://localhost:5173/');
		cy.injectAxe();
		cy.checkA11y();
	});
});
