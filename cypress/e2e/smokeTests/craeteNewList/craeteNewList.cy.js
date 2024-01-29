import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import shardDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sheradActions from '../../../pageObjects/shared/actions.cy';
import createNewListActions from "../../../pageObjects/createNewList/actions.cy";
import createNewListAssertions from "../../../pageObjects/createNewList/assertions.cy";

const sheradAction = new sheradActions();
const shardDataUtil = new shardDataUtils();
const createNewListAction = new createNewListActions()
const createNewListAssertion = new createNewListAssertions();
const title = "New List";
before(() => {
    cy.login();
    shardDataUtil.craeteBoard("QA").as('boardRes');


});
Given("The user navigate to board", () => {


    cy.get("@boardRes").then((data) => {
        sheradAction.openBoard(data.body.url);


    })
})
Given("Click on add another list", () => {
    createNewListAction.clickOnAddAnotherListButton();

})
When("Enter list title", () => {
    createNewListAction.typeTitleForList(title);


})
When("Click on add list button", () => {
    cy.screenshot({ capture: "fullPage" })
    createNewListAction.clickOnAddListButton();

})

Then("Create list successfully", () => {
    createNewListAssertion.checkAListContain(title);
})
after(() => {

    cy.get("@boardRes").then((data) => {
        shardDataUtil.deleteBoard(data.body.id);



    })

})