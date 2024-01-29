/// <reference types="cypress" />


class deleteCardAssertions {
    checkAListIsEmpty() {
        cy.findByTestId("list-cards").first().should("be.empty");
        return this;
    }

    checkListNotContain(name) {
        cy.findByTestId("list-cards").first().should("not.contain", name);
        return this;
    }

}
export default deleteCardAssertions;