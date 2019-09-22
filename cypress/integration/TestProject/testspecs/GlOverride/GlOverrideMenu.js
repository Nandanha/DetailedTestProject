import TrinityLoginPage from '../common/TrinityLoginPage';
import TrinityHomePage from '../common/TrinityHomePage';
import TrinityGldatePage from '../common/TrinityGldatePage';
import TrinityGljournalPage from '../common/TrinityGljournalPage';
import TrinityReportsPage from '../common/TrinityReportsPage';

beforeEach(function () {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720);
    Cypress.config('pageLoadTimeout', 100000)
    //Cypress.config('baseUrl','testthis')
  })


it('GlOverrideMenu test',() => {
    // login test   	  
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
    
    cy.get('#queryTransButton > .MuiButton-label-122').click();	
    cy.wait(5000);
    cy.get('div [row-index="0"] div[col-id="id"] span  span[class="ag-icon ag-icon-checkbox-unchecked"]').should('be.visible');
    cy.get('div [row-index="0"] div[col-id="id"] span  span[class="ag-icon ag-icon-checkbox-unchecked"]').click();
    cy.wait(5000);
    const todaysDate = Cypress.moment().format('YYYY-MM-DD')
    cy.get('#gl-date-picker').type(todaysDate);
    cy.wait(2000);
    

    cy.get('#override-btn').then(($btn) => {
        
        if ($btn.hasClass('disabled')) {
            cy.log('Overide date same as gl date hence override button is disabled');
        } else {
            cy.get('#override-btn').click();
            cy.get('.MuiTypography-root-77 > :nth-child(5)').invoke('text').then(sometext =>cy.log(sometext));
            cy.get('#glDate-override-btn > .MuiButton-label-122').should('be.visible');
            cy.get('#glDate-override-btn > .MuiButton-label-122').click();
            cy.wait(5000);
            cy.get('#message-id').contains('GL Override successful.');
            cy.get('#glDate-view-logs-btn').click();
            const todaysDate1 = Cypress.moment().format('M/D/YYYY')
            cy.get('div [row-index="0"] div[col-id="notes"]').contains('NewDate: '+todaysDate1)
            cy.get('#glDate-override-logs-close-btn > .MuiButton-label-122').click();
        }

    })


    
    //Logout check by confirming with Page title
    cy.get('#mainMenu-logout-icon').click();
    cy.title().should('eq', 'Login - Trinity');   

})