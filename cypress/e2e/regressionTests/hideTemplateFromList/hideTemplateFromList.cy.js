import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import shardDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sheradActions from "../../../pageObjects/shared/actions.cy";
import hideTemplateFromListActions from "../../../pageObjects/hideTemplateFromList/actions.cy";
import hideTemplateFromListAssertions from "../../../pageObjects/hideTemplateFromList/assertions.cy";


const sheradAction = new sheradActions();
const shardDataUtil = new shardDataUtils();
const hideTemplateFromListAction = new hideTemplateFromListActions()
const hideTemplateFromListAssertion = new hideTemplateFromListAssertions()

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

When("Click on hide from list label", () => {
    hideTemplateFromListAction.clickOnHideFromLisTabel()
});

When("Close template card", () => {
    sheradAction.closeTemplateCard();
});

Then("Hide template from list successfully", () => {
    hideTemplateFromListAssertion.checkTemplatesIsNotExist()
    hideTemplateFromListAssertion.checkListNotContainTemplates()
});


after(() => {
    cy.get("@boardRes").then((data) => {
        shardDataUtil.deleteBoard(data.body.id);
    });
});