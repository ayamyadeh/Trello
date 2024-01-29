import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import shardDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sheradActions from "../../../pageObjects/shared/actions.cy";
import deleteCardActions from "../../../pageObjects/deleteExistingCard/actions.cy";
import deleteCardAssertions from "../../../pageObjects/deleteExistingCard/assertions.cy";

const sheradAction = new sheradActions();
const shardDataUtil = new shardDataUtils();
const deleteCardAction = new deleteCardActions();
const deleteCardAssertion = new deleteCardAssertions();

before(() => {
    cy.login();
    shardDataUtil.craeteBoard("QA").as("boardRes");
    cy.get("@boardRes").then((res) => {
        shardDataUtil.getListsOnABoard(res.body.id).as("listRes");
    });

    cy.get("@listRes").then((res) => {
        shardDataUtil.createCard(res.body[0].id, "TestCard", "false").as("cardRes");
    });
});

Given("The user navigate to board", () => {
    cy.get("@boardRes").then((data) => {
        sheradAction.openBoard(data.body.url);
    });
});
Given("Open the existing card", () => {
    // cy.get("@cardRes").then((data) => {
    //     // sheradAction.openCard(data.body.url)
    // });
    sheradAction.openCard();
});

When("Click on archive button", () => {
    deleteCardAction.clickOnArchiveButton();
});
When("Click on delete button", () => {
    deleteCardAction.clickOnDeleteButton();
});
When("Click on delete button from confirmation popup", () => {
    deleteCardAction.clickOnDeleteButtonConfirmationPopup();
});
Then("Delete existing card successfully", () => {
    deleteCardAssertion.checkAListIsEmpty()
    deleteCardAssertion.checkListNotContain("TestCard")
});


after(() => {
    cy.get("@boardRes").then((data) => {
        shardDataUtil.deleteBoard(data.body.id);
    });
});