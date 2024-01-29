/// <reference types="cypress" />


class createNewCardActions {
    clickOnAddACardButton() {
        cy.findByTestId("list-add-card-button").first().click();
        return this;
    }
    typeTitleForCard(title) {
        cy.findByTestId("list-card-composer-textarea").clear().type(title);
        return this;
    }
    clickOnAddCardButton() {
        cy.findByTestId("list-card-composer-add-card-button").click();
        return this;
    }



}
export default createNewCardActions;