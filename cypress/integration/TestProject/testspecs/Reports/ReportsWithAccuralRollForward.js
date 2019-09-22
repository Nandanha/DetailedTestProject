import TrinityLoginPage from '../common/TrinityLoginPage';
import TrinityHomePage from '../common/TrinityHomePage';
import TrinityGldatePage from '../common/TrinityGldatePage';  
import TrinityReportsPage, { SELECT_REPORT, Accuralreport, GLAcctype } from '../common/TrinityReportsPage';  


it('Report Page with  AccuralRollForward report Test ',() => {

    // login steps   	  
    TrinityLoginPage.visit();
	TrinityLoginPage.type('user2','Welcome#321');
    TrinityLoginPage.pressLogin();
    
    // Homepage load check and navigation
    TrinityHomePage.pageload();
	TrinityHomePage.successfulLogincheck();
	TrinityHomePage.navigateToReportsPage();
   
    cy.get(SELECT_REPORT,{timeout:5000}).click();
    cy.get(Accuralreport).scrollIntoView();
    cy.get(Accuralreport).click();
    cy.get(GLAcctype).should('be.visible');
    
})