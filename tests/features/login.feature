Feature: Login fuctionality for Demo app
Test all combinations of login for login feature

  Scenario Outline: Error message for invalid credentails
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see error <message> for <profile>

    Examples:
      | username          | password | message                                                     | profile         |
      | alice@example.com | 10203040 | Sorry, this user has been locked out.                       | LOCKED          |
      |           1@2.com | f-o-o    | Provided credentials do not match any user in this service. | NO_MATCH        |
      |                   |          | Username is required                                        | NO_USER_DETAILS |
      | bob@example.com   |          | Password is required                                        | NO_PASSWORD     |

  Scenario: Login success for valid login credentails
    Given I am on the login page
    When I login with bob@example.com and 10203040
    Then I see Cart page after again navigating to Login page
