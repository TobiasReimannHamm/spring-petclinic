import { Given, Then } from "cypress-cucumber-preprocessor/steps";

// Full HD
Given("Full HD - testcases3", () => {
  cy.viewport(1920, 1080);
  cy.openSpringPetclinic();
});

// Navigation menu should be visible
Then("Navigation menu should be visible - testcases3", () => {
  cy.get("ul.nav.navbar-nav.me-auto").should("be.visible");
});

// Navigation menu should contain four links
And("Navigation menu should contain four links - testcases3", () => {
  cy.get("ul.nav.navbar-nav.me-auto li.nav-item").should("have.length", 4);
});

// Navigation menu should contain expected links
And("Navigation menu should contain expected links - testcases3", () => {
  cy.get("ul.nav.navbar-nav.me-auto").within(() => {
    cy.get("a.nav-link").should("have.length", 4);
    cy.contains("Home").should("have.attr", "href", "/");
    cy.contains("Find owners").should("have.attr", "href", "/owners/find");
    cy.contains("Veterinarians").should("have.attr", "href", "/vets.html");
    cy.contains("Error").should("have.attr", "href", "/oups");
  });
});
