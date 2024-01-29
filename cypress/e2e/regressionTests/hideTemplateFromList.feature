Feature: Hide template from list functionality
    @focus
    Scenario: Verify that the user can Hide template from list successfully
        Given The user navigate to board
        And Open template card 
        When Click on hide from list label
        And Close template card 
        Then Hide template from list successfully