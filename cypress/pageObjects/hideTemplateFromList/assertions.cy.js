/// <reference types="cypress" />

class hideTemplateFromListAssertions {
    checkTemplatesIsNotExist() {
        cy.findByTestId("list-cards").first().should("be.empty");
        return this;
    }
    checkListNotContainTemplates() {
        cy.findByTestId("list-cards").first().should("not.contain", "TestCard");
        return this;
    }

}

export default hideTemplateFromListAssertions;