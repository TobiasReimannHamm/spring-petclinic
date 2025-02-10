Feature: Add Owner

  Scenario: Add Test Owner
    Given Full HD - testcases19
    Then I verify the presence of required labels - testcases19
    When I enter new owner details with an invalid phone number - testcases19
    Then I should see a validation error for telephone - testcases19
    When I correct the phone number and submit again - testcases19
    Then I should be on the 'Owner Information' page - testcases19
    Then I should see 'Owner Information' - testcases19
    Then I should see 'Name' - testcases19
    Then I should see 'Address' - testcases19
    Then I should see 'City' - testcases19
    Then I should see 'Telephone' - testcases19
    Then I should see 'Pets and Visits' - testcases19
    Then I should see 'Max Mustermann' - testcases19
    Then I should see 'London' - testcases19
    Then I should see '1234567890' - testcases19
    Given I have successfully created a new owner - testcases19
    Then I should see 'Owner Information' - testcases19
    Then I should see 'Address' - testcases19
    Then I should see 'City' - testcases19
    Then I should see 'Telephone' - testcases19
    Then I should see 'Pets and Visits' - testcases19
    Then I should see 'Max' - testcases19
    Then I should see 'Mustermann' - testcases19
    Then I should see 'London' - testcases19
    Then I should see '1234567890' - testcases19
