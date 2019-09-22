/// <reference types="Cypress" />

export const SELECT_ENTITY = '#leAS > .select__control > .select__value-container';
export const OPTION_2 = '#react-select-leAS-instance-option-4';
export const START_DATE = '#startDate';
export const END_DATE = '#endDate';
export const SEARCH_BUTTON = '#queryEntriesButton > .MuiButton-label-122';
export const GLAcctype = '#glAccountAS > .select__control > .select__value-container'
export const FIRST_ROW='[row-index="0"] > .ag-cell > .ag-cell-wrapper > .ag-cell-value > .ag-row-group-indent-0 > .ag-group-contracted > .ag-icon'
export const FIRST_ROW_UNCHCEKED = 'div [row-index="0"] div[col-id="legalEntity"] span  span[class="ag-icon ag-icon-checkbox-unchecked"]'
export const SECOND_ROW_UNCHCEKED = 'div [row-index="1"] div[col-id="legalEntity"] span  span[class="ag-icon ag-icon-checkbox-unchecked"]'

export const ADD_ENTRY = 'button[title="Add Entry"]'
export const entry_debitle_0 = 'div[role="row"] div[row-index="0"] div[col-id="debitLE"]'
export const entry_creditle_0 = 'div[role="row"] div[row-index="0"] div[col-id="creditLE"]'
export const entry_debitlocal_0='div[role="row"] div[row-index="0"] div[col-id="debitLocal"]'
export const entry_creditlocal_1='div[role="row"] div[row-index="1"] div[col-id="creditLocal"]' 
export const entry_accname_0 = 'div[role="row"] div[row-index="0"] div[col-id="gLAccountName"]'
export const entry_transactiontype_0 = 'div[role="row"] div[row-index="0"] div[col-id="transactionType"]'
export const entry_debitle_1 = 'div[role="row"] div[row-index="1"] div[col-id="debitLE"]'
export const entry_creditle_1 = 'div[role="row"] div[row-index="1"] div[col-id="creditLE"]'
export const entry_accname_1 = 'div[role="row"] div[row-index="1"] div[col-id="gLAccountName"]'
export const entry_transactiontype_1 = 'div[role="row"] div[row-index="1"] div[col-id="transactionType"]'
export const selectoption = '#react-select-grid-select-editor-instance-option-0'

export const SAVE_BUTTON = 'button[title="Save Entry"]'
export const SUBMIT_BUTTON='button[title="Submit Entry"]'
export const ROLLBACK_BUTTON='button[title="Rollback Entry"]'
export const DELETE_BUTTON='button[name="deleteButton"]'
export const DELETE_CONFIRMATION='#delete-entry-dialog-confirm-btn > .MuiButton-label-122'
export const MESSAGE = '#message-id'
const SELECT_JESTATUS = '.MuiSelect-select-376'
const ADD_NEW_LINE='#add-new-line-btn'
const SAVE_LINE='#saves-lines-btn'
const SUBMIT_LINE='#submit-lines-btn'
const DELETE_LINE='#delete-lines-btn'
const AGGROUP_HEADER='[col-id="changedDate"] > .ag-cell-label-container > .ag-header-cell-label > .ag-header-cell-text'
const AGROW='.ag-row-first > .ag-cell > .ag-cell-wrapper > .ag-cell-value > .ag-row-group-indent-0 > .ag-group-value'
const AGCOPY=':nth-child(1) > #eName'
const AGREVERSE=':nth-child(2) > #eName'
const AGSTORE1=':nth-child(3) > #eName'
const AGSTORE2=':nth-child(4) > #eName'
export const REJECT_ENTRY='button[title="Reject Entry"]'
export const REJECT_CONFIRMATION='#reject-btn > .MuiButton-label-122'
export const APPROVE_ENTRY='button[title="Approve Entry"]'
export const CURRENCY='div[role="row"] div[row-index="0"] div[col-id="transactionCurrency"]'
export const option_currency_7='#react-select-grid-select-editor-instance-option-7'
export const expand_entry='div [row-index="0"] span[class="ag-icon ag-icon-expanded"]'
export const FXrate='div[role="row"] div[row-index="1"] div[col-id="fXRate"]'


