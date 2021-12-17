# Created by Opyma and Bhadmus
Feature: Quidax App

    Testing the user journey in Quidax legacy app

    Scenario: A user should be able to login with valid details
        Given I am on the quidax site
        When I click the sign in icon
        And I insert the username
        And I insert the password
        And I click the sign in button
        Then I should see the authentication page