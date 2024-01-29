Feature: Delete existing card functionality
    @focus
    Scenario: Verify that the user can Delete existing card successfully
        Given The user navigate to board
         And  Open the existing card
         When Click on archive button
         And Click on delete button
         And Click on delete button from confirmation popup
         Then Delete existing card successfully