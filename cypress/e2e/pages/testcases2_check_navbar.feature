Feature: Check if the navbar exists and is visible.

  Background: The features of the pet-clinic can be reached by clicking on the buttons of the navbar. 
  I want to know if the navbar exists and is visible.
  
Scenario: Check all elements in Full HD resolution and check the navbar.
    Given Full HD - testcases2
    Then Navbar dark should be visible - testcases2
    And Container-fluid should be present and visible - testcases2
    And Navbar-brand is there and is visible - testcases2
    And Main Navbar should be visible - testcases2

