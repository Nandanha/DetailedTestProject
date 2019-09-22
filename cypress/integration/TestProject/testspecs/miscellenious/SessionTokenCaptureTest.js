describe('Trinity API testing', () => {
      it('Validate the REST API status', () => {
      cy.request({
            method: 'POST',
            url: 'https://dev-418077.oktapreview.com/api/v1/authn',
            body: {
                  "username": "user2",
                  "password": "Welcome#321",
                  "options": {
                    "multiOptionalFactorEnroll": true,
                    "warnBeforePasswordExpired": true
                  }  
                }
            
          })

          .then((response) => {
            // response.body is automatically serialized into JSON
            expect(response.status).eq(200) })// true
     })

     it('Extract SessionToken from response', () => {
      cy.request({
          method: 'POST',
          url: 'https://dev-418077.oktapreview.com/api/v1/authn',
          body: {
                "username": "user2",
                "password": "Welcome#321",
                "options": {
                  "multiOptionalFactorEnroll": true,
                  "warnBeforePasswordExpired": true
                }  
              }
  
        }).then(response => {
          const target = (response.body.sessionToken)
        cy.log("SessionToken:",target)
        })
  
      })
})
