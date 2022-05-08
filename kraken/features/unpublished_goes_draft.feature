Feature: Crear un post y despublicarlo, revisar que este quede en la sección de drafts

@user1 @web
Scenario: Como autor creo un post, lo despublico, y reviso que esté en drafts
    Given I navigate to page "<HOST>" "ghost/#/signin"
    And I login with credentials "<USERNAME>" "<PASSWORD>"
    When I go to new post form
    And I create a post with title "$name_1" and content "$string_1"
    And I post the post
    And I wait for 1 seconds
    And I return to posts list
    And I select the listed post with name "$$name_1"
    And I unpublish the post
    And I wait for 1 seconds
    And I return to posts list
    And I navigate to page "<HOST>" "ghost/#/posts?type=draft"
    Then I check the post with name "$$name_1" is listed
