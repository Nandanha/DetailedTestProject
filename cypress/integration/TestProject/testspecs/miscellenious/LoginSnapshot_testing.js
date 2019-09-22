/// <reference types="Cypress" />

import TrinityLoginPage from '../common/TrinityLoginPage';
import TrinityHomePage from '../common/TrinityHomePage';

beforeEach(function () {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1440,900)  
  })

it('Snapshot testing for taskdefinitions page', function() {

    TrinityLoginPage.visit();
    TrinityLoginPage.type('user2', 'Welcome#321');
    TrinityLoginPage.pressLogin();
    TrinityHomePage.successfulLogincheck();
    TrinityHomePage.navigateToTaskPage();
    cy.compareSnapshot('Runtaskdef_1');
  })