beforeEach(function () {
    
    cy.viewport(1280, 720);
    Cypress.config('pageLoadTimeout', 100000)
  })


it('Gljournal PageTest for signoff functionality',() => {
    // login test   	  
    cy.visit("");
    cy.get('#okta-signin-username').type('user2').should('have.value', 'user2') // true
	cy.get('#okta-signin-password').type('Welcome#321').should('have.value', 'Welcome#321') // true
	cy.get('#okta-signin-submit').click();

	//Basic navigation check 	
    cy.wait(5000);
    cy.get('#userAvatar',{timeout: 4000}).should('be.visible');
    
    //Logout check by confirming with Page title
    cy.get('#mainMenu-logout-icon').click();
    cy.title().should('eq', 'Login - Trinity');   

})