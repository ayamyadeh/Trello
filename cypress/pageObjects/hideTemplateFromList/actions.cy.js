/// <reference types="cypress" />
class hideTemplateFromListActions {

    clickOnHideFromLisTabel() {
        cy.get(".js-archive-card").click();
        return this;
    }

    closeTemplateCard() {
        cy.get(".js-close-window").click(scrollY);
        return this;
    }


}
export default hideTemplateFromListActions;