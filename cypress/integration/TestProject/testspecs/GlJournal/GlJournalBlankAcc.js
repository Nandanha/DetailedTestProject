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
it('Gljournal PageTest With Account Blank test ', () => {

  TrinityLoginPage.visit();
  TrinityLoginPage.type('user2', 'Welcome#321');
  TrinityLoginPage.pressLogin();

  // Homepage load check and navigation
  TrinityHomePage.pageload();
  TrinityHomePage.successfulLogincheck();
  TrinityHomePage.navigateToGlJournalPage();

  //Gljournal	
  TrinityGljournalPage.searchForAnEntity('2017-01-11', '2019-11-20');


  cy.get('button[title="Add Entry"]').click();
  cy.wait(5000);

  cy.get('div[role="row"] div[row-index="1"] div[col-id="gLAccountName"]').click();
  cy.wait(5000);
  cy.get('#react-select-grid-select-editor-instance-option-0').click();

  cy.get('div[role="row"] div[row-index="1"] div[col-id="transactionType"]').click();
  cy.wait(5000);
  cy.get('#react-select-grid-select-editor-instance-option-0').click();

  cy.wait(5000);
  cy.get('button[title="Save Entry"]').click();
  cy.get('#message-id').contains('entry is invalid');
  cy.get('#message-id');

})