Feature: Crear un post sin tag, revisar que el usuario lector no vea tags en este post, agregar un tag, y revisar que el usuario lector pueda verlo

@user1 @web
Scenario: Como autor creo un post, y despues le agrego un tag
    Given I navigate to page "<HOST>" "ghost/#/signin"
    And I login with credentials "<USERNAME>" "<PASSWORD>"
    And I send a signal to user 2 containing "logged"
    And I wait for 2 seconds
    When I go to tag list
    And I go to new tag form
    And I send a signal to user 2 containing "creating tag"
    And I wait for 2 seconds
    And I create a tag with name "$name_1"
    And I save the tag
    And I send a signal to user 2 containing "tag created"
    And I go to new post form
    And I send a signal to user 2 containing "creating"
    And I wait for 2 seconds
    And I create a post with title "$name_2" and content "$string_1"
    And I send a signal to user 2 containing "posting"
    And I wait for 2 seconds
    And I post the post
    And I send a signal to user 2 containing "post created"
    And I wait for a signal containing "checking" for 30 seconds
    And I wait for a signal containing "checked notag" for 30 seconds
    And I return to posts list
    And I select the listed post with name "$$name_2"
    And I send a signal to user 2 containing "editing"
    And I wait for 2 seconds
    And I choose the tag "$$name_1"
    And I send a signal to user 2 containing "tagging"
    And I wait for 2 seconds
    And I update the post
    Then I send a signal to user 2 containing "post tagged"

@user2 @web
Scenario: Como usuario verifico que el post esté creado sin tags, y despues aparezca el tag
    Given I wait for a signal containing "logged" for 30 seconds
    And I wait for a signal containing "creating tag" for 30 seconds
    And I wait for a signal containing "tag created" for 30 seconds
    And I wait for a signal containing "creating" for 30 seconds
    And I wait for a signal containing "posting" for 30 seconds
    And I wait for a signal containing "post created" for 30 seconds
    And I navigate to page "<HOST>"
    When I select the post with title "$$name_2"
    And I check the post name "$$name_2"
    And I send a signal to user 1 containing "checking"
    And I wait for 2 seconds
    And I check the post content "$$string_1"
    And I check the tag "$$name_1" does not exist
    And I send a signal to user 1 containing "checked notag"
    And I wait for 2 seconds
    And I wait for a signal containing "editing" for 30 seconds
    And I wait for a signal containing "tagging" for 30 seconds
    And I wait for a signal containing "post tagged" for 30 seconds
    Then I refresh the site
    And I check the tag "$$name_1" exists
