Feature: Crear un post y que este sea visible para el usuario

@user1 @web
Scenario: Como autor creo un post 
    Given I navigate to page "<HOST>" "ghost/#/signin"
    And I login with credentials "<USERNAME>" "<PASSWORD>"
    And I send a signal to user 2 containing "logged"
    When I go to new post form
    And I send a signal to user 2 containing "creating"
    And I create a post with title "$name_1" and content "$string_1"
    And I send a signal to user 2 containing "posting"
    And I post the post
    Then I send a signal to user 2 containing "post created"

@user2 @web
Scenario: Como usuario verifico que el post esté creado
    Given I wait for a signal containing "logged" for 30 seconds
    And I wait for a signal containing "creating" for 30 seconds
    And I wait for a signal containing "posting" for 30 seconds
    And I wait for a signal containing "post created" for 30 seconds
    And I navigate to page "<HOST>"
    When I select the post with title "$$name_1"
    Then I check the post name "$$name_1"
    And I check the post content "$$string_1"
