import { Given, Then } from "cypress-cucumber-preprocessor/steps";

// 4k
Given("Resolution 4k 3840 x 2160 Navigation to the Spring-Petclinic - testcases1", () => {
  cy.viewport(1920, 1080);
  cy.openSpringPetclinic();
});

Then("Navbar Toggler is invisible 1 - testcases1", () => {
  cy.get('.navbar-toggler').should('exist').and('not.be.visible');
});

//Full HD
Given("Resolution Full HD 1920 x 1080 Navigation to the Spring-Petclinic - testcases1", () => {
  cy.viewport(1920, 1080);
  cy.openSpringPetclinic();
});

Then("Navbar Toggler is invisible 2 - testcases1", () => {
  cy.get('.navbar-toggler').should('exist').and('not.be.visible');
});

//HD
Given("Resolution HD 1280 x 720 Navigation to the Spring-Petclinic - testcases1", () => {
  cy.viewport(1280, 720);
  cy.openSpringPetclinic();
});

Then("Navbar Toggler is invisible 3 - testcases1", () => {
  cy.get('.navbar-toggler').should('exist').and('not.be.visible');
});

//SD
Given("Resolution SD 854 x 480 Navigation to the Spring-Petclinic - testcases1", () => {
  cy.viewport(854, 480);
  cy.openSpringPetclinic();
});

Then("Navbar Toggler is visible - testcases1", () => {
  cy.get('.navbar-toggler').should('exist').and('be.visible');
});
