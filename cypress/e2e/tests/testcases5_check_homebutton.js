import { Given, Then } from "cypress-cucumber-preprocessor/steps";

// Full HD
Given("Full HD - testcases5", () => {
    cy.viewport(1920, 1080);
    cy.openSpringPetclinic();
  });

// Check Home Button including picture
Then(
    "nav-link with fa-home span exists, is visible and contains 'Home' - testcases5",
    () => {
      // Does the whole element exist and is visible?
      cy.get("a.nav-link.active")
        .should("exist")
        .and("be.visible")
        .find("span.fa.fa-home")
        .should("exist")
        .and("be.visible");
  
      // Does the span element exist, is visible and containes the word Home?
      cy.get("a.nav-link.active span")
        .contains("Home")
        .should("exist")
        .and("be.visible");
    }
  );
  
  // Check Home Button as a link
  And("The 'Home' link should be visible and correct - testcases5", () => {
    cy.get("a.nav-link.active[href='/']")
      .should("be.visible")
      .and("have.attr", "title", "home page")
      .and("contain.text", "Home");
  });


