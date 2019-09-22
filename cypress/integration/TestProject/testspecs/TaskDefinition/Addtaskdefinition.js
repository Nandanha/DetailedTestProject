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


it('Add task under taskdefinition and validate', function() {

    TrinityLoginPage.visit();
    TrinityLoginPage.type('user2', 'Welcome#321');
    TrinityLoginPage.pressLogin();
    TrinityHomePage.successfulLogincheck();
    TrinityHomePage.navigateToTaskPage();
    TrinityTaskPage.addtask('Newtasktest');
    TrinityTaskPage.filter('Newtasktest');

  })