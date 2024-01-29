Feature: Create a new list functionality
    @focus
    Scenario: Verify that the user can create a new list successfully
        Given The user navigate to board
        And Click on add another list
        When Enter list title
        And Click on add list button
        Then Create list successfully
