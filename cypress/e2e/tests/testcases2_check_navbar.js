import { Given, Then } from "cypress-cucumber-preprocessor/steps";

// Full HD
Given("Full HD - testcases2", () => {
  cy.viewport(1920, 1080);
  cy.openSpringPetclinic();
});

// navbar exists and visible?
Then("Navbar dark should be visible - testcases2", () => {
  // test of the navbar basic element
  cy.get("nav.navbar").should("exist").and("be.visible");
  // test of the exact class
  cy.get("nav.navbar.navbar-expand-lg.navbar-dark").should("be.visible");
});

And("Container-fluid should be present and visible - testcases2", () => {
  cy.get("div.container-fluid").should("be.visible");
});

// navbar-brand visibility check inlcuding inner span
And("Navbar-brand is there and is visible - testcases2", () => {
  cy.get(".navbar-brand").should("be.visible");
  cy.get(".navbar-brand span").should("not.be.visible");
});

// Navbar (collapse) should be visible
And("Main Navbar should be visible - testcases2", () => {
  cy.get("#main-navbar").should("be.visible");
  cy.get("div.collapse.navbar-collapse").should("be.visible");
});
