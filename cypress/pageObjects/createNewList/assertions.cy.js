class createNewListAssertions {

    checkAListContain(title) {
        cy.findByTestId("list-name").last().should("contain", title);
        return this;
    }
}
export default createNewListAssertions;