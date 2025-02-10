Feature: Verify Veterinarians page

  Scenario: Click on Veterinarians link and verify the table content
    Given Full HD - testcases14
    When I click on the Veterinarians link - testcases14
    Then I should see the Veterinarians page - testcases14
    And I should see the Veterinarians header - testcases14
    And I should see the following Veterinarians data in the table - testcases14:

      | Name             | Specialties          |
      | James Carter     | none                 |
      | Helen Leary      | radiology            |
      | Linda Douglas    | dentistry, surgery   |
      | Rafael Ortega    | surgery              |
      | Henry Stevens    | radiology            |