
import TrinityLoginPage from '../common/TrinityLoginPage';
import TrinityHomePage from '../common/TrinityHomePage';
import TrinityGldatePage from '../common/TrinityGldatePage';  

it('GlDate Page Search Test for a startdate and enddate criteria passed ',() => {

	// login test 
	TrinityLoginPage.visit();
	TrinityLoginPage.type('user2','Welcome#321');
	TrinityLoginPage.pressLogin();
	
	TrinityHomePage.pageload();
	TrinityHomePage.successfulLogincheck();
	TrinityHomePage.navigateToGlDatePage();

	TrinityGldatePage.searchForAnEntity('2017-01-11','2019-11-20');
	TrinityGldatePage.pageload();
})