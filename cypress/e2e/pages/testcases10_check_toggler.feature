Feature: Navbar toggle behavior

  Scenario: Toggle navbar visibility twice
    Given Resolution SD 854 x 480 Navigation to the Spring-Petclinic - testcases10
    When I click on the toggle button once - testcases10
    Then the navbar should expand - testcases10

    When I click on the toggle button again - testcases10
    Then the navbar should collapse - testcases10

