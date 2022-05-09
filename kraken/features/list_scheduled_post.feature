Feature: Crear un post scheduled, verificar que está en la lista de scheduled, publicarlo, y revisar que ya no aparece en esta lista

@user1 @web
Scenario: Como autor creo un post como scheduled, y después lo publico, y reviso que aparezca en el listado de scheduled y después no
    Given I navigate to page "<HOST>" "ghost/#/signin"
    And I login with credentials "<USERNAME>" "<PASSWORD>"
    When I go to new post form
    And I create a post with title "$name_1" and content "$string_1"
    And I schedule the post
    And I wait for 3 seconds
    And I return to posts list
    And I go to scheduled
    And I check the post with name "$$name_1" is listed
    And I select the listed post with name "$$name_1"
    And I publish the scheduled post
    And I return to posts list
    And I go to scheduled
    Then I check the post with name "$$name_1" is not listed
