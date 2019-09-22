///<reference types ="Cypress"/>
import TrinityLoginPage from '../common/TrinityLoginPage';
import TrinityHomePage from '../common/TrinityHomePage';
import TrinityGldatePage from '../common/TrinityGldatePage';
import TrinityGljournalPage from '../common/TrinityGljournalPage';
import TrinityReportsPage from '../common/TrinityReportsPage';

beforeEach(function () {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720)
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

function filter(filtervalue) {
    cy.get('.MuiSelect-select-376').click();
    cy.wait(2000);
    cy.get('#batch-status-' + filtervalue).click().type('{esc}');
    cy.wait(2000);
    // cy.get('#mainToolbar').click();
    cy.wait(2000);
    cy.get('#queryEntriesButton > .MuiButton-label-122').click();
    cy.wait(5000);
}
it('Gljournal PageTest for change local debit / local credit and fx rate cleanup with delete operation', () => {


    // login steps   	  
    TrinityLoginPage.visit();
    TrinityLoginPage.type('user2', 'Welcome#321');
    TrinityLoginPage.pressLogin();

    // Homepage load check and navigation
    TrinityHomePage.pageload();
    TrinityHomePage.successfulLogincheck();
    TrinityHomePage.navigateToGlJournalPage();

    //Gljournal	
    TrinityGljournalPage.searchForAnEntity('2017-01-11', '2019-11-20');
    TrinityGljournalPage.addnewEntryWithCurrencylocalDebitCreditFXrate();
    TrinityGljournalPage.saveEntry();
    TrinityGljournalPage.filter('working');


    cy.get('div [row-index="0"] div[col-id="legalEntity"] span  span[class="ag-icon ag-icon-checkbox-unchecked"]').click();
    cy.wait(5000);
    cy.get('button[title="Submit Entry"]').click();
    cy.wait(5000);

    filter('pending');

    cy.get('div [row-index="0"] div[col-id="legalEntity"] span  span[class="ag-icon ag-icon-checkbox-unchecked"]').click();
    cy.wait(5000);
    cy.get('button[title="Rollback Entry"]').click();
    cy.wait(5000);

    cy.get('div [row-index="0"] div[col-id="legalEntity"] span  span[class="ag-icon ag-icon-checkbox-unchecked"]').click();
    cy.wait(5000);
    cy.get('button[name="deleteButton"]').click();
    cy.wait(5000);

    cy.get('#delete-entry-dialog-confirm-btn > .MuiButton-label-122').click();
    cy.wait(5000);

})