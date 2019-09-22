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



function loginAndNavigate(user, pwd) {
    TrinityLoginPage.type(user, pwd);
    TrinityLoginPage.pressLogin();

    // Homepage load check and navigation
    TrinityHomePage.pageload();
    TrinityHomePage.successfulLogincheck();
    TrinityHomePage.navigateToGlJournalPage();

    //Gljournal	
    TrinityGljournalPage.searchForAnEntity('2017-01-11', '2019-11-20');
}

function signOff() {
    TrinityLoginPage.logout();
}


it('Gljournal PageTest for Multiple entries bulk Rejection', () => {

    // login test  
    TrinityLoginPage.visit();
    loginAndNavigate('user13', 'Welcome#321');
    TrinityGljournalPage.addnewEntry();
    TrinityGljournalPage.submitlineEntry();
    signOff();

    loginAndNavigate('user13', 'Welcome#321');
    TrinityGljournalPage.addnewEntry();
    TrinityGljournalPage.submitlineEntry();
    signOff();

    loginAndNavigate('user15', 'Welcome#321');
    TrinityGljournalPage.rejectentries();

})