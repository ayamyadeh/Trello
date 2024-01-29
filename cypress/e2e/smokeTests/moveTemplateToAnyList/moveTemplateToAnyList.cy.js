import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import shardDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sheradActions from "../../../pageObjects/shared/actions.cy";
import moveTemplateToAnyListActions from '../../../pageObjects/moveTemplateToAnyList/actions.cy';
import moveTemplateToAnyListAssertions from "../../../pageObjects/moveTemplateToAnyList/assertions.cy";


const sheradAction = new sheradActions();
const shardDataUtil = new shardDataUtils();
const moveTemplateToAnyListAction = new moveTemplateToAnyListActions();
const moveTemplateToAnyListAssertion = new moveTemplateToAnyListAssertions()
const indexItem = Math.floor(Math.random() * 3)
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

When("Click on move label", () => {
    moveTemplateToAnyListAction.clickOnMoveLabel();
});
When("Select list destination", () => {
    moveTemplateToAnyListAction.selectList(indexItem);
});
When("Click on move button", () => {
    moveTemplateToAnyListAction.clickOnMoveButton();
});


When("Close template card", () => {
    sheradAction.closeTemplateCard();
});

Then("Move template to any list successfully", () => {
    moveTemplateToAnyListAssertion.checkTemplatesMovedTOAnotherList(indexItem);
});


after(() => {
    cy.get("@boardRes").then((data) => {
        shardDataUtil.deleteBoard(data.body.id);
    });
});