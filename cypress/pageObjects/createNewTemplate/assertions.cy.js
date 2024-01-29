class createNewTemplateAssertions {

    checkACardContain(templatText) {
        cy.findByTestId("list-card").should("contain", templatText);
        return this;
    }
}
export default createNewTemplateAssertions;