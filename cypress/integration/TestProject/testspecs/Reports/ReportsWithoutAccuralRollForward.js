import TrinityLoginPage from '../common/TrinityLoginPage';
import TrinityHomePage from '../common/TrinityHomePage';
import TrinityGldatePage from '../common/TrinityGldatePage'; 
import { SELECT_REPORT, Accuralreport, GLAcctype, NonAccuralreport } from "../common/TrinityReportsPage";

it('Report Page without AccuralRollForward report Test',() => {

     // login steps   	  
     TrinityLoginPage.visit();
     TrinityLoginPage.type('user2','Welcome#321');
     TrinityLoginPage.pressLogin();
     
     // Homepage load check and navigation
     TrinityHomePage.pageload();
     TrinityHomePage.successfulLogincheck();
     TrinityHomePage.navigateToReportsPage();
    
     cy.get(SELECT_REPORT,{timeout:5000}).click();
     cy.get(NonAccuralreport).scrollIntoView();
     cy.get(NonAccuralreport).click();
     cy.get(GLAcctype).should('not.be.visible');
 
})

