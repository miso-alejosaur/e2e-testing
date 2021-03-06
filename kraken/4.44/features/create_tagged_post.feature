Feature: Crear un post con tag y que sea filtrable según su tag para un usuario

@user3 @web
Scenario: Como autor creo un tag, y un post con ese tag asignado
    Given I navigate to page "<HOST>" "ghost/#/signin"
    And I login with credentials "<USERNAME>" "<PASSWORD>"
    And I send a signal to user 4 containing "logged"
    And I wait for 2 seconds
    When I go to tag list
    And I go to new tag form
    And I send a signal to user 4 containing "creating tag"
    And I wait for 2 seconds
    And I create a tag with name "$name_2"
    And I save the tag
    And I send a signal to user 4 containing "tag created"
    And I wait for 2 seconds
    And I go to new post form
    And I send a signal to user 4 containing "creating post"
    And I wait for 2 seconds
    And I create a post with title "$name_3" and content "$string_2"
    And I choose the tag "$$name_2"
    And I send a signal to user 4 containing "posting"
    And I wait for 2 seconds
    And I post the post
    Then I send a signal to user 4 containing "post created"

@user4 @web
Scenario: Como usuario verifico que el post aparezca al filtrar por tag
    Given I wait for a signal containing "logged" for 30 seconds
    And I wait for a signal containing "creating tag" for 30 seconds
    And I wait for a signal containing "tag created" for 30 seconds
    And I wait for a signal containing "creating post" for 30 seconds
    And I wait for a signal containing "posting" for 30 seconds
    And I wait for a signal containing "post created" for 30 seconds
    When I navigate to page "<HOST>" "tag/" "$$name_2"
    And I select the post with title "$$name_3"
    Then I check the post name "$$name_3"
    And I check the post content "$$string_2"
    And I wait for 2 seconds