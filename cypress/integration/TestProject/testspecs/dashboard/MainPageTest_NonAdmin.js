///<reference types ="Cypress"/>
import TrinityLoginPage from '../common/TrinityLoginPage';
import TrinityDashboard from ".bin/cypress/integration/TrinityProject/common/TrinityDashboard";

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

it('Non-Admin test for Dahsboard page and the dashboard option should not be visible', () => {

  TrinityLoginPage.login_with_non_adminuser('user10', 'Welcome#321')
  //Basic navigation check 	
  cy.wait(5000);
  cy.get('#displayName').should('be.visible');
  cy.get('#mainMenu-reports-icon').click();
  cy.get('#mainDrawer-icon').click();
  cy.get(TrinityDashboard.DASHBOARD_MENU).should('not.be.visible')

  //Dashboard navigatio test 
  cy.visit('https://ttrinity/main');
  cy.wait(5000);
  cy.get(TrinityDashboard.DASHBOARD_MENU).should('not.be.visible');
  TrinityLoginPage.logout();
})