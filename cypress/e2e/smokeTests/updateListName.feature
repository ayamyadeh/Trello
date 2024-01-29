Feature: Update list name functionality
    @focus
    Scenario: Verify that the user can Update list name successfully
        Given The user navigate to board
        When Click on name of the list and enter a new name
        Then Update list name successfully
