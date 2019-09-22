
import TrinityLoginPage from './common/TrinityLoginPage'
import TrinityHomePage from './common/TrinityHomePage'
import TrinityGldatePage from '../common/TrinityGldatePage'  
import {Given,when,then} from 'cypress-cucumber-preprocessor'


    
Given('I am at TrinityLogin page',()=>{
    TrinityLoginPage.visit();
});


When('I successfully enter login credentials', () => {
    TrinityLoginPage.type('user2','Welcome#321');
    TrinityLoginPage.pressLogin();

    TrinityHomePage.pageload();
    TrinityHomePage.successfulLogincheck();
  });
  
Then('I am redirected to another domain', () => {
    TrinityHomePage.navigateToGlDatePage();
    TrinityGldatePage.searchForAnEntity('2017-01-11','2019-11-20');
    TrinityGldatePage.pageload();

  });
  


