Feature: Navigation and Page Validation for Error and Home Page

  Scenario: Navigate to home page from error page and verify content
    Given Full HD - testcases12
    When I click on the error link - testcases12
    Then I should see the error page with content - testcases12
    When I click on the home link - testcases12
    Then I should see the home page - testcases12