import { Given, Then } from "cypress-cucumber-preprocessor/steps";

// Full HD
Given("Full HD - testcases7", () => {
  cy.viewport(1920, 1080);
  cy.openSpringPetclinic();
});

Then(
  "nav-link with fa-th-list span exists, is visible and contains 'Veterinarians' - testcases7",
  () => {
    // Does the whole element exist and is visible?
    cy.get('a.nav-link[href="/vets.html"]')
      .should("exist")
      .and("be.visible")
      .find("span.fa.fa-th-list")
      .should("exist")
      .and("be.visible");

    // Does the span element exist, is visible and containes the word 'Veterinarians'?
    cy.get('a.nav-link[href="/vets.html"] span')
      .contains("Veterinarians")
      .should("exist")
      .and("be.visible");
  }
);

// Check Veterinarians Button as a link
And(
  "The 'Veterinarians' link should be visible and correct - testcases7",
  () => {
    cy.get("a.nav-link[href='/vets.html']")
      .should("be.visible")
      .and("have.attr", "title", "veterinarians")
      .and("contain.text", "Veterinarians");
  }
);
