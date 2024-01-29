/// <reference types="cypress" />


class deleteCardActions {
    clickOnArchiveButton() {
        cy.get(".js-archive-card").click();
        return this;
    }
    clickOnDeleteButton() {
        cy.get(".js-delete-card").click();
        return this;
    }
    clickOnDeleteButtonConfirmationPopup() {
        cy.get(".nch-button--danger").click();
        return this;
    }



}
export default deleteCardActions;