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

beforeEach(function () {
  // run these tests as if in a desktop
  // browser with a 720p monitor
  cy.viewport(1280, 720)
})



it('ReportsPage Signoff test', () => {

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

  //cy.get('[href="/treports"] > .MuiButtonBase-root-58 > .MuiSvgIcon-root-61').click();
  cy.visit('https://ttrinity/treports');
  cy.wait(5000);
  TrinityReportsPage.navgationsignofftask();


})