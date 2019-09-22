import TrinityLoginPage from '../common/TrinityLoginPage';
import TrinityHomePage from '../common/TrinityHomePage';

  it('Valid login credentials Test', function() {

    TrinityLoginPage.visit();
    TrinityLoginPage.type('user2', 'Welcome#321');
    TrinityLoginPage.pressLogin();
    TrinityHomePage.successfulLogincheck();
    TrinityLoginPage.logout();
  })
