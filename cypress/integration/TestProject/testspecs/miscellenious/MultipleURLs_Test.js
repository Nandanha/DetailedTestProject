const urls = ['https://docs.cypress.io', 'https://www.cypress.io']


describe('Logo', () => {
    urls.forEach((url) => {
      it(`Should display logo on ${url}`, () => {
        cy.visit(url)
        cy.get('#logo img')
          .should('have.attr', 'src')
          .and('include', 'logo')
      })
    })
  })