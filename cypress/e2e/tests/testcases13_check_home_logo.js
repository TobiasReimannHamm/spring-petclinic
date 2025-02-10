import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Full HD
Given("Full HD - testcases13", () => {
  cy.viewport(1920, 1080);
  cy.openSpringPetclinic();
});

// Click on the error link
When("I click on the error link - testcases13", () => {
  cy.get('a[href="/oups"]').click();
});

// Verify the error page content
Then("I should see the error page with content - testcases13", () => {
  cy.url().should("eq", "http://localhost:8080/oups");
  cy.get("h2").should("contain", "Something happened...");
  cy.get('img[src="/resources/images/pets.png"]').should("be.visible");
  cy.get('img[src="/resources/images/spring-logo.svg"]').should("be.visible");
});

// Click on the home link in the logo
When("I click on the home link in the logo - testcases13", () => {
  cy.get("a.navbar-brand").click();
});

// Verify the home page content
Then("I should see the home page - testcases13", () => {
  cy.url().should("eq", "http://localhost:8080/");
  cy.get("h2").should("contain", "Willkommen");
  cy.get('img[src="/resources/images/pets.png"]').should("be.visible");
  cy.get('img[src="/resources/images/spring-logo.svg"]').should("be.visible");
});
