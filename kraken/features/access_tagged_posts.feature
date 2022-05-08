Feature: Crear dos post taggeados, que el usuario acceda a uno, y luego encuentre relacionado el otro mediante el tag del primero

@user1 @web
Scenario: Como autor creo un tag, y un post con ese tag asignado
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
    And I send a signal to user 2 containing "post created"
    And I return to posts list
    And I go to new post form
    And I send a signal to user 2 containing "creating post2"
    And I wait for 2 seconds
    And I create a post with title "$name_4" and content "$string_3"
    And I choose the tag "$$name_2"
    And I send a signal to user 2 containing "posting2"
    And I wait for 2 seconds
    And I post the post
    Then I send a signal to user 2 containing "post2 created"

@user2 @web
Scenario: Como usuario verifico que el post aparezca al filtrar por tag
    Given I wait for a signal containing "logged" for 30 seconds
    And I wait for a signal containing "creating tag" for 30 seconds
    And I wait for a signal containing "tag created" for 30 seconds
    And I wait for a signal containing "creating post" for 30 seconds
    And I wait for a signal containing "posting" for 30 seconds
    And I wait for a signal containing "post created" for 30 seconds
    And I wait for a signal containing "creating post2" for 30 seconds
    And I wait for a signal containing "posting2" for 30 seconds
    And I wait for a signal containing "post2 created" for 30 seconds
    And I navigate to page "<HOST>"
    When I select the post with title "$$name_3"
    And I check the post name "$$name_3"
    And I check the post content "$$string_2"
    And I click on post tag
    Then I check the post with title "$$name_3" exists
    And I check the post with title "$$name_4" exists