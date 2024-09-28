describe('Teste de acessibilidade', () => {
	it('Home', () => {
		cy.visit('https://www.etecitaqua.com.br/');
		cy.injectAxe();
		cy.checkA11y();
	});
});
