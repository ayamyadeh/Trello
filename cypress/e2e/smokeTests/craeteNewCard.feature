Feature: Create a new card functionality
@focus 
    Scenario: Verify that the user can create a new card successfully
        Given The user navigate to board 
        And Click on add a new card button
        When Enter a title for card
        And Click on add card button
        Then Create card successfully

