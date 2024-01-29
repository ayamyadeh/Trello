import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import shardDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sheradActions from '../../../pageObjects/shared/actions.cy';
import createNewTemplateActions from "../../../pageObjects/createNewTemplate/actions.cy";
import createNewTemplateAssertions from "../../../pageObjects/createNewTemplate/assertions.cy";

const sheradAction = new sheradActions();
const shardDataUtil = new shardDataUtils();
const createNewTemplateAction = new createNewTemplateActions()
const createNewTemplateAssertion = new createNewTemplateAssertions()
const title = "Template Testing";
const templatText = "This card is a template."
before(() => {
    cy.login();
    shardDataUtil.craeteBoard("QA").as('boardRes');


});
Given("The user navigate to board", () => {


    cy.get("@boardRes").then((data) => {
        sheradAction.openBoard(data.body.url)


    });
});
Given("Click on create card templates icon", () => {
    createNewTemplateAction.clickOnCreateCardTemplatesIcon();

});

Given("Click on card templates button", () => {
    createNewTemplateAction.clickOnCardTemplatesButton();

})
When("Enter a title for template", () => {
    createNewTemplateAction.typeTitleForTemplate(title)

})
When("Click on add button", () => {
    createNewTemplateAction.clickOnAddButton();
})

Then("Create a new card template successfully", () => {
    createNewTemplateAssertion.checkACardContain(templatText)

})
after(() => {
    cy.get("@boardRes").then((data) => {
        shardDataUtil.deleteBoard(data.body.id);


    })

})