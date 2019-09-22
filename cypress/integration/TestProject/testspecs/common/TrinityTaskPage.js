const USERID = '#okta-signin-username';
const PASSWORD = '#okta-signin-password';
const LOGIN = '#okta-signin-submit';
const MAINMENU_LOGOUT='#mainMenu-logout-icon';
const taskname='#taskName'
const desc='#description'
const sel_cat='.row-container > :nth-child(3)'
const sel_catoption='#react-select-2-option-0'
const sel_type='#type > .select__control > .select__value-container'
const reviewer='#react-select-3-option-0'
const preparer='#react-select-3-option-1'
const sel_fre='#frequency > .select__control > .select__value-container'
const sel_freqOption='#react-select-4-option-1'
const sel_legalentity='#legalEntity > .select__control > .select__value-container'
const sel_legopt='#react-select-6-option-3'
const sel_group='#group > .select__control > .select__value-container'
const sel_grpopt='#react-select-5-option-0'
const sel_datetype='#dateType > .select__control > .select__value-container'
const sel_dateopt='#react-select-7-option-0'
const duedate='#dueDate'
const priority='#priority'
const addtask_button='span:contains("Add")'
const reset_button='span:contains("Reset")'
const AGROW='.ag-row-first > .ag-cell > .ag-cell-wrapper > .ag-cell-value > .ag-row-group-indent-0 > .ag-group-value'
const AGCOPY=':nth-child(1) > #eName'
const AGCOPYHEADER=':nth-child(2) > #eName'
const AGEXPORT=':nth-child(5) > #eName'
const pointer='.ag-menu-option-active > #ePopupPointer'
const xlsxopt=':nth-child(7) > .ag-menu > .ag-menu-list > :nth-child(2) > #eName'
const FIRST_ROW_UNCHCEKED='div [row-index="0"] div[col-id="name"] span  span[class="ag-icon ag-icon-checkbox-unchecked"]'
const AGGROUP_HEADER='[col-id="changedDate"] > .ag-cell-label-container > .ag-header-cell-label > .ag-header-cell-text'
const addsub='#add-sub-task-icon'
const deactivate='#add-sub-task-icon'
const refresh='#refresh-task-icon'
const subtaskname='#subTaskName'
const subtaskdesc='#subTaskDescription'
const subduedate='#subTaskDueDate'
const subpriority='#subTaskPriority'
const subselectTaskdatetype='#subTaskDateType > .select__control > .select__value-container > .css-fwkfsi'
const suboptdatetype='#react-select-9-option-0'
const subselectCategory='div[class="css-185ezk2"] div:contains("Category")'
const suboptcategory='#react-select-8-option-0'
const multidialogadd='.MuiDialogActions-root-304:nth-child(2)'
const multidialogcancel='span:contains("cancel")'
const expand = 'span[ref="eContracted"]';

export const LOGIN_PAGE_TITLE='Login - Trinity';

class TrinityTaskPage {

