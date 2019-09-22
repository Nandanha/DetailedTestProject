import TrinityHomePage from './TrinityHomePage'
export const DASHBOARD_MENU= '#mainMenu-dash-text';
export const LOGIN_PAGE_TITLE='Login - Trinity';
export const IMPORT_BUTON='#jeImport-btn > .MuiButton-label-122'

class TrinityDashboard {
static intradayimport()
{
    this.pageload();
    cy.get(IMPORT_BUTON).should('be.visible');
    cy.get(IMPORT_BUTON).click();
    this.elementwait();
    cy.get('#message-id').invoke('text').then(sometext =>cy.log(sometext));
    cy.get('#message-id').contains('IntraDay run started for');
}    
  
  static pageload() {
    cy.wait(5000);
}

static elementwait() {
    cy.wait(3000)
}

  
}

export default TrinityDashboard;