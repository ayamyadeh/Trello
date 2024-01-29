/// <reference types="cypress" />
class updateListNameActions {

    typeNewTitleList(array) {
        for (let i = 0; i < 3; i++) {
            cy.findByTestId("list-name").eq(i).click();
            cy.findByTestId("list-name-textarea").eq(i).type(array[i] + "{enter}");

        }
    }
}
export default updateListNameActions;