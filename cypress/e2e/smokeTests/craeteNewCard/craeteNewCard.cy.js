import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import shardDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sheradActions from '../../../pageObjects/shared/actions.cy';
import createNewCardActions from "../../../pageObjects/createNewCard/actions.cy";
import createNewCardAssertions from "../../../pageObjects/createNewCard/assertions.cy";

const sheradAction = new sheradActions();
const shardDataUtil = new shardDataUtils();
const createNewCardAction = new createNewCardActions();
const createNewCardAssertion = new createNewCardAssertions();
const title = "Card Testing";
// let boardId, boardaUrl;
before(() => {


    cy.login();
    // sharddataUtil.craeteBoard("QA").then((res) => {
    //     boardId = res.body.id
    //     boardaUrl = res.body.url
    // })
    //alias
    shardDataUtil.craeteBoard("QA").as('boardRes');


});
Given("The user navigate to board", () => {

    // sheradAction.openBoard(boardaUrl)
    // cy.wait("@boardRes");
    cy.get("@boardRes").then((data) => {
        sheradAction.openBoard(data.body.url)


    })

})

Given("Click on add a new card button", () => {
    createNewCardAction.clickOnAddACardButton();

})
When("Enter a title for card", () => {
    createNewCardAction.typeTitleForCard(title);

})
When("Click on add card button", () => {
    createNewCardAction.clickOnAddCardButton();
})

Then("Create card successfully", () => {
    createNewCardAssertion.checkACardIsExist();
    createNewCardAssertion.checkACardContain(title);
})
after(() => {
    //sharddataUtil.deleteBoard(boardId)
    cy.get("@boardRes").then((data) => {
        shardDataUtil.deleteBoard(data.body.id);


    })

})