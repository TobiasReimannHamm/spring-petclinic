Feature: Check if the Omner Button exists, is visible and a link.

  Background: The Navbar should contain the Ownmer Button. I want to check if it exists, it is visible
  and a link.

Scenario: Check the Owner Button.
    Given Full HD - testcases6
    Then nav-link with fa-search span exists, is visible and contains 'Find owners' - testcases6
    And The 'Find Owners' link should be visible and correct - testcases6

