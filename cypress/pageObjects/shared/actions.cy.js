/// <reference types="cypress" />

class sheradActions {
    openBoard(url) {
        cy.visit(url)
        return this;
    }
    openCard(url1) {
        //  cy.visit(url)
        cy.findByTestId("trello-card").first().click();
        return this;
    }
    closeTemplateCard() {
        cy.get(".js-close-window").click(scrollY);
        return this;
    }
}
export default sheradActions;