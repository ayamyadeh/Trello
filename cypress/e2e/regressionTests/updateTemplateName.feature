Feature: Update template name functionality
    @focus
    Scenario: Verify that the user can Update template name successfully
        Given The user navigate to board
        And Open template card  
        When Enter new template title and click enter on keyboard
        And Close template card 
         Then Update template name successfully
