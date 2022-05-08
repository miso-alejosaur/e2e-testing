Feature: Crear un post y que este sea visible para el usuario, editarlo y que el usuario vea las modificaciones

@user1 @web
Scenario: Como autor creo un post y lo elimino
    Given I navigate to page "<HOST>" "ghost/#/signin"
    And I login with credentials "<USERNAME>" "<PASSWORD>"
    And I send a signal to user 2 containing "logged"
    And I wait for 2 seconds
    When I go to new post form
    And I send a signal to user 2 containing "creating"
    And I wait for 2 seconds
    And I create a post with title "$name_1" and content "$string_1"
    And I send a signal to user 2 containing "posting"
    And I wait for 2 seconds
    And I post the post
    And I send a signal to user 2 containing "post created"
    And I wait for a signal containing "checking post" for 30 seconds
    And I wait for a signal containing "checked post" for 30 seconds
    And I return to posts list
    And I select the listed post with name "$$name_1"
    And I send a signal to user 2 containing "deleting"
    And I wait for 2 seconds
    And I delete the post
    Then I send a signal to user 2 containing "post deleted"

@user2 @web
Scenario: Como usuario verifico que el post esté creado y luego eliminado
    Given I wait for a signal containing "logged" for 30 seconds
    And I wait for a signal containing "creating" for 30 seconds
    And I wait for a signal containing "posting" for 30 seconds
    And I wait for a signal containing "post created" for 30 seconds
    And I navigate to page "<HOST>"
    When I select the post with title "$$name_1"
    And I send a signal to user 1 containing "checking post"
    And I wait for 2 seconds
    And I check the post name "$$name_1"
    And I check the post content "$$string_1"
    And I send a signal to user 1 containing "checked post"
    And I wait for a signal containing "deleting" for 30 seconds
    And I wait for a signal containing "post deleted" for 30 seconds
    Then I refresh the site
    And I check page does not exist