class TrinityGljournalPage {

    static editentry(debitval,creditval)
    {
        cy.get(FIRST_ROW_UNCHCEKED).click();
        this.pageload();
        cy.get(expand_entry).click();
        this.pageload();
        cy.get(entry_debitle_0).scrollIntoView();
        cy.get(entry_debitle_0).should('be.visible');
        cy.get(entry_debitle_0).dblclick().wait(3000)
            .type(debitval);
        this.pageload
        cy.get(entry_creditle_1).dblclick().wait(3000)
            .type(creditval);
        this.pageload();
        this.saveEntry();    
    }

    static approveentry()
    { 
    cy.get(FIRST_ROW_UNCHCEKED).should('be.visible');
    cy.log('first row is visible')
    cy.get(FIRST_ROW_UNCHCEKED).click();
    this.pageload();
    cy.get(APPROVE_ENTRY).click();
    this.pageload();
    cy.get('#message-id').contains('approved');
    }

    static approveentries()
    { 
    cy.get(FIRST_ROW_UNCHCEKED).should('be.visible');
    cy.get(FIRST_ROW_UNCHCEKED).click();
    this.pageload();
    cy.get(SECOND_ROW_UNCHCEKED).should('be.visible');
    cy.get(SECOND_ROW_UNCHCEKED).click();
    this.pageload();
    cy.get(APPROVE_ENTRY).click();
    this.pageload();
    cy.get('#message-id').contains('approved');
    }

    static rejectentry()
    { 
    cy.get(FIRST_ROW_UNCHCEKED).should('be.visible');
    cy.get(FIRST_ROW_UNCHCEKED).click();
    this.pageload();
    cy.get(REJECT_ENTRY).click();
    this.pageload();
    cy.get(REJECT_CONFIRMATION).click();
    cy.get('#message-id').contains('rejected');
    }
   
    static rejectentries()
    {
    cy.get(FIRST_ROW_UNCHCEKED).should('be.visible'); 
    cy.get(FIRST_ROW_UNCHCEKED).click();
    this.pageload();
    cy.get(SECOND_ROW_UNCHCEKED).should('be.visible');
    cy.get(SECOND_ROW_UNCHCEKED).click();
    this.pageload();
    cy.get(REJECT_ENTRY).click();
    this.pageload();
    cy.get(REJECT_CONFIRMATION).click();
    cy.get('#message-id').contains('rejected');
    }


    static pageload() {
        cy.wait(5000);
    }

    static elementwait() {
        cy.wait(3000)
    }

   
    static storeEntry()
    {
        cy.get(AGGROUP_HEADER).click();
        cy.get(FIRST_ROW_UNCHCEKED).first().trigger('contextmenu');
        cy.get(AGSTORE1).should('be.visible');
        cy.get(AGSTORE1).click({ force: true });
        this.pageload();
        cy.get('.ag-row-first > .ag-cell > .ag-cell-wrapper > .ag-cell-value > .ag-row-group-indent-0 > .ag-group-value').invoke('text').then(sometext =>cy.log(sometext));
        cy.get(FIRST_ROW_UNCHCEKED).first().trigger('contextmenu');
        cy.get(AGSTORE2).should('be.visible');
        cy.get(AGSTORE2).click({ force: true });
    }




static copyEntry()
{
    cy.get(AGGROUP_HEADER).click();
    cy.get(FIRST_ROW_UNCHCEKED).first().trigger('contextmenu');
    cy.get(AGCOPY).should('be.visible');
    cy.get(AGCOPY).click({ force: true });
    this.pageload();
    cy.get(AGROW).invoke('text').then(sometext =>cy.log(sometext));
    cy.get(AGROW).contains('Copied');
}

static reverseEntry()
{
    cy.get(AGGROUP_HEADER).click();
    cy.get(FIRST_ROW_UNCHCEKED).first().trigger('contextmenu');
    cy.get(AGREVERSE).should('be.visible');
    cy.get(AGREVERSE).click({ force: true });
    this.pageload();
    cy.get(AGROW).invoke('text').then(sometext =>cy.log(sometext));
    cy.get(AGROW).contains('Reversed');
}


