describe('Test the SideBar "Dashboard"', function () {

    it('successfully loads', function () {

        cy.visit('https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell');

    });

    it('Check the navigation button expands', function () {

        cy.get(".sidebar-title.is-collapsed").contains('Dashboard').click()
        cy.get(".sidebar-title.current.is-collapsed").should('not.exist')
    })

    it('Check the navigation side bar contains the right url path', function () {

        cy.get(".sidebar-title").contains('Dashboard').click({ force: true })
        //dashboard test the collapse
        //cy.screenshot()

        //all the subcategories appear
        cy.get(".sidebar-li.sidebar-li-dashboard").contains('Introduction').click()
        //is redirected to the correct url
        cy.url().should('include', '/guides/dashboard/introduction.html')

        cy.get(".sidebar-li.sidebar-li-dashboard").contains('Projects').click()

        cy.url().should('include', '/guides/dashboard/projects.html')

        cy.get(".sidebar-li.sidebar-li-dashboard").contains('Runs').click()

        cy.url().should('include', '/guides/dashboard/runs.html')

        cy.get(".sidebar-li.sidebar-li-dashboard").contains('Organizations').click()

        cy.url().should('include', '/guides/dashboard/organizations.html')

        cy.get(".sidebar-li.sidebar-li-dashboard").contains('Users').click()

        cy.url().should('include', '/guides/dashboard/users.html')

        cy.get(".sidebar-li.sidebar-li-dashboard").contains('GitHub Integration').click()

        cy.url().should('include', '/guides/dashboard/github-integration.html')

        cy.get(".sidebar-li.sidebar-li-dashboard").contains('Slack Integration').click()

        cy.url().should('include', '/guides/dashboard/slack-integration.html')

        cy.get(".sidebar-li.sidebar-li-dashboard").contains('Analytics').click()

        cy.url().should('include', '/guides/dashboard/analytics.html')
    });

    it('Check the sideBar "Dashboard" is responsive', function () {

        cy.get('.sidebar-title').should('be.visible')

        cy.viewport(320, 480)

        // the navbar should have collapse since our screen is smaller
        cy.get('.sidebar-title').should('not.be.visible')
        // cy.get('.navbar-toggle').should('be.visible').click()
        // cy.get('.nav').find('a').should('be.visible')
        cy.get('#mobile-nav-toggle').click()

    });

});




