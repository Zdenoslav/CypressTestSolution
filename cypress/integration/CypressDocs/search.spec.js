describe('Test the search bar', function () {

    it('successfully loads', function () {

        cy.visit("https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell");
        //Checking the right website is visited
        cy.get('h1').contains('Why Cypress?')
    });

    it('Fill the search bar and test case sensitiveness', function () {
        //check the search-input
        cy.get('#search-input')
            .type('Cyp')
        //Testing also if the search field is case sensitive by { matchCase: false}
        cy.get('.algolia-docsearch-suggestion--highlight', {
            timeout: 10000,
        }).contains('cyp', { matchCase: false })
    });

    it('Test for the special character', function () {
        cy.get('#search-input')
            .type("%")
            .clear()
    });

    it('Search field displays "No Found"', function () {

        //Creating a new variable to get a random input
        const newDate = new Date();
        const randomNumber = newDate.getTime()

        cy.get('#search-input')
            .type(randomNumber)

        cy.get('.algolia-docsearch-suggestion--text').contains('No results found for query')
        cy.get('.algolia-docsearch-suggestion--text b').contains(`"${randomNumber}"`)

    });

    //Checking for the usability of the search field on the smaller screens
    it('Search field is responsive', function () {

        cy.viewport(320, 480)
        cy.get('#search-input-wrap')

    });
});