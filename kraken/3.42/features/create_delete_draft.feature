Feature: Crear un post como borrador, verlo en la lista de borradores, eliminarlo, ver que no esté listado

@user1 @web
Scenario: Como autor creo un post como draft, y después lo elimino
    Given I navigate to page "<HOST>" "ghost/#/signin"
    And I login with credentials "<USERNAME>" "<PASSWORD>"
    When I go to new post form
    And I create a post with title "$name_1" and content "$string_1"
    And I return to posts list
    And I go to drafts
    And I check the post with name "$$name_1" is listed
    And I select the listed post with name "$$name_1"
    And I delete the post
    Then I check the post with name "$$name_1" is not listed
