describe('test against Spanish site', () => {

    it('displays Spanish', () => {
        cy.visit(`https://docs.cypress.io/es`)
        cy.contains('¿Por qué Cypress?')
    });

    it('Check the english language is still available', function () {

        cy.visit(`https://docs.cypress.io/`)
        cy.contains('Why Cypress?')
    });

});