const DISPLAYNAME = '#displayName';
const MAINMENU = '#mainDrawer-icon';
const REPORTS_MENUITEM = '#mainMenu-reports-icon';
const GLJOURNAl_MENUITEM = '#mainMenu-gj-icon';
const GLDATEICON_MENUITEM = '#mainMenu-glDate-icon';
export const CHECKLIST_MENUITEM='#mainMenu-checklist-icon'
export const TASK_MENUITEM='#mainMenu-taskdef-listItem'
export const DASHBOARD_MENU= '#mainMenu-dash-text';



class TrinityHomePage {

    static pageload(){
        cy.wait(5000);
    }

    static elementwait(){
        cy.wait(3000)
    }

    static successfulLogincheck() {
        this.pageload();
        cy.get(DISPLAYNAME).should('be.visible');
        cy.get( GLJOURNAl_MENUITEM).should('be.visible');
        cy.get(REPORTS_MENUITEM).should('be.visible')
        cy.get(MAINMENU).should('be.visible')
        
      }

      static navigateToReportsPage() {
        this.pageload();
        cy.get(MAINMENU).should('be.visible')
        cy.get(MAINMENU).click();
        cy.get(REPORTS_MENUITEM).should('be.visible')
        cy.get(REPORTS_MENUITEM).click();
      }
      static navigateToGlJournalPage() {
        this.pageload();
        cy.get(MAINMENU).should('be.visible')
        cy.get(MAINMENU).click();
        cy.get(REPORTS_MENUITEM).should('be.visible')
        cy.get(REPORTS_MENUITEM).click();
      }
      static navigateToGlJournalPage() {
        this.pageload();
        cy.get(MAINMENU).should('be.visible')
        cy.get(MAINMENU).click();
        cy.get(GLJOURNAl_MENUITEM).should('be.visible')
        cy.get(GLJOURNAl_MENUITEM).click();
      }
      static navigateToGlDatePage() {
        this.pageload();
        cy.get(MAINMENU).should('be.visible')
        cy.get(MAINMENU).click();
        cy.get(GLDATEICON_MENUITEM).should('be.visible')
        cy.get(GLDATEICON_MENUITEM).click();
      }
      static navigateToDashboardPage() {
        this.pageload();
        cy.get(MAINMENU).should('be.visible')
        cy.get(MAINMENU).click();
        cy.get(DASHBOARD_MENU).should('be.visible')
        cy.get(DASHBOARD_MENU).click();
        cy.get('#message-id').invoke('text').then(sometext =>cy.log(sometext));
        cy.get('#message-id').contains('No file is found for date');
      }

      static navigateToTaskPage() {
        this.pageload();
        cy.get(MAINMENU).should('be.visible')
        cy.get(MAINMENU).click();
        this.pageload();
        cy.get(TASK_MENUITEM).should('be.visible')
        cy.get(TASK_MENUITEM).click();
      }

      static navigateToChecklistPage() {
        this.pageload();
        cy.get(MAINMENU).should('be.visible')
        cy.get(MAINMENU).click();
        this.pageload();
        cy.get(CHECKLIST_MENUITEM).should('be.visible')
        cy.get(CHECKLIST_MENUITEM).click();
      }
}

export default TrinityHomePage;
