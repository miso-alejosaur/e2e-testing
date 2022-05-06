Feature:

@user1 @web
Scenario: Como autor creo un post y lo verifico desde la vista usuario
    Given I navigate to page "<HOST>" "ghost/#/signin"
    And I wait for 1 seconds
    When I login with credentials "<USERNAME>" "<PASSWORD>"
    And I wait for 10 seconds