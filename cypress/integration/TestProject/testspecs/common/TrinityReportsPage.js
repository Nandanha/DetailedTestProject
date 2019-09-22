const SELECT_ENTITY = '#leAS > .select__control > .select__value-container';
const OPTION_2 = '#react-select-leAS-instance-option-4';
const START_DATE = '#startDate';
const END_DATE = '#endDate';
const SEARCH_BUTTON = '#submitReports-btn > .MuiButton-label-122';
export const SELECT_DATE_OPTIONS='#dateOptions-btn > .MuiIconButton-label-58 > .MuiSvgIcon-root-62';
export const DAILYOPTION='#dailyOption-btn'
export const MTDOPTION='#mtdOption-btn'
export const YTDOPTION='#ytdOption-btn'
export const ITDOPTION='#itdOption-btn'
export const ONEYROPTION='#oneYearOption-btn'
export const Q1OPTION='#q1Option-btn'
export const Q2OPTION='#q2Option-btn'
export const Q3OPTION='#q3Option-btn'
export const Q4OPTION='#q4Option-btn'
export const REPORT_SETTINGS='#reportSettings-icon'
export const REPORT_SETTINGS_VIEWDRAFT='#reporstSettings-viewDraft-listitem'
export const REPORT_SETTINGS_EFFECTIVEDATE='#reporstSettings-effectiveDate-listitem'
const REPORT_SETTINGS_SWITCH='#reporstSettings-effectiveDate-switch'
const REPORT_VIEWDRAFT_SWITCH='#reporstSettings-viewDraft-switch'
const CONFIRMATION_YES='#effectiveDate-confirmation-yes-btn'
const CONFIRMATION_NO='#effectiveDate-confirmation-no-btn'
export const SELECT_REPORT='#reportAS > .select__control > .select__value-container'
export const Accuralreport='#react-select-reportAS-instance-option-14'
export const NonAccuralreport='#react-select-reportAS-instance-option-4'
export const GLAcctype='#glAccountAS > .select__control > .select__value-container'
export const UNLOCK_BUTTON='#unlockTB-btn'
export const NAV_SIGNOFF='#navSignOff-btn > .MuiButton-label-122'
const lock_date='#lockTb-lockDate-tf'
const lock_button='#lockTb-lock-btn > .MuiButton-label-122'
const WARNING_DIALOG='#tbWarning-dialog > .MuiDialog-container-150 > .MuiPaper-root-22 > :nth-child(2) > :nth-child(1)'
const WARNING_BUTTON='#tbWarning-no-btn > .MuiButton-label-122'


class TrinityReportsPage {

    static pageload(){
        cy.wait(5000);
    }

    static elementwait(){
        cy.wait(3000)
    }

    static searchForAnEntity(startdate,enddate)
    {
    cy.get(SELECT_ENTITY).click();
	cy.get(OPTION_2).click();
	cy.get(START_DATE).type(startdate);
	cy.get(END_DATE).type(enddate);
	cy.get(SEARCH_BUTTON).click();	
    }
    
    static setEffectivedate()
    {
        cy.get('svg[style="color: rgb(66, 165, 245);"]').should('be.visible');
        cy.get(REPORT_SETTINGS).click();
        cy.get(REPORT_SETTINGS_EFFECTIVEDATE).should('be.visible');
        cy.get(REPORT_SETTINGS_VIEWDRAFT).should('be.visible');
    
        //effective date assertion
        cy.get(REPORT_SETTINGS_SWITCH).click();
        cy.get(CONFIRMATION_YES).click();    
        cy.get(SEARCH_BUTTON).click();	
        cy.wait(5000);
        cy.get("iframe[id='reports-iframe'][style='height: 100%; border: 2px inset rgb(245, 124, 0);']").should('not.be.visible');
        cy.get("iframe[id='reports-iframe'][style='height: 100%; border: 2px inset rgb(66, 165, 245);']").should('be.visible');
        cy.get('svg[style="color: rgb(245, 124, 0);"]').should('be.visible');
    }

    static setViewDraft()
    {
        cy.get('svg[style="color: rgb(66, 165, 245);"]').should('be.visible');
        cy.get(REPORT_SETTINGS).click();
        cy.get(REPORT_SETTINGS_EFFECTIVEDATE).should('be.visible');
        cy.get(REPORT_SETTINGS_VIEWDRAFT).should('be.visible');
    
        //viewdraft date assertion
        cy.get(REPORT_VIEWDRAFT_SWITCH).click();
        cy.get(REPORT_SETTINGS_SWITCH).click();
        cy.get(CONFIRMATION_NO).click(); 
        cy.get(SEARCH_BUTTON).click();	
        cy.wait(5000);
        cy.get("iframe[id='reports-iframe'][style='height: 100%; border: 2px inset rgb(245, 124, 0);']").should('be.visible');
        cy.get("iframe[id='reports-iframe'][style='height: 100%; border: 2px inset rgb(66, 165, 245);']").should('not.be.visible');
        cy.get('svg[style="color: rgb(245, 124, 0);"]').should('be.visible');
    }
    
    static validate_date_options(dateopt)
    {
        cy.get(dateopt).should('be.visible');
    }

    static navgationsignofftask()
    {
        if (cy.get(UNLOCK_BUTTON).should('not.be.visible')) {
            cy.get(NAV_SIGNOFF).click();
            cy.get(lock_date).type('2019-04-20');
            cy.get(lock_button).click();
            cy.get(WARNING_DIALOG).contains('WARNING: You are about to lock');
            cy.get(WARNING_BUTTON).click();
    }
    }
}
    export default TrinityReportsPage;
   