 Feature: Admin Django - Login
    @admin
    Scenario: Login into the Django Admin
        Given I Log to the django admin page
        Then the user should be in the site administration page