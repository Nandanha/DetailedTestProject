///<reference types ="Cypress"/>

import TrinityLoginPage from '../common/TrinityLoginPage';
import TrinityHomePage from '../common/TrinityHomePage';
import TrinityTaskPage from '../common/TrinityTaskPage';
import 'cypress-drag-drop';


beforeEach(function () {
  // run these tests as if in a desktop
  // browser with a 720p monitor
  cy.viewport(1440,900)

})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


it('Checklist page validation with drag and drop feature testing', function() {

    TrinityLoginPage.visit();
    TrinityLoginPage.type('user2', 'Welcome#321');
    TrinityLoginPage.pressLogin();
    TrinityHomePage.successfulLogincheck();
    TrinityHomePage.navigateToChecklistPage();
    TrinityHomePage.pageload();
    cy.get('[col-id="name"] > .ag-cell-label-container').should('be.visible')
    cy.get('.ag-column-drop-row-group > .ag-column-drop-empty-message').should('be.visible')
    /*cy.get('[col-id="name"] > .ag-cell-label-container').drag('.ag-column-drop-row-group > .ag-column-drop-empty-message','center');

     cy.get('[col-id="name"] > .ag-cell-label-container').trigger('dragstart',{dataTransfer: new DataTransfer})
       .get('.ag-column-drop-row-group > .ag-column-drop-empty-message').trigger('dragenter')
       .get('[col-id="name"] > .ag-cell-label-container').trigger('drop').trigger('dragend')
    */


cy.get('[col-id="name"] > .ag-cell-label-container')
  .trigger('mousedown', { which: 1 })
  .trigger('mousemove', {clientX: 400, clientY: 500})
  .trigger('mouseup', {force: true})

  })