    static searchForAnEntity(startdate, enddate) {
        cy.get(SELECT_ENTITY).click();
        //cy.get('#leAS').clear();
        cy.get(OPTION_2).click();
        cy.get(START_DATE).type(startdate);
        cy.get(END_DATE).type(enddate);
        cy.get(SEARCH_BUTTON).click();
        this.pageload();
        cy.get(FIRST_ROW).should('be.visible');
        cy.get(FIRST_ROW_UNCHCEKED).should('be.visible');
        
    }

    static saveEntry()
    {
        this.pageload()
        cy.get(SAVE_BUTTON).click();
        this.pageload()
        cy.get(MESSAGE).contains('Manual Entry saved');

    }

    static submitEntry()
    {
        this.pageload()
        cy.get(SUBMIT_BUTTON).click();
        this.pageload()
        cy.get(MESSAGE).contains('Manual Entry submitted');

    }
    
    static submitlineEntry()
    {
        this.pageload()
        cy.get(SUBMIT_LINE).click();
        this.pageload()
        cy.get(MESSAGE).contains('Manual Entry submitted');

    }


    static addnewEntry() {
        cy.get(ADD_ENTRY).click();
        this.pageload()

        this.pageload()
        cy.get(ADD_NEW_LINE).should('be.visible')
        cy.get(SAVE_LINE).should('be.visible')
        cy.get(SUBMIT_LINE).should('be.visible')
        cy.get(DELETE_LINE).should('not.be.visible')

        cy.get(entry_debitle_0).scrollIntoView();
        cy.get(entry_debitle_0).should('be.visible');
        cy.get(entry_debitle_0).dblclick().wait(3000)
            .type("4");
        this.pageload()
        cy.get(entry_creditle_1).dblclick().wait(3000)
            .type("4");

        this.pageload()
        cy.get(entry_accname_0).scrollIntoView();
        cy.get(entry_accname_0).should('be.visible');
        cy.get(entry_accname_0).click();
        this.pageload()
        cy.get(selectoption).should('be.visible');
        cy.get(selectoption).click();
        this.elementwait();
        cy.get(entry_transactiontype_0).should('be.visible');
        cy.get(entry_transactiontype_0).click();
        this.pageload()
        cy.get(selectoption).should('be.visible');
        cy.get(selectoption).click();

        this.pageload()
        cy.get(entry_accname_1).scrollIntoView();
        cy.get(entry_accname_1).should('be.visible');
        cy.get(entry_accname_1).click();
        this.pageload()
        cy.get(selectoption).should('be.visible');
        cy.get(selectoption).click();
        this.elementwait();
        cy.get(entry_transactiontype_1).should('be.visible');
        cy.get(entry_transactiontype_1).click();
        this.pageload()
        cy.get(selectoption).should('be.visible')
        cy.get(selectoption).click();


    }

    static addnewEntryWithCurrency()
    {
        cy.get(ADD_ENTRY).click();
        this.pageload()

        this.pageload()
        cy.get(ADD_NEW_LINE).should('be.visible')
        cy.get(SAVE_LINE).should('be.visible')
        cy.get(SUBMIT_LINE).should('be.visible')
        cy.get(DELETE_LINE).should('not.be.visible')

        cy.get(entry_debitle_0).scrollIntoView();
        cy.get(entry_debitle_0).should('be.visible');
        cy.get(entry_debitle_0).dblclick().wait(3000)
            .type("4");
        this.pageload()
        cy.get(entry_creditle_1).dblclick().wait(3000)
            .type("4");
        
    
            this.pageload()
            cy.get(entry_accname_0).scrollIntoView();
            cy.get(entry_accname_0).should('be.visible');
            cy.get(entry_accname_0).click();
            this.pageload()
            cy.get(selectoption).should('be.visible');
            cy.get(selectoption).click();
            this.elementwait();
            cy.get(entry_transactiontype_0).should('be.visible');
            cy.get(entry_transactiontype_0).click();
            this.pageload()
            cy.get(selectoption).should('be.visible');
            cy.get(selectoption).click();
            this.elementwait();
            cy.get(CURRENCY).should('be.visible')
            cy.get(CURRENCY).click();
            this.elementwait();
            cy.get(option_currency_7).should('be.visible')
            cy.get(option_currency_7).click();
            this.elementwait();

    
            this.pageload()
            cy.get(entry_accname_1).scrollIntoView();
            cy.get(entry_accname_1).should('be.visible');
            cy.get(entry_accname_1).click();
            this.pageload()
            cy.get(selectoption).should('be.visible');
            cy.get(selectoption).click();
            this.elementwait();
            cy.get(entry_transactiontype_1).should('be.visible');
            cy.get(entry_transactiontype_1).click();
            this.pageload()
            cy.get(selectoption).should('be.visible')
            cy.get(selectoption).click();   



    }


