
beforeEach(function () {
    cy.viewport(1280, 720);
    Cypress.config('pageLoadTimeout', 100000)
  })

function searchmaxreturn(val)
{
    cy.get('.MuiSelect-select-402').click();
    cy.get('#max-return-select-'+val).click().type('{esc}');
    cy.get('#queryTransButton > .MuiButton-label-122').click();	
    cy.wait(5000);
}


it('GlOverride test related to Max return options on search criteria',() => {
    // login test   	  
    cy.visit("");
    cy.get('#okta-signin-username').type('user2').should('have.value', 'user2') // true
	cy.get('#okta-signin-password').type('Welcome#321').should('have.value', 'Welcome#321') // true
	cy.get('#okta-signin-submit').click();

	//Basic navigation check 	
    cy.wait(5000);
    cy.get('#userAvatar',{timeout: 4000}).should('be.visible');
    cy.get('#mainMenu-reports-icon').click();
    cy.get('#mainDrawer-icon',{timeout:5000}).click();
    cy.get('#mainMenu-glDate-text > .MuiTypography-root-77').should('be.visible');
    cy.get('#mainMenu-glDate-text > .MuiTypography-root-77').click();

    cy.get('#leAS > .select__control > .select__value-container').click();
    cy.get('#react-select-leAS-instance-option-4').click();
    cy.get('#startDate').type('2017-01-11');
    cy.get('#endDate').type('2019-11-20');
    cy.get('#show-differing-dates-switch').click();
    cy.get('#batchTypeAS > .select__control > .select__value-container > .select__placeholder').click();
    cy.get('#react-select-batchTypeAS-instance-option-1').click();
    cy.wait(3000);
    
    searchmaxreturn(100);
    searchmaxreturn(250);
    searchmaxreturn(500);
    searchmaxreturn(1000);
    searchmaxreturn(2000);
    searchmaxreturn(5000);

    //Logout check by confirming with Page title
    cy.get('#mainMenu-logout-icon').click();
    cy.title().should('eq', 'Login - Trinity');   


})