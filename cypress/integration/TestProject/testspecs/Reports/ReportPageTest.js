
import TrinityLoginPage from '../common/TrinityLoginPage'
import TrinityHomePage from '../common/TrinityHomePage';
import TrinityGldatePage from '../common/TrinityGldatePage';  
import TrinityReportsPage, { DAILYOPTION, MTDOPTION, YTDOPTION, SELECT_DATE_OPTIONS,ITDOPTION,ONEYROPTION,Q1OPTION,Q2OPTION,Q3OPTION,Q4OPTION } from '../common/TrinityReportsPage';  

it('Report Page Search Test for all the avialble date options ',() => {

    // login steps   	  
    TrinityLoginPage.visit();
	TrinityLoginPage.type('user2','Welcome#321');
    TrinityLoginPage.pressLogin();
    
    // Homepage load check and navigation
    TrinityHomePage.pageload();
	TrinityHomePage.successfulLogincheck();
	TrinityHomePage.navigateToReportsPage();
     
	//Basic navigation check 	
    TrinityReportsPage.searchForAnEntity('2017-01-11','2019-11-20');
    TrinityReportsPage.pageload();
    cy.get(SELECT_DATE_OPTIONS).click();
    TrinityReportsPage.validate_date_options(DAILYOPTION) 
    TrinityReportsPage.validate_date_options(MTDOPTION) 
    TrinityReportsPage.validate_date_options(YTDOPTION)
    TrinityReportsPage.validate_date_options(ITDOPTION) 
    TrinityReportsPage.validate_date_options(ONEYROPTION) 
    TrinityReportsPage.validate_date_options(Q1OPTION)
    TrinityReportsPage.validate_date_options(Q2OPTION) 
    TrinityReportsPage.validate_date_options(Q3OPTION) 
    TrinityReportsPage.validate_date_options(Q4OPTION)
      
})