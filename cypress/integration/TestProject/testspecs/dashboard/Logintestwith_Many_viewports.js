import TrinityLoginPage from '../common/TrinityLoginPage';
import TrinityHomePage from '../common/TrinityHomePage';
import TrinityTaskPage from '../common/TrinityTaskPage';


describe('Application test for various view port options available', function () {
    context('720p resolution', function () {
      beforeEach(function () {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720)
      })
  
      it('displays all options for create task', function () {
        TrinityLoginPage.visit();
        TrinityLoginPage.type('user2', 'Welcome#321');
        TrinityLoginPage.pressLogin();
        TrinityHomePage.successfulLogincheck();
        TrinityHomePage.navigateToTaskPage();
        TrinityTaskPage.addtask('Newtasktest');
      })
      afterEach(function () {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        TrinityLoginPage.logout
      })

    })
  
    context('iphone-5 resolution', function () {
      beforeEach(function () {
        // run these tests as if in a mobile browser
        // and ensure our responsive UI is correct
        cy.viewport('iphone-5')
      })
  
      it('displays all options for create task', function () {
        TrinityLoginPage.visit();
        TrinityLoginPage.type('user2', 'Welcome#321');
        TrinityLoginPage.pressLogin();
        TrinityHomePage.successfulLogincheck();
        TrinityHomePage.navigateToTaskPage();
        TrinityTaskPage.addtask('Newtasktest');
      })
      afterEach(function () {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        TrinityLoginPage.logout
      })

    })
  })