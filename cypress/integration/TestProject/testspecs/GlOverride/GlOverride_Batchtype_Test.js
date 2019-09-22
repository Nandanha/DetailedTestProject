import TrinityLoginPage from '../common/TrinityLoginPage';
import TrinityHomePage from '../common/TrinityHomePage';
import TrinityGldatePage from '../common/TrinityGldatePage';
import TrinityGljournalPage from '../common/TrinityGljournalPage';
import TrinityReportsPage from '../common/TrinityReportsPage';

beforeEach(function () {
    cy.viewport(1280, 720);
    Cypress.config('pageLoadTimeout', 100000)
  })


it('GlOverride PageTest for BatchType options cash and cash detail',() => {
     // login steps   	  
     TrinityLoginPage.visit();
     TrinityLoginPage.type('user2', 'Welcome#321');
     TrinityLoginPage.pressLogin();
 
     // Homepage load check and navigation
     TrinityHomePage.pageload();
     TrinityHomePage.successfulLogincheck();
     TrinityHomePage.navigateToGlDatePage();

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
 
     cy.get('#batchTypeAS > .select__control > .select__value-container > .select__single-value').click();
     cy.get('#react-select-batchTypeAS-instance-option-0').click();
     cy.wait(3000);
     cy.get('#queryTransButton > .MuiButton-label-122').click();	
     cy.wait(5000);
    cy.get('div [row-index="0"] div[col-id="batchType"]').contains('Cash');

    //Logout check by confirming with Page title
    cy.get('#mainMenu-logout-icon').click();
    cy.title().should('eq', 'Login - Trinity');   


})