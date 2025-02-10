Feature: Check if the Veterinary Button exists, is visible and a link.

  Background: The Navbar should contain the Veterinary Button. I want to check if it exists, it is visible
  and a link.

Scenario: Check the Veterinary Button.
    Given Full HD - testcases7
    Then nav-link with fa-th-list span exists, is visible and contains 'Veterinarians' - testcases7
    And The 'Veterinarians' link should be visible and correct - testcases7

