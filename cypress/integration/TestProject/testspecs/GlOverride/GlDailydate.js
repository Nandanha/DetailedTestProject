beforeEach(function () {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720);
    Cypress.config('pageLoadTimeout', 100000)
    //Cypress.config('baseUrl','testthis')
  })


it('GlDailydate page by enabling daily date option and differing date option',() => {
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

    const todaysDate = Cypress.moment().format('MMM DD, YYYY')
    //cy.get('span').should('contain', 'Order shipped on: ' + todaysDate)
    cy.get('#leAS > .select__control > .select__value-container').click();
    cy.get('#react-select-leAS-instance-option-4').click();
    cy.get('#startDate').type('2017-01-11');
    cy.get('#dateOptions-btn').click();
    cy.get('#dailyOption-btn').should('be.visible');
    cy.get('#dailyOption-btn').click();
    cy.get('#show-differing-dates-switch').click();
    cy.get('#cash-direct-switch').click();
    cy.get('#queryTransButton > .MuiButton-label-122').click();	
    cy.wait(5000);
    cy.get('div [row-index="0"] div[col-id="id"] span  span[class="ag-icon ag-icon-checkbox-unchecked"]').should('not.be.visible');
    cy.get('#cash-direct-switch').click();
    cy.get('#show-differing-dates-switch').click();
    cy.get('#endDate').type('2019-11-20');
    cy.get('#queryTransButton > .MuiButton-label-122').click();	
    cy.wait(5000);
    cy.get('div [row-index="0"] div[col-id="id"] span  span[class="ag-icon ag-icon-checkbox-unchecked"]').should('be.visible')
    cy.wait(2000);
    
    cy.get('#mainMenu-logout-icon').click();
    cy.title().should('eq', 'Login - Trinity');   

})