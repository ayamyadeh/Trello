/// <reference types="cypress" />

class updateTemplateNameAssertions {
    checkATemplateContainNew(newTitle) {
        cy.findByTestId("card-name").should("have.text", newTitle);
        return this;
    }
}
export default updateTemplateNameAssertions;