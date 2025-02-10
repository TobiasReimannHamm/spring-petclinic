Feature: Verify Veterinarians page 2

  Scenario: Click on Veterinarians link, go to page 2 and verify the table content
    Given Full HD - testcases15
    When I click on the Veterinarians link - testcases15
    Then I should see the Veterinarians page - testcases15
    And I should see the Veterinarians header - testcases15
    When I click on the Link to page 2 - testcases15
    Then I should see the Veterinarians page 2 - testcases15
    And I should see the Veterinarians header 2 - testcases15
    And I should see the following Veterinarians data in the table - testcases15:

      | Name             | Specialties          |
      | Sharon Jenkins   | none                 |
    
    When I click on the Link to page 1 - testcases15
    Then I should see the Veterinarians page 1 - testcases15
    And I should see the Veterinarians header - testcases15
