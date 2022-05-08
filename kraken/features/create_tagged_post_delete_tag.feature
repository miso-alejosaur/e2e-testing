Feature: Crear un post y que este sea visible para el usuario, editarlo y que el usuario vea las modificaciones

@user1 @web
Scenario: Como autor creo un post con tag, luego elimino el tag
    Given I navigate to page "<HOST>" "ghost/#/signin"
    And I login with credentials "<USERNAME>" "<PASSWORD>"
    And I send a signal to user 2 containing "logged"
    And I wait for 2 seconds
    When I go to tag list
    And I go to new tag form
    And I send a signal to user 2 containing "creating tag"
    And I wait for 2 seconds
    And I create a tag with name "$name_2"
    And I save the tag
    And I send a signal to user 2 containing "tag created"
    And I wait for 2 seconds
    And I go to new post form
    And I send a signal to user 2 containing "creating post"
    And I wait for 2 seconds
    And I create a post with title "$name_3" and content "$string_2"
    And I choose the tag "$$name_2"
    And I send a signal to user 2 containing "posting"
    And I wait for 2 seconds
    And I post the post
    And I return to posts list
    And I send a signal to user 2 containing "post created"
    And I wait for a signal containing "checked" for 30 seconds
    And I wait for 1 seconds
    And I navigate to page "<HOST>" "ghost/#/tags"
    And I select the listed tag with name "$$name_2"
    And I send a signal to user 2 containing "deleting tag"
    And I wait for 2 seconds
    And I delete the tag
    Then I send a signal to user 2 containing "deleted tag"

@user2 @web
Scenario: Como usuario verifico que el post aparezca al filtrar por tag, y luego que el tag no exista
    Given I wait for a signal containing "logged" for 30 seconds
    And I wait for a signal containing "creating tag" for 30 seconds
    And I wait for a signal containing "tag created" for 30 seconds
    And I wait for a signal containing "creating post" for 30 seconds
    And I wait for a signal containing "posting" for 30 seconds
    And I wait for a signal containing "post created" for 30 seconds
    And I navigate to page "<HOST>" "tag/" "$$name_2"
    And I check the post with title "$$name_3" exists
    And I send a signal to user 1 containing "checked"
    And I wait for 2 seconds
    And I wait for a signal containing "deleting tag" for 30 seconds
    And I wait for a signal containing "deleted tag" for 30 seconds
    And I wait for 5 seconds
    When I refresh the site
    Then I check page does not exist