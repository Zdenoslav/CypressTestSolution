describe('test against Spanish site', () => {

    it('displays Spanish', () => {
        cy.visit(`https://docs.cypress.io/es`)
        cy.contains('¿Por qué Cypress?')
    });

});