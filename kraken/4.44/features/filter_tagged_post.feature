Feature: Crear un post taggeado, y buscarlo en el listado de administracion filtrando por tag

@user5 @web
Scenario:  Como autor creo un tag, y un post con ese tag asignado
    Given I navigate to page "<HOST>" "ghost/#/signin"
    And I login with credentials "<USERNAME>" "<PASSWORD>"
    And I send a signal to user 6 containing "logged"
    And I wait for 2 seconds
    When I go to tag list
    And I go to new tag form
    And I send a signal to user 6 containing "creating tag"
    And I wait for 2 seconds
    And I create a tag with name "$name_1"
    And I save the tag
    And I send a signal to user 6 containing "tag created"
    And I wait for 2 seconds
    And I go to new post form
    And I send a signal to user 6 containing "creating post"
    And I wait for 2 seconds
    And I create a post with title "$name_2" and content "$string_1"
    And I choose the tag "$$name_1"
    And I send a signal to user 6 containing "posting"
    And I wait for 2 seconds
    And I post the post
    Then I send a signal to user 6 containing "post created"

@user6 @web
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
    And I filter posts by tag "$$name_1"
    Then I check the post with name "$$name_2" is listed
