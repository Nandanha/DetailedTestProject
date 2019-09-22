import TrinityLoginPage from '../common/TrinityLoginPage';
import TrinityHomePage from '../common/TrinityHomePage';
import TrinityTaskPage from '../common/TrinityTaskPage';

beforeEach(function () {
  // run these tests as if in a desktop
  // browser with a 720p monitor
  cy.viewport(1440,900)

})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


it('Reset button functionality test while defining task defintions', function() {
    TrinityLoginPage.visit();
    TrinityLoginPage.type('user2', 'Welcome#321');
    TrinityLoginPage.pressLogin();
    TrinityHomePage.successfulLogincheck();
    TrinityHomePage.navigateToTaskPage();
    TrinityTaskPage.resetTaskfileds();
  })