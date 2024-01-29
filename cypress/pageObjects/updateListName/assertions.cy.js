/// <reference types="cypress" />

class updateListNameAssertions {
    checkAListContainNewName(array) {
        for (let i = 0; i < 3; i++) {
            cy.findByTestId("list-name-textarea").eq(i).should("have.text", array[i]);
        }
    }
}
export default updateListNameAssertions;