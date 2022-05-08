Feature: Crear un post y modificar el nombre de autor, que el usuario vea el nuevo nombre

@user1 @web
Scenario: Como autor creo un post 
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
    And I wait for 2 seconds
    And I return to posts list
    And I refresh the site
    And I go to profile settings
    And I send a signal to user 2 containing "editing profile"
    And I wait for 2 seconds
    And I change the profile name for "$name_2"
    Then I send a signal to user 2 containing "edited profile"

@user2 @web
Scenario: Como usuario verifico que el post esté creado y el autor tenga el nuevo nombre
    Given I wait for a signal containing "logged" for 30 seconds
    And I wait for a signal containing "creating" for 30 seconds
    And I wait for a signal containing "posting" for 30 seconds
    And I wait for a signal containing "post created" for 30 seconds
    And I wait for a signal containing "editing profile" for 30 seconds
    And I wait for a signal containing "edited profile" for 30 seconds
    When I navigate to page "<HOST>"
    And I select the post with title "$$name_1"
    Then I check the post name "$$name_1"
    And I check the post content "$$string_1"
    And I check the post author is "$$name_2"
