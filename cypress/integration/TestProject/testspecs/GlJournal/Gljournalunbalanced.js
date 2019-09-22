import TrinityLoginPage from '../common/TrinityLoginPage';
import TrinityHomePage from '../common/TrinityHomePage';
import TrinityGldatePage from '../common/TrinityGldatePage';
import TrinityGljournalPage, {FIRST_ROW_UNCHCEKED,expand_entry,entry_debitle_0,entry_creditle_1} from '../common/TrinityGljournalPage';
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

it('Gljournal PageTest for unbalanced Entry with save button and other functionalities disabled', () => {

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
    TrinityGljournalPage.pageload();
    cy.get(expand_entry).click();
    TrinityGljournalPage.pageload();
    cy.get(entry_debitle_0).scrollIntoView();
    cy.get(entry_debitle_0).should('be.visible');
    cy.get(entry_debitle_0).dblclick().wait(3000)
        .type('5');
    TrinityGljournalPage.pageload();
    cy.get(entry_creditle_1).dblclick().wait(3000)
        .type('4');
    cy.get('button[title="Save Entry"]').should('not.be.visible');

})