  static pageload() {
    cy.wait(5000);
}

static elementwait() {
    cy.wait(3000)
}

 
static addtask(tname)
{
 cy.get(taskname).should('be.visible');
 cy.get(taskname).type(tname);
 
 cy.get(desc).should('be.visible');
 cy.get(desc).type('test')
 cy.get(priority).should('be.visible');
 cy.get(priority).type('1').type('{esc}');

 cy.get(sel_cat).should('be.visible');
 cy.get(sel_cat).click();
 cy.get(sel_catoption).should('be.visible');
 cy.get(sel_catoption).click();
 cy.get(sel_type).should('be.visible');
 cy.get(sel_type).click();
 cy.get(reviewer).should('be.visible');
 cy.get(reviewer).click();
 cy.get(sel_fre).should('be.visible');
 cy.get(sel_fre).click();
 cy.get(sel_freqOption).should('be.visible');
 cy.get(sel_freqOption).click();
 cy.get(sel_legalentity).should('be.visible');
 cy.get(sel_legalentity).click();
 cy.get(sel_legopt).should('be.visible');
 cy.get(sel_legopt).click();
 /*
 #legalEntity > .select__control > .select__indicators > .select__dropdown-indicator > .css-19bqh2r
 */
 cy.get('#legalEntity > .select__control > .select__value-container > .css-fwkfsi').should('be.visible');
 cy.get('#legalEntity > .select__control > .select__value-container > .css-fwkfsi').click();
 cy.get(duedate).should('be.visible');
 cy.get(duedate).scrollIntoView();
 cy.get(duedate).type('1').type('{esc}');
 cy.get(sel_group).should('be.visible');
 cy.get(sel_group).click();
 cy.get(sel_grpopt).should('be.visible');
 cy.get(sel_grpopt).click();
 cy.get(sel_datetype).should('be.visible');
 cy.get(sel_datetype).click();
 cy.get(sel_dateopt).should('be.visible');
 cy.get(sel_dateopt).click();
 cy.get(addtask_button).click();
}

static filter(taskname)
{
    cy.visit('https://ttrinity/taskdef');
    this.pageload();
    cy.get('[style="width: 157px; left: 0px;"] > .ag-floating-filter-body > .ag-input-text-wrapper > .ag-floating-filter-input').should('be.visible')
    cy.get('[style="width: 157px; left: 0px;"] > .ag-floating-filter-body > .ag-input-text-wrapper > .ag-floating-filter-input').type(taskname)
    this.pageload();
    cy.get('div[role="row"] div[tabindex="-1"] span[ref="eValue"]').should('be.visible')
    cy.get('div[role="row"] div[tabindex="-1"] span[ref="eValue"]').contains(taskname);
}

static addsubtask(subtkname,subtkdes)
{
    cy.get(FIRST_ROW_UNCHCEKED).should('be.visible')
    cy.get(FIRST_ROW_UNCHCEKED).click();
    cy.get(addsub).should('be.visible');
    cy.get(addsub).click();
    cy.get(subtaskname).should('be.visible')
    cy.get(subtaskname).type(subtkname);
    cy.get(subtaskdesc).should('be.visible')
    cy.get(subtaskdesc).type(subtkdes);
    cy.get(subduedate).type('1');
    cy.get(subpriority).type('1');
    cy.get(subselectTaskdatetype).should('be.visible');
    cy.get(subselectTaskdatetype).click();
    cy.get(suboptdatetype).click();
    cy.get(subselectCategory).should('be.visible');
    cy.get(subselectCategory).click();
    cy.get(suboptcategory).click();
    cy.get(multidialogadd).should('be.visible');
    cy.get(multidialogadd).click();
}


static validatesubtask(subtkname)
{
   cy.get(FIRST_ROW_UNCHCEKED).should('be.visible')
   cy.get(FIRST_ROW_UNCHCEKED).click(); 
   cy.get(expand).should('be.visible');
   cy.get(expand).click();
   cy.get('div [row-id="0"] div[class="ag-cell ag-cell-not-inline-editing ag-cell-with-height"]').should('be.visible')
   cy.get('div [row-id="0"] div[class="ag-cell ag-cell-not-inline-editing ag-cell-with-height"]').contains(subtkname);
   
}

static deletesubtask(subtkname)
{
   cy.get(FIRST_ROW_UNCHCEKED).should('be.visible')
   cy.get(FIRST_ROW_UNCHCEKED).click(); 
   cy.get(expand).should('be.visible');
   cy.get(expand).click();
   cy.get('div [row-id="0"] div[class="ag-cell ag-cell-not-inline-editing ag-cell-with-height"]').should('be.visible')
   cy.get('div [row-id="0"] div[class="ag-cell ag-cell-not-inline-editing ag-cell-with-height"]').contains(subtkname);
   

   
}

static refreshfun()
{
    cy.get(refresh).should('be.visible');
    cy.get(refresh).click();
}

static exportascsv()
{
    cy.get(AGGROUP_HEADER).click();
    cy.get(FIRST_ROW_UNCHCEKED).first().trigger('contextmenu');
    cy.get(AGEXPORT).should('be.visible');
    cy.get(AGEXPORT).click({ force: true });
    this.elementwait();
    cy.get(xlsxopt).click({ force: true });
    this.elementwait();
}
static resetTaskfileds()
{
 cy.get(reset_button).should('not.be.visible')
 cy.get(taskname).should('be.visible');
 cy.get(taskname).type('resettest');
 
 cy.get(desc).should('be.visible');
 cy.get(desc).type('test')
 cy.get(priority).should('be.visible');
 cy.get(priority).type('1').type('{esc}');

 cy.get(sel_cat).should('be.visible');
 cy.get(sel_cat).click();
 cy.get(sel_catoption).should('be.visible');
 cy.get(sel_catoption).click();
 cy.get(sel_type).should('be.visible');
 cy.get(sel_type).click();
 cy.get(reviewer).should('be.visible');
 cy.get(reviewer).click();
 cy.get(sel_fre).should('be.visible');
 cy.get(sel_fre).click();
 cy.get(sel_freqOption).should('be.visible');
 cy.get(sel_freqOption).click();
 cy.get(sel_legalentity).should('be.visible');
 cy.get(sel_legalentity).click();
 cy.get(sel_legopt).should('be.visible');
 cy.get(sel_legopt).click();
 /*
 #legalEntity > .select__control > .select__indicators > .select__dropdown-indicator > .css-19bqh2r
 */
 cy.get('#legalEntity > .select__control > .select__value-container > .css-fwkfsi').should('be.visible');
 cy.get('#legalEntity > .select__control > .select__value-container > .css-fwkfsi').click();
 cy.get(duedate).should('be.visible');
 cy.get(duedate).scrollIntoView();
 cy.get(duedate).type('1').type('{esc}');
 cy.get(sel_group).should('be.visible');
 cy.get(sel_group).click();
 cy.get(sel_grpopt).should('be.visible');
 cy.get(sel_grpopt).click();
 cy.get(sel_datetype).should('be.visible');
 cy.get(sel_datetype).click();
 cy.get(sel_dateopt).should('be.visible');
 cy.get(sel_dateopt).click();
 cy.get(reset_button).should('be.visible')
 cy.get(reset_button).click();
 this.pageload();
 cy.get(reset_button).should('not.be.visible')
}

}

export default TrinityTaskPage;
