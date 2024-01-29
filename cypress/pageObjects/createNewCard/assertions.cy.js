class createNewCardAssertions {
    checkACardIsExist() {
        cy.findByTestId("list-cards").first().should("exist");
        return this;
    }
    checkACardContain(title) {
        cy.findByTestId("card-name").first().should("contain", title);
        return this;
    }
}
export default createNewCardAssertions;