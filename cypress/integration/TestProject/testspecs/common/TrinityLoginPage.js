import TrinityHomePage from './TrinityHomePage'
const USERID = '#okta-signin-username';
const PASSWORD = '#okta-signin-password';
const LOGIN = '#okta-signin-submit';
const MAINMENU_LOGOUT='#mainMenu-logout-icon';
export const LOGIN_PAGE_TITLE='Login - Trinity';

class TrinityLoginPage {

  
  static pageload() {
    cy.wait(5000);
}

static elementwait() {
    cy.wait(3000)
}

  static visit() {
    cy.visit(Cypress.env('baseUrl'));
    cy.title().should('eq', 'Login - Trinity');
  }
  static type(user, pwd) {
  cy.get(USERID).type(user).should('have.value',user) // true
	cy.get(PASSWORD).type(pwd).should('have.value',pwd) // true
  }
  static pressLogin() {
    cy.get(LOGIN).click();
    return new TrinityHomePage();
  }

  static login_with_non_adminuser(user,pwd)
  {
     this.visit();
     this.type(user,pwd);
     this.pressLogin();
  }
  
  static login_with_adminuser(user,pwd)
  {
     this.visit();
     this.type(user,pwd);
     this.pressLogin();
  }

  static logout()
  {
    cy.get(MAINMENU_LOGOUT).click();
    this.pageload();
    cy.title().should('eq',LOGIN_PAGE_TITLE );
  }

  static signoff()
  {

  }

}

export default TrinityLoginPage;
