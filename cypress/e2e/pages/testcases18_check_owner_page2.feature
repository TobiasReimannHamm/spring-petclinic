Feature: Owner Search - testcases18

  Scenario: Search for owners in the application - testcases18
    Given Full HD - testcases18
    Then the page should contain the text Owners - testcases18
    And the owners table should display the following data - testcases18

      | Name            | Address               | City     | Telephone  | Pets          |
      | Jean Coleman    | 105 N. Lake St.       | Monona   | 6085552654 | Max, Samantha |
      | Jeff Black      | 1450 Oak Blvd.        | Monona   | 6085555387 | Lucky         |
      | Maria Escobito  | 345 Maple St.         | Madison  | 6085557683 | Mulligan      |
      | David Schroeder | 2749 Blackhawk Trail  | Madison  | 6085559435 | Freddy        |
      | Carlos Estaban  | 2335 Independence La. | Waunakee | 6085555487 | Lucky, Sly    |