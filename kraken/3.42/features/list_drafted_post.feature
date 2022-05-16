Feature: Crear un post como público, y después lo despublicarlo, y revisar que aparezca en el listado de drafts

@user1 @web
Scenario: Como autor creo un post como público, y después lo despublico, y reviso que aparezca en el listado de drafts
    Given I navigate to page "<HOST>" "ghost/#/signin"
    And I login with credentials "<USERNAME>" "<PASSWORD>"
    When I go to new post form
    And I create a post with title "$name_1" and content "$string_1"
    And I post the post
    And I wait for 3 seconds
    And I return to posts list
    And I go to drafts
    And I check the post with name "$$name_1" is not listed
    And I go to posts list
    And I select the listed post with name "$$name_1"
    And I unpublish the post
    And I return to posts list
    And I go to drafts
    Then I check the post with name "$$name_1" is listed
