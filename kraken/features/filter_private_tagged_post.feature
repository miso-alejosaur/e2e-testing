Feature: Crear un tag interno y asignarlo a un nuevo post, filtrar por éste en el listado, y validar que un lector no lo puede utilizar, pero sí un autor

@user1 @web
Scenario:  Como autor creo un tag privado, y un post con ese tag asignado
    Given I navigate to page "<HOST>" "ghost/#/signin"
    And I login with credentials "<USERNAME>" "<PASSWORD>"
    And I send a signal to user 2 containing "logged"
    And I send a signal to user 3 containing "logged"
    And I wait for 2 seconds
    When I go to tag list
    And I go to new tag form
    And I send a signal to user 2 containing "creating tag"
    And I send a signal to user 3 containing "creating tag"
    And I wait for 2 seconds
    And I create a private tag with name "$name_1"
    And I save the tag
    And I send a signal to user 2 containing "tag created"
    And I send a signal to user 3 containing "tag created"
    And I wait for 2 seconds
    And I go to new post form
    And I send a signal to user 2 containing "creating post"
    And I send a signal to user 3 containing "creating post"
    And I wait for 2 seconds
    And I create a post with title "$name_2" and content "$string_1"
    And I choose the private tag "$$name_1"
    And I send a signal to user 2 containing "posting"
    And I send a signal to user 3 containing "posting"
    And I wait for 2 seconds
    And I post the post
    Then I send a signal to user 2 containing "post created"
    Then I send a signal to user 3 containing "post created"

@user2 @web
Scenario: Como autor 2 inicio sesión y busco los posts que contienen el tag
    Given I wait for a signal containing "logged" for 30 seconds
    And I wait for a signal containing "creating tag" for 30 seconds
    And I wait for a signal containing "tag created" for 30 seconds
    And I wait for a signal containing "creating post" for 30 seconds
    And I wait for a signal containing "posting" for 30 seconds
    And I wait for a signal containing "post created" for 30 seconds
    And I navigate to page "<HOST>" "ghost/#/signin"
    And I login with credentials "<USERNAME>" "<PASSWORD>"
    When I go to posts list
    And I filter posts by private tag "$$name_1"
    Then I check the post with name "$$name_2" is listed

@user3 @web
Scenario: Como usuario lector intento filtrar con un tag privado y no puedo
    Given I wait for a signal containing "logged" for 30 seconds
    And I wait for a signal containing "creating tag" for 30 seconds
    And I wait for a signal containing "tag created" for 30 seconds
    And I wait for a signal containing "creating post" for 30 seconds
    And I wait for a signal containing "posting" for 30 seconds
    And I wait for a signal containing "post created" for 30 seconds
    When I navigate to page "<HOST>" "tag/hash-" "$$name_1"
    Then I check page does not exist