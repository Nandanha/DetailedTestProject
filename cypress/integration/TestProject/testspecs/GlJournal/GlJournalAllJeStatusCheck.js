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


it('Gljournal PageTest for All JE status(working/pending/posted)', () => {

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

    cy.get(FIRST_ROW_UNCHCEKED).click();
    cy.wait(5000);
    cy.get(REJECT_ENTRY).should('not.be.visible')
    cy.get(APPROVE_ENTRY).should('not.be.visible')
    cy.get(SUBMIT_BUTTON).click();
    cy.wait(5000);

    TrinityGljournalPage.filter('pending');
    cy.get(FIRST_ROW_UNCHCEKED).click();
    cy.wait(5000);
    cy.get(APPROVE_ENTRY).click();
    cy.wait(5000);

    TrinityGljournalPage.filter('posted');
    cy.get(FIRST_ROW_UNCHCEKED).click();
    cy.wait(5000);
    cy.get(REJECT_ENTRY).should('not.be.visible')
    cy.get(APPROVE_ENTRY).should('not.be.visible')


})