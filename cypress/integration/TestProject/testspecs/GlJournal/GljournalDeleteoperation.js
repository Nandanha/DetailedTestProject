import TrinityLoginPage from '../common/TrinityLoginPage';
import TrinityHomePage from '../common/TrinityHomePage';
import TrinityGldatePage from '../common/TrinityGldatePage';
import TrinityGljournalPage from '../common/TrinityGljournalPage';
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

it('Gljournal PageTest for BalancedEntry with a differenr currency and then deleting the same', () => {


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
    TrinityGljournalPage.addnewEntryWithCurrency();
    TrinityGljournalPage.saveEntry();
    TrinityGljournalPage.filter('working');
    TrinityGljournalPage.deleteEntry();

})