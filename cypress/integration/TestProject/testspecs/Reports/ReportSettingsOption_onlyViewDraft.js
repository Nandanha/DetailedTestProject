import TrinityLoginPage from '../common/TrinityLoginPage';
import TrinityHomePage from '../common/TrinityHomePage';
import TrinityGldatePage from '../common/TrinityGldatePage';  
import TrinityReportsPage from'../common/TrinityReportsPage';

it('Report Page Settings option with only view draft Test ',() => {

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
TrinityReportsPage.setViewDraft();


})