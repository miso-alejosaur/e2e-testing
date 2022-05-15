Feature: Crear un post y modificar el nombre de autor, que el usuario vea el nuevo nombre

@user1 @web
Scenario: Como autor creo un post, modifico mi nombre de usuario, y reviso que aparezca al filtrar con mi nuevo nombre
    Given I navigate to page "<HOST>" "ghost/#/signin"
    And I login with credentials "<USERNAME>" "<PASSWORD>"
    When I go to new post form
    And I create a post with title "$name_1" and content "$string_1"
    And I post the post
    And I wait for 3 seconds
    And I return to posts list
    And I refresh the site
    And I go to profile settings
    And I change the profile name for "$name_2"
    And I wait for 3 seconds
    And I go to published
    Then I filter posts by author "$$name_2"
    And I check the post with name "$$name_1" is listed