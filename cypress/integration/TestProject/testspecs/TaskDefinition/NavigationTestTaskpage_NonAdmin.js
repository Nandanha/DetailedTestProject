import TrinityLoginPage from '../common/TrinityLoginPage';
import TrinityHomePage, { CHECKLIST_MENUITEM, TASK_MENUITEM } from '../common/TrinityHomePage';
import TrinityTaskPage from '../common/TrinityTaskPage';


it('login Test to check task/checklist with non admin user and the checklist page should be visible and task definition page should not be visible', function() {

    TrinityLoginPage.visit();
    TrinityLoginPage.type('user10', 'Welcome#321');
    TrinityLoginPage.pressLogin();
    TrinityHomePage.successfulLogincheck();
    TrinityTaskPage.pageload();
    TrinityHomePage.navigateToChecklistPage();
    cy.get(TASK_MENUITEM).should('not.be.visible');

    //TrinityLoginPage.logout();
  })