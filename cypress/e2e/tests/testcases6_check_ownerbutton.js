import { Given, Then } from "cypress-cucumber-preprocessor/steps";

// Full HD
Given("Full HD - testcases6", () => {
  cy.viewport(1920, 1080);
  cy.openSpringPetclinic();
});

Then(
  "nav-link with fa-search span exists, is visible and contains 'Find owners' - testcases6",
  () => {
    // Does the whole element exist and is visible?
    cy.get('a.nav-link[href="/owners/find"]')
      .should("exist")
      .and("be.visible")
      .find("span.fa.fa-search")
      .should("exist")
      .and("be.visible");

    // Does the span element exist, is visible and containes the words 'Find owners'?
    cy.get('a.nav-link[href="/owners/find"] span')
      .contains("Find owners")
      .should("exist")
      .and("be.visible");
  }
);

// Check Owner Button as a link
And("The 'Find Owners' link should be visible and correct - testcases6", () => {
    cy.get("a.nav-link[href='/owners/find']")
    .should("be.visible")
    .and("have.attr", "title", "find owners")
    .and("contain.text", "Find owners");
});
