/// <reference types="cypress" />

class createNewListActions {
    clickOnAddAnotherListButton() {
        cy.findByTestId("list-composer-button").click();
        return this;
    }
    typeTitleForList(title) {
        cy.get(".oe8RymzptORQ7h").clear().type(title);
        return this;
    }
    clickOnAddListButton() {
        cy.findByTestId("list-composer-add-list-button").click();
        return this;
    }



}
export default createNewListActions;