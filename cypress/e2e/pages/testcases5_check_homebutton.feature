Feature: Check if the Home Button exists, is visible and a link.

  Background: The Navbar should contain the Home Button. I want to check if it exists, it is visible
  and a link.

Scenario: Check the Home Button.
    Given Full HD - testcases5
    Then nav-link with fa-home span exists, is visible and contains 'Home' - testcases5
    And The 'Home' link should be visible and correct - testcases5

