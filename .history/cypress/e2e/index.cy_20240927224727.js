import 'cypress-axe';

describe('Teste de acessibilidade', () => {
	it('Home', () => {
		cy.visit('http://localhost:5173/');
		cy.pageAccessibility();
	});
});
