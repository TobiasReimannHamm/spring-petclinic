Feature: Owner Search - testcases17

  Scenario: Search for owners in the application - testcases17
    Given Full HD - testcases17
    When I click on the Find Owners navigation link - testcases17
    And I click on the Find Owners button on the page - testcases17
    Then Check URL - testcases17
    And the page should contain the text Owners - testcases17
    And the owners table should display the following data - testcases17
    
      | Name             | Address           | City       | Telephone  | Pets          |
      | George Franklin  | 110 W. Liberty St.| Madison    | 6085551023 | Leo           |
      | Betty Davis      | 638 Cardinal Ave. | Sun Prairie| 6085551749 | Basil         |
      | Eduardo Rodriquez| 2693 Commerce St. | McFarland  | 6085558763 | Jewel, Rosy   |
      | Harold Davis     | 563 Friendly St.  | Windsor    | 6085553198 | Iggy          |
      | Peter McTavish   | 2387 S. Fair Way  | Madison    | 6085552765 | George        |