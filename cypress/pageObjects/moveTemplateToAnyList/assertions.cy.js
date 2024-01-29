/// <reference types="cypress" />

class moveTemplateToAnyListAssertions {
    checkTemplatesMovedTOAnotherList(indexItem) {
        cy.findByTestId("list-cards").eq(indexItem).should("contain", "TestCard");
        return this;
    }
}

export default moveTemplateToAnyListAssertions;