import { Given, Then } from "cypress-cucumber-preprocessor/steps";

// Full HD
Given("Full HD - testcases8", () => {
  cy.viewport(1920, 1080);
  cy.openSpringPetclinic();
});

Then(
  "nav-link with fa-exclamation-triangle span exists, is visible and contains 'Error' - testcases8",
  () => {
    // Does the whole element exist and is visible?
    cy.get('a.nav-link[href="/oups"]')
      .should("exist")
      .and("be.visible")
      .find("span.fa.fa-exclamation-triangle")
      .should("exist")
      .and("be.visible");

      // Does the span element exist, is visible and containes the word 'Error'?
    cy.get('a.nav-link[href="/oups"] span')
      .contains("Error")
      .should("exist")
      .and("be.visible");
  }
);

// Check Error Button as a link
And("The 'Error' link should be visible and correct - testcases8", () => {
  cy.get("a.nav-link[href='/oups']")
    .should("be.visible")
    .and(
      "have.attr",
      "title",
      "trigger a RuntimeException to see how it is handled"
    )
    .and("contain.text", "Error");
});
