import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import shardDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sheradActions from "../../../pageObjects/shared/actions.cy";
import updateTemplateNameActions from "../../../pageObjects/updateTemplateName/actions.cy";
import updateTemplateNameAssertions from "../../../pageObjects/updateTemplateName/assertions.cy";

const sheradAction = new sheradActions();
const shardDataUtil = new shardDataUtils();
const updateTemplateNameAction = new updateTemplateNameActions()
const updateTemplateNameAssertion = new updateTemplateNameAssertions()
const title = "New Tamplate Name"
before(() => {
    cy.login();
    shardDataUtil.craeteBoard("QA").as("boardRes");
    cy.get("@boardRes").then((res) => {
        shardDataUtil.getListsOnABoard(res.body.id).as("listRes");
    });

    cy.get("@listRes").then((res) => {
        shardDataUtil.createCard(res.body[0].id, "TestCard", "true").as("cardRes");
    });
});

Given("The user navigate to board", () => {
    cy.get("@boardRes").then((data) => {
        sheradAction.openBoard(data.body.url);
    });
});
Given("Open template card", () => {
    // cy.get("@cardRes").then((data) => {
    //     sheradAction.openCard(data.body.url);
    // });
    sheradAction.openCard();
});

When("Enter new template title and click enter on keyboard", () => {
    updateTemplateNameAction.typeNewTemplateName(title)
});
When("Close template card", () => {
    sheradAction.closeTemplateCard();
});

Then("Update template name successfully", () => {
    updateTemplateNameAssertion.checkATemplateContainNew(title)
});


after(() => {
    cy.get("@boardRes").then((data) => {
        shardDataUtil.deleteBoard(data.body.id);
    });
});