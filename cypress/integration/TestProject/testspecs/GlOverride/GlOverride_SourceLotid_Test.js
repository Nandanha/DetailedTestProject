
beforeEach(function () {
    cy.viewport(1280, 720);
    Cypress.config('pageLoadTimeout', 100000)
  })

function searchmaxreturn(val)
{
    cy.get('#max-return-select-'+val).click();
    cy.get('queryTransButton > .MuiButton-label-122').click();	
    cy.wait(5000);
}



it('GlOverride page test with sourcelot id options',() => {
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

    cy.get('#queryTransButton > .MuiButton-label-122').click();	
    cy.wait(5000);
    cy.get('div [row-index="0"] div[col-id="batchType"]').contains('Cash Detail');
   
    cy
    .get('div [row-index="0"] div[col-id="sourceLotId"]')
    .invoke('text')  // for input or textarea, .invoke('val')
    .then(text => {
    const someText = text;
    cy.get('#source-lot-id-input').type(someText);
    cy.wait(3000);
    cy.get('#queryTransButton > .MuiButton-label-122').click();	
    cy.wait(5000);
    cy.get('div [row-index="0"] div[col-id="sourceLotId"]').contains(someText);
    });


    //Logout check by confirming with Page title
    cy.get('#mainMenu-logout-icon').click();
    cy.title().should('eq', 'Login - Trinity');   


})