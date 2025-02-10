import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Full HD
Given("Full HD - testcases12", () => { 
  cy.viewport(1920, 1080);
  cy.openSpringPetclinic();
});

When("I click on the error link - testcases12", () => {
  cy.get('li.nav-item')
    .contains('Error')
    .click();
});

Then("I should see the error page with content - testcases12", () => {
  // Check URL
  cy.url().should('eq', 'http://localhost:8080/oups');

  // Check error page content
  cy.get('h2').should('contain.text', 'Something happened...');
  cy.get('img[src="/resources/images/pets.png"]').should('be.visible');
  cy.get('img[src="/resources/images/spring-logo.svg"]').should('be.visible');
});

When("I click on the home link - testcases12", () => {
  cy.get('li.nav-item')
    .contains('Home')
    .click();
});

Then("I should see the home page - testcases12", () => {
  // Check URL
  cy.url().should('eq', 'http://localhost:8080/');

  // Check content: "Willkommen" heading and the pet image
  cy.get('h2').should('contain.text', 'Willkommen');
  cy.get('img[src="/resources/images/pets.png"]').should('be.visible');
  cy.get('img[src="/resources/images/spring-logo.svg"]').should('be.visible');
});