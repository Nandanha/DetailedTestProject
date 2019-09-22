///<reference types ="Cypress"/>

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

  function filter(filtervalue)
  {
  cy.get('.MuiSelect-select-376').click();
  cy.wait(2000);
  cy.get('#batch-status-'+filtervalue).click().type('{esc}');   
  cy.wait(2000);
 // cy.get('#mainToolbar').click();
  cy.wait(2000);
  cy.get('#queryEntriesButton > .MuiButton-label-122').click();
  cy.wait(5000); 
  }
it('Gljournal PageTest for expand/retract after adding 3 row to a balanced entry',() => {

    // login test   	  
    cy.visit('https://ttrinity/')
    cy.get('#okta-signin-username').type('user2').should('have.value', 'user2') // true
	cy.get('#okta-signin-password').type('Welcome#321').should('have.value', 'Welcome#321') // true
	cy.get('#okta-signin-submit').click();
    
    //Basic navigation check 	
    cy.wait(5000);
	cy.get('#displayName').should('be.visible');
	cy.get('#mainMenu-reports-icon').click();
    cy.get('#mainDrawer-icon').click();
    cy.get('#mainMenu-gj-icon').click();

    //Gljournal	
    cy.get('#leAS > .select__control > .select__value-container').click();
	cy.get('#react-select-leAS-instance-option-2').click();
	cy.get('#startDate').type('2018-01-11');
	cy.get('#endDate').type('2019-11-20');
	cy.get('#queryEntriesButton > .MuiButton-label-122').click();	
    cy.wait(5000);
    cy.get('[row-index="0"] > .ag-cell > .ag-cell-wrapper > .ag-cell-value > .ag-row-group-indent-0 > .ag-group-contracted > .ag-icon').should('be.visible');
    
    cy.get('button[id="add-entry-btn"]').click();
    cy.wait(5000);
    cy.wait(5000);
    cy.get('div[role="row"] div[row-index="0"] div[col-id="debitLE"]').dblclick().wait(3000)
      .type("9");
    cy.wait(5000);
    cy.get('div[role="row"] div[row-index="1"] div[col-id="creditLE"]').dblclick().wait(3000)
        .type("9");  
    cy.get('div[role="row"] div[row-index="0"] div[col-id="gLAccountName"]').click();
    cy.wait(5000);
    cy.get('#react-select-grid-select-editor-instance-option-0').click();
    cy.get('div[role="row"] div[row-index="0"] div[col-id="transactionType"]').click();
    cy.wait(5000);
    cy.get('#react-select-grid-select-editor-instance-option-0').click();
            
    
    cy.get('div[role="row"] div[row-index="1"] div[col-id="gLAccountName"]').click();
    cy.wait(5000);
    cy.get('#react-select-grid-select-editor-instance-option-0').click();
    cy.get('div[role="row"] div[row-index="1"] div[col-id="transactionType"]').click();
    cy.wait(5000);
    cy.get('#react-select-grid-select-editor-instance-option-0').click();
    cy.wait(5000);
    cy.get('button[title="Save Entry"]').click(); 
    cy.wait(5000);
    cy.get('#message-id').contains('Manual Entry saved');
    

    filter('working');
    cy.get('div [row-index="0"] span[class="ag-icon ag-icon-expanded"]').click();
    cy.get('#add-new-line-btn').should('be.visible');
    cy.get('div [row-index="0"] span[class="ag-icon ag-icon-contracted"]').click();
    cy.get('#add-new-line-btn').should('be.not.be.visible');
    cy.wait(5000);
    cy.get('div [row-index="0"] span[class="ag-icon ag-icon-expanded"]').click();
    cy.wait(5000);
    cy.get('#add-new-line-btn').should('be.visible');
    cy.get('div[role="row"] div[row-index="1"] div[col-id="creditLE"]').dblclick().wait(3000)
      .type("8");
    cy.wait(5000);
    cy.get('#add-new-line-btn').click();
    cy.get('div[role="row"] div[row-index="2"] div[col-id="creditLE"]').dblclick().wait(3000)
          .type("1"); 
    cy.get('div[role="row"] div[row-index="2"] div[col-id="gLAccountName"]').click();
    cy.wait(5000);
    cy.get('#react-select-grid-select-editor-instance-option-0').click();
    cy.get('div[role="row"] div[row-index="2"] div[col-id="transactionType"]').click();
    cy.wait(5000);
    cy.get('#react-select-grid-select-editor-instance-option-0').click();
    

    cy.wait(5000);
    cy.get('button[title="Save Entry"]').click(); 
    cy.wait(5000);
    cy.get('#message-id').contains('Manual Entry saved'); 


    cy.get('div [row-index="0"] div[col-id="legalEntity"] span  span[class="ag-icon ag-icon-checkbox-unchecked"]').click();
    cy.wait(5000);
    cy.get('div [row-index="0"] span[class="ag-icon ag-icon-expanded"]').click();
    cy.get('#add-new-line-btn').should('be.visible');
    cy.get('div[role="row"] div[row-index="2"] div[col-id="creditLE"]').should('be.visible');
})