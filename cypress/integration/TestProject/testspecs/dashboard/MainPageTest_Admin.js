import TrinityLoginPage from '../common/TrinityLoginPage';
import TrinityHomePage from '../common/TrinityHomePage';
import TrinityDashboard from "../common/TrinityDashboard";

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

it('Admin test for Main page /Dahsboard page, it is check to ensure only admin can access dashboard page', () => {

  // login steps   	  
  TrinityLoginPage.visit();
  TrinityLoginPage.type('user2', 'Welcome#321');
  TrinityLoginPage.pressLogin();

  // Homepage load check and navigation
  TrinityHomePage.pageload();
  TrinityHomePage.successfulLogincheck();
  TrinityHomePage.navigateToDashboardPage();
  TrinityDashboard.intradayimport();

  //hit import button

  //logout 
  TrinityLoginPage.logout();

})