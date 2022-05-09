Feature: Crear un tag interno y asignarlo a un nuevo post, y verificar que un lector no lo puede ver al entrar al post

@user1 @web
Scenario:  Como autor creo un tag privado, y un post con ese tag asignado
    Given I navigate to page "<HOST>" "ghost/#/signin"
    And I login with credentials "<USERNAME>" "<PASSWORD>"
    And I send a signal to user 2 containing "logged"
    And I wait for 2 seconds
    When I go to tag list
    And I go to new tag form
    And I send a signal to user 2 containing "creating tag"
    And I wait for 2 seconds
    And I create a private tag with name "$name_1"
    And I save the tag
    And I send a signal to user 2 containing "tag created"
    And I wait for 2 seconds
    And I go to new post form
    And I send a signal to user 2 containing "creating post"
    And I wait for 2 seconds
    And I create a post with title "$name_2" and content "$string_1"
    And I choose the private tag "$$name_1"
    And I send a signal to user 2 containing "posting"
    And I wait for 2 seconds
    And I post the post
    Then I send a signal to user 2 containing "post created"
    Then I send a signal to user 3 containing "post created"

@user2 @web
Scenario: Como usuario lector intento filtrar con un tag privado y no puedo
    Given I wait for a signal containing "logged" for 30 seconds
    And I wait for a signal containing "creating tag" for 30 seconds
    And I wait for a signal containing "tag created" for 30 seconds
    And I wait for a signal containing "creating post" for 30 seconds
    And I wait for a signal containing "posting" for 30 seconds
    And I wait for a signal containing "post created" for 30 seconds
    When I navigate to page "<HOST>"
    And I select the post with title "$$name_2"
    Then I check the tag "$$name_1" does not exist