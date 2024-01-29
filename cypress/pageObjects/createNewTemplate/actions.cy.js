/// <reference types="cypress" />


class createNewTemplateActions {
    clickOnCreateCardTemplatesIcon() {
        cy.findByTestId("TemplateCardIcon").first().click();
        return this;
    }
    clickOnCardTemplatesButton() {
        cy.findByTestId("create-new-template-card-button").click();
        return this;
    }
    typeTitleForTemplate(title) {
        cy.findByTestId("create-template-card-composer").clear().type(title);
        return this;
    }
    clickOnAddButton() {
        cy.findByTestId("new-template-card-submit-button").click();
        return this;
    }



}
export default createNewTemplateActions;