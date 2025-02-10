Feature: Navigation and Page Validation for Error and Home Page

  @testcases13
  Scenario: Navigate to error page and verify content, then go back to home page via logo and verify content
    Given Full HD - testcases13
    When I click on the error link - testcases13
    Then I should see the error page with content - testcases13
    When I click on the home link in the logo - testcases13
    Then I should see the home page - testcases13