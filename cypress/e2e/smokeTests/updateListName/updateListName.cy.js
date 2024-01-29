import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import shardDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sheradActions from '../../../pageObjects/shared/actions.cy';
import updateListNameActions from "../../../pageObjects/updateListName/actions.cy";
import updateListNameAssertions from "../../../pageObjects/updateListName/assertions.cy";

const sheradAction = new sheradActions();
const shardDataUtil = new shardDataUtils();
const updateListNameAction = new updateListNameActions();
const updateListNameAssertion = new updateListNameAssertions();
const array = ["List Test 1", "List Test 2", "List Test 3"]

before(() => {

    cy.login();
    shardDataUtil.craeteBoard("QA").as('boardRes');


});
Given("The user navigate to board", () => {

    cy.get("@boardRes").then((data) => {
        sheradAction.openBoard(data.body.url);

    })
});

When("Click on name of the list and enter a new name", () => {

    updateListNameAction.typeNewTitleList(array)

})
Then("Update list name successfully", () => {

    updateListNameAssertion.checkAListContainNewName(array)
})


after(() => {
    cy.get("@boardRes").then((data) => {
        shardDataUtil.deleteBoard(data.body.id);


    })

})