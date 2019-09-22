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


it('Gljournal PageTest for Multiple users Rejection flow test i.e entry created by one user and approved by another', () => {

  TrinityLoginPage.visit();
  TrinityLoginPage.type('user13', 'Welcome#321');
  TrinityLoginPage.pressLogin();

  // Homepage load check and navigation
  TrinityHomePage.pageload();
  TrinityHomePage.successfulLogincheck();
  TrinityHomePage.navigateToGlJournalPage();

  //Gljournal	
  TrinityGljournalPage.searchForAnEntity('2017-01-11', '2019-11-20');
  TrinityGljournalPage.addnewEntry();
  TrinityGljournalPage.submitlineEntry();
  TrinityLoginPage.logout();

  TrinityLoginPage.type('user15', 'Welcome#321');
  TrinityLoginPage.pressLogin();

  // Homepage load check and navigation
  TrinityHomePage.pageload();
  TrinityHomePage.successfulLogincheck();
  TrinityHomePage.navigateToGlJournalPage();

  //Gljournal	
  TrinityGljournalPage.searchForAnEntity('2017-01-11', '2019-11-20');
  TrinityGljournalPage.filter('pending');
  TrinityGljournalPage.rejectentry();
})