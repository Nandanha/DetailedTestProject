import TrinityLoginPage from '../common/TrinityLoginPage';
import TrinityHomePage from '../common/TrinityHomePage';
import TrinityGldatePage from '../common/TrinityGldatePage';
import TrinityGljournalPage from '../common/TrinityGljournalPage';
import TrinityReportsPage from '../common/TrinityReportsPage';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

it('Gljournal Page Test with basic checks and adding a new entry and saving it ',() => {

    // login steps   	  
TrinityLoginPage.visit();
TrinityLoginPage.type('user2', 'Welcome#321');
TrinityLoginPage.pressLogin();

// Homepage load check and navigation
TrinityHomePage.pageload();
TrinityHomePage.successfulLogincheck();
TrinityHomePage.navigateToGlJournalPage();

//Gljournal	
TrinityGljournalPage.searchForAnEntity('2017-01-11','2019-11-20');
TrinityGljournalPage.addnewEntry();
TrinityGljournalPage.saveEntry();
    

})