

const SELECT_ENTITY = '#leAS > .select__control > .select__value-container';
const OPTION_2 = '#react-select-leAS-instance-option-2';
const START_DATE = '#startDate';
const END_DATE = '#endDate';
const SEARCH_BUTTON = '#queryTransButton > .MuiButton-label-122';
export const OPTION_4='#react-select-leAS-instance-option-4'

class TrinityGldatePage {

    
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
    
    static searchWithBatchType(option)
    {
        cy.get(SELECT_ENTITY).click();
        cy.get(OPTION_4).click();
        cy.get(START_DATE).type(startdate);
        cy.get(END_DATE).type(enddate);	
        cy.get(SEARCH_BUTTON).click();
    }

    }
    export default TrinityGldatePage;
