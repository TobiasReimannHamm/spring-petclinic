import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(
  "Resolution SD 854 x 480 Navigation to the Spring-Petclinic - testcases10",
  () => {
    cy.viewport(854, 480);
    cy.openSpringPetclinic();
  }
);

When("I click on the toggle button once - testcases10", () => {
  cy.get("button.navbar-toggler").click();
});

When("I click on the toggle button again - testcases10", () => {
  cy.get("button.navbar-toggler").click();
});

Then("the navbar should expand - testcases10", () => {
  cy.get("button.navbar-toggler")
    .should("not.have.class", "collapsed")
    .and("have.attr", "aria-expanded", "true");
  cy.get(".navbar-collapse").should("have.class", "show");
});

Then("the navbar should collapse - testcases10", () => {
  cy.get("button.navbar-toggler")
    .should("have.class", "collapsed")
    .and("have.attr", "aria-expanded", "false");
  cy.get(".navbar-collapse").should("not.have.class", "show");
});