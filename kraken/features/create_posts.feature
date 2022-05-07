Feature:

#@user1 @web
#Scenario: Como autor creo un post y lo verifico desde la vista usuario
#    Given I navigate to page "<HOST>" "ghost/#/signin"
#    And I wait for 1 seconds
#    When I login with credentials "<USERNAME>" "<PASSWORD>"
#    And I go to new post form
#    And I create a post with title "$name_1" and content "$string_1"
#    And I post the post
#    And I navigate to page "<HOST>"
#    And I select the post with title "$$name_1"
#    Then I check the post name "$$name_1"
#    And I check the post content "$$string_1"
#    And I wait for 2 seconds


@user1 @web
Scenario: Como autor creo un tag, creo un post con tag y lo verifico filtrando desde la vista usuario
    Given I navigate to page "<HOST>" "ghost/#/signin"
    And I wait for 1 seconds
    When I login with credentials "<USERNAME>" "<PASSWORD>"
    And I go to tag list
    And I go to new tag form
    And I create a tag with name "$name_1"
    And I save the tag
    And I go to new post form
    And I create a post with title "$name_2" and content "$string_1"
    And I choose the tag "$$name_1"
    And I post the post
    And I navigate to page "<HOST>" "tag/" "$$name_1"
    And I select the post with title "$$name_2"
    Then I check the post name "$$name_2"
    And I check the post content "$$string_1"
    And I wait for 2 seconds