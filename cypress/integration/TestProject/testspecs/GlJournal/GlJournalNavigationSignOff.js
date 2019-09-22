import TrinityLoginPage from '../common/TrinityLoginPage';
import TrinityHomePage from '../common/TrinityHomePage';
import TrinityGldatePage from '../common/TrinityGldatePage';
import TrinityGljournalPage, { FIRST_ROW_UNCHCEKED, REJECT_ENTRY, APPROVE_ENTRY, SUBMIT_BUTTON } from '../common/TrinityGljournalPage';
import TrinityReportsPage from '../common/TrinityReportsPage';

beforeEach(function () {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720)
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


it('Gljournal New entry creation and navigation signoff test', () => {

    // login steps   	  
    TrinityLoginPage.visit();
    TrinityLoginPage.type('user2', 'Welcome#321');
    TrinityLoginPage.pressLogin();

    // Homepage load check and navigation
    TrinityHomePage.pageload();
    TrinityHomePage.successfulLogincheck();
    TrinityHomePage.navigateToGlJournalPage();

    //Gljournal	
    TrinityGljournalPage.searchForAnEntity('2017-01-11', '2019-11-20');
    TrinityGljournalPage.addnewEntry();
    TrinityGljournalPage.saveEntry();
    TrinityGljournalPage.filter('working');
    TrinityGljournalPage.submitEntry();
    //cy.get().invoke('text').then(sometext =>cy.log(sometext.contains('Working')))
    TrinityGljournalPage.filter('pending')
    TrinityGljournalPage.approveentry();



    //cy.get('[href="/treports"] > .MuiButtonBase-root-58 > .MuiSvgIcon-root-61').click();
    cy.visit('https://ttrinity/treports');
    cy.wait(5000);
    if (cy.get('#unlockTB-btn').should('not.be.visible')) {
        cy.get('#navSignOff-btn > .MuiButton-label-122').click();
        cy.get('#lockTb-comment-tf').click();
        cy.get('#lockTb-lock-btn > .MuiButton-label-122').click();
        cy.get('#message-id').contains('has been approved');
        cy.wait(5000);
    }

    cy.get('#unlockTB-btn').should('be.visible');
    cy.get('#unlockTB-btn').click();
    cy.get('#unlockTb-unlock-btn > .MuiButton-label-122').should('be.visible');
    cy.get('#unlockTb-unlock-btn > .MuiButton-label-122').click();
    cy.get('#message-id').contains('Unlocked');
    cy.wait(5000);

})