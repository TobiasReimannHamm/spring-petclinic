Feature: Check if the Navbigation Menu exists and is visible.

  Background: The features of the pet-clinic can be reached by clicking on the buttons of the navigation menu. 
  I want to know if the navigation menu exists, is visible and contains the correct number of buttons.

Scenario: Check all elements in Full HD resolution and check the navigation menu.
    Given Full HD - testcases3
    Then Navigation menu should be visible - testcases3 
    And Navigation menu should contain four links - testcases3
    And Navigation menu should contain expected links - testcases3
    
    
