Feature: Move Template To Any List functionality
    @focus
    Scenario: Verify that the user can move template to any list successfully
        Given The user navigate to board
        And Open template card 
        When Click on move label
        And Select list destination
        And Click on move button
        And Close template card 
        Then Move template to any list successfully
