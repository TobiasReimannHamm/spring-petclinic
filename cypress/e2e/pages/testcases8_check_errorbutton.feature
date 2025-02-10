Feature: Check if the Error Button exists, is visible and a link.

  Background: The Navbar should contain the Error Button. I want to check if it exists, it is visible
  and a link.

Scenario: Check the Error Button.
    Given Full HD - testcases8
    Then nav-link with fa-exclamation-triangle span exists, is visible and contains 'Error' - testcases8
    And The 'Error' link should be visible and correct - testcases8

