describe('API Testing for Delta Project', () => {
    it('Validate the REST API status', () => {
    cy.request({
          method: 'GET',
          url: 'https://mpso5jvbs2.execute-api.us-east-1.amazonaws.com/dev/test',
        })
        .then((response) => {
          // response.body is automatically serialized into JSON
          expect(response.status).eq(200) })// true
   })

})
