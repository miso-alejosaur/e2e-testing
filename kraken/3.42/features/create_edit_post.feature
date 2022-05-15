Feature: Crear un post y que este sea visible para el usuario, editarlo y que el usuario vea las modificaciones

@user1 @web
Scenario: Como autor creo un post y lo edito
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
    And I send a signal to user 2 containing "editing"
    And I wait for 2 seconds
    And I change the post content for "$string_2"
    And I send a signal to user 2 containing "edited"
    And I wait for 2 seconds
    And I update the post
    Then I send a signal to user 2 containing "post edited"

@user2 @web
Scenario: Como usuario verifico que el post esté creado y la edición sea correcta
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
    And I wait for a signal containing "editing" for 30 seconds
    And I wait for a signal containing "edited" for 30 seconds
    And I wait for a signal containing "post edited" for 30 seconds
    Then I refresh the site
    And I check the post content "$$string_2"