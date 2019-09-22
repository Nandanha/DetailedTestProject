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
 

function loginAndNavigate(user,password)
{
    TrinityLoginPage.visit();
    TrinityLoginPage.type(user, password);
    TrinityLoginPage.pressLogin();

    // Homepage load check and navigation
    TrinityHomePage.pageload();
    TrinityHomePage.successfulLogincheck();
    TrinityHomePage.navigateToGlJournalPage();

    //Gljournal	
    TrinityGljournalPage.searchForAnEntity('2017-01-11', '2019-11-20');
}

function signOff()
{
  TrinityLoginPage.logout();
}


it('Gljournal PageTest for updation of a rejected entry',() => {

    // login test   
    /*
    loginAndNavigate('user13', 'Welcome#321');
    TrinityGljournalPage.addnewEntry();
    TrinityGljournalPage.submitlineEntry();
    TrinityGljournalPage.filter('pending');

    cy.get('div [row-index="0"] div[col-id="legalEntity"] span  span[class="ag-icon ag-icon-checkbox-unchecked"]').click();
    cy.get('button[title="Reject Entry"]').should('not.be.visible');
    cy.wait(3000);
    signOff();  
    cy.wait(3000);
    loginAndNavigate('user13', 'Welcome#321');
    TrinityGljournalPage.addnewEntry();
    TrinityGljournalPage.submitlineEntry();
    signOff();  
*/
    loginAndNavigate('user15', 'Welcome#321');
    TrinityGljournalPage.filter('pending');
    TrinityGljournalPage.rejectentries();
    signOff();  
    
    loginAndNavigate('user13', 'Welcome#321');
    TrinityGljournalPage.filter('rejected');
    TrinityGljournalPage.editentry(2,2);
})