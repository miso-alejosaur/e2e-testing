Feature: Crear un post como borrador, revisar que un usuario no puede verlo, publicar el post, y revisarlo desde la vista de usuario

@user1 @web
Scenario: Como autor creo un post como draft, y después lo publico
    Given I navigate to page "<HOST>" "ghost/#/signin"
    And I login with credentials "<USERNAME>" "<PASSWORD>"
    And I send a signal to user 2 containing "logged"
    And I wait for 2 seconds
    When I go to new post form
    And I send a signal to user 2 containing "creating"
    And I wait for 2 seconds
    And I create a post with title "$name_1" and content "$string_1"
    And I send a signal to user 2 containing "scheduling"
    And I schedule the post
    And I wait for 1 seconds
    And I return to posts list
    And I send a signal to user 2 containing "scheduling created"
    And I wait for a signal containing "checked hidden post" for 30 seconds
    And I refresh the site
    And I select the listed post with name "$$name_1"
    And I send a signal to user 2 containing "publishing"
    Then I wait for 2 seconds
    And I publish the scheduled post
    And I send a signal to user 2 containing "post published"

@user2 @web
Scenario: Como usuario verifico que el post primero no exista, y después sí
    Given I wait for a signal containing "logged" for 30 seconds
    And I wait for a signal containing "creating" for 30 seconds
    And I wait for a signal containing "scheduling" for 30 seconds
    And I wait for a signal containing "scheduling created" for 30 seconds
    And I navigate to page "<HOST>"
    When I check the post with title "$$name_1" does not exist
    And I send a signal to user 1 containing "checked hidden post"
    And I wait for 2 seconds
    And I wait for a signal containing "publishing" for 30 seconds
    And I wait for a signal containing "post published" for 30 seconds
    And I wait for 2 seconds
    Then I refresh the site
    And I select the post with title "$$name_1"
    And I check the post name "$$name_1"
    And I check the post content "$$string_1"