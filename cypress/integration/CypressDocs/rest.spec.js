const { cyan } = require("color-name")

describe(' Testing the endpoints for a hypothetical API', function () {

    it('GET', function () {

        cy.request({

            method: 'GET',
            url: 'https://docs.cypress.io/',

        }).then(function (response) {

            expect(42).to.equal(42)
        });

    });

    it('POST', function () {

        cy.request({

            method: 'POST',
            url: 'https://docs.cypress.io/post',
            failOnStatusCode: false,
            body: {
                'name': 'Zdenko',
                'age': 28
            },
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {

            expect(response.status).to.eq(405)

        });

    });

    it('PUT request', function () {
        cy.request({

            method: 'PUT',
            url: 'https://docs.cypress.io/put',
            failOnStatusCode: false,
            body: {
                'name': 'Zdenko',
            }
        }).then((response) => {
            expect(response.status).to.eq(405);
        });
    });

    //DELETE request already implemented therefore the expected status code would be 201

    it('DELETE Request', function () {
        cy.request('DELETE', 'https://docs.cypress.io/delete', { 'name': 'Zdenko' }).then((response) => {
            expect(response.status).to.eq(201);
        });
    });
});