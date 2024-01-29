/// <reference types="cypress" />

class updateTemplateNameActions {

    typeNewTemplateName(title) {
        cy.get(".js-card-detail-title-input").clear().type(title + "{enter}");
        return this;
    }


}
export default updateTemplateNameActions;