///<reference types ="Cypress"/>

it('GlDate error message check when the number of transactions returned exeeds the limit allowed to display ',() => {

    // login test   	  
    cy.visit('https://ttrinity/')
    cy.get('#okta-signin-username').type('user2').should('have.value', 'user2') // true
	cy.get('#okta-signin-password').type('Welcome#321').should('have.value', 'Welcome#321') // true
	cy.get('#okta-signin-submit').click();{setTimeout=10000}

	//Basic navigation check 	
	cy.wait(5000);
	//cy.wait('#displayName');
	cy.get('#displayName').should('be.visible');
	cy.get('#mainMenu-gj-icon').click();
	cy.get('#mainMenu-reports-icon').click();
	cy.get('#mainDrawer-icon').click();
	cy.get('#mainMenu-glDate-icon').click();
	
	//GlDate	
	cy.get('#leAS > .select__control > .select__value-container',{timeout: 4000}).click();
	cy.get('#react-select-leAS-instance-option-2').click();
	cy.get('#startDate').type('2016-01-01');
	cy.get('#endDate').type('2019-01-01');
	cy.get('#queryTransButton > .MuiButton-label-122').click();	
	cy.wait(5000)
	cy.get('#message-id').contains('1000 transactions are found. It exceeds a maximum number of transactions to return. Add more filters to reduce search results.');
	cy.get('#message-id')
    
})