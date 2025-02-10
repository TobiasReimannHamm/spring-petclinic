Feature: Open the Spring-Petclinic with different resolutions

  Background: I want to open the application with the standard resolutions 4k/Full HD/HD/SD.
  Navbar Toggler is visible or invisible depending on the resolution.

Scenario: Open the Spring-Petclinic with different resolutions
    Given Resolution 4k 3840 x 2160 Navigation to the Spring-Petclinic - testcases1
    Then Navbar Toggler is invisible 1 - testcases1
    Given Resolution Full HD 1920 x 1080 Navigation to the Spring-Petclinic - testcases1
    Then Navbar Toggler is invisible 2 - testcases1
    Given Resolution HD 1280 x 720 Navigation to the Spring-Petclinic - testcases1
    Then Navbar Toggler is invisible 3 - testcases1
    Given Resolution SD 854 x 480 Navigation to the Spring-Petclinic - testcases1
    Then Navbar Toggler is visible - testcases1

    
