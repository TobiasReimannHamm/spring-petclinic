Feature: Open Homepage in Full HD, check text and pictures.

  Background: There is text and a picture on the homepage and one in the footer. Check if they are visible.

Scenario: Check Homepage
    Given Full HD - testcases9
    Then Container with class 'xd-container' and text 'Willkommen' should be visible - testcases9
    And Inner container with class 'xd-container' and text 'Willkommen' should be visible - testcases9
    And Container with class 'xd-container' and Willkommen header should be visible - testcases9
    And The pets image and its surrounding elements should be visible - testcases9
    And The logo image and its surrounding elements should be visible - testcases9





