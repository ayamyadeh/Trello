Feature: Create a new card template functionality
@focus 
    Scenario: Verify that the user can create a new card template successfully
        Given The user navigate to board 
        Given Click on create card templates icon 
        Given Click on card templates button
        When Enter a title for template
        And  Click on add button
        Then Create a new card template successfully