    static addnewEntryWithCurrencylocalDebitCreditFXrate()
    {
        cy.get(ADD_ENTRY).click();
        this.pageload()

        this.pageload()
        cy.get(ADD_NEW_LINE).should('be.visible')
        cy.get(SAVE_LINE).should('be.visible')
        cy.get(SUBMIT_LINE).should('be.visible')
        cy.get(DELETE_LINE).should('not.be.visible')

        cy.get(CURRENCY).should('be.visible')
        cy.get(CURRENCY).click();
        this.elementwait();
        cy.get(option_currency_7).should('be.visible')
        cy.get(option_currency_7).click();
        cy.wait(5000); 

        cy.get(entry_debitlocal_0).scrollIntoView();
        cy.get(entry_debitlocal_0).should('be.visible');
        cy.get(entry_debitlocal_0).dblclick().wait(3000)
            .type("4");
        this.pageload()
        cy.get(entry_creditlocal_1).dblclick().wait(3000)
            .type("4");
        cy.get(FXrate).dblclick().wait(3000)
        .type("2"); 
    
        this.pageload()
        cy.get(entry_accname_0).scrollIntoView();
        cy.get(entry_accname_0).should('be.visible');
        cy.get(entry_accname_0).click();
        this.pageload()
        cy.get(selectoption).should('be.visible');
        cy.get(selectoption).click();
        this.elementwait();
        cy.get(entry_transactiontype_0).should('be.visible');
        cy.get(entry_transactiontype_0).click();
        this.pageload()
        cy.get(selectoption).should('be.visible');
        cy.get(selectoption).click();

        this.pageload()
        cy.get(entry_accname_1).scrollIntoView();
        cy.get(entry_accname_1).should('be.visible');
        cy.get(entry_accname_1).click();
        this.pageload()
        cy.get(selectoption).should('be.visible');
        cy.get(selectoption).click();
        this.elementwait();
        cy.get(entry_transactiontype_1).should('be.visible');
        cy.get(entry_transactiontype_1).click();
        this.pageload()
        cy.get(selectoption).should('be.visible')
        cy.get(selectoption).click();


    }


    static filter(filtervalue) {
        cy.get(SELECT_JESTATUS).click();
        cy.wait(2000);
        cy.get('#batch-status-' + filtervalue).click().type('{esc}');
        cy.wait(2000);
        // cy.get('#mainToolbar').click();
        cy.wait(2000);
        cy.get(SEARCH_BUTTON).click();
        cy.wait(5000);
    }

    static submitEntry()
    {
        cy.get(FIRST_ROW_UNCHCEKED).should('be.visible');
        cy.get(FIRST_ROW_UNCHCEKED).click();
        this.pageload();
        cy.get(SUBMIT_BUTTON).click();
        this.pageload();
    }

    static rollbackEntry()
    {
        cy.get(FIRST_ROW_UNCHCEKED).should('be.visible');
        cy.get(FIRST_ROW_UNCHCEKED).click();
        this.pageload();
        cy.get(ROLLBACK_BUTTON).click();
        this.pageload();
    }
    
    static deleteEntry()
    {
        cy.get(FIRST_ROW_UNCHCEKED).should('be.visible');
        cy.get(FIRST_ROW_UNCHCEKED).click();
        this.pageload();
        cy.get(DELETE_BUTTON).click();
        this.pageload();
        cy.get(DELETE_CONFIRMATION).click();
        this.pageload
        cy.get(MESSAGE).contains('deleted');
    }


}
export default TrinityGljournalPage;
