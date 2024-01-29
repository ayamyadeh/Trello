/// <reference types="cypress" />
class moveTemplateToAnyListActions {

    clickOnMoveLabel() {
        cy.get(".js-move-card").click();

    }
    selectList(indexItem) {

        cy.findByTestId("move-card-popover-select-list-destination").select(indexItem)
        return this;
    }
    clickOnMoveButton() {
        cy.findByTestId("move-card-popover-move-button").click();
        return this;
    }

}
export default moveTemplateToAnyListActions;