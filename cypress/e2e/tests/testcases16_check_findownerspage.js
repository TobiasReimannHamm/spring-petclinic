import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Full HD - testcases16", () => {
  cy.viewport(1920, 1080);
  cy.openSpringPetclinic();
});

When('I click on the "Find owners" link - testcases16', () => {
    cy.contains('a.nav-link', 'Find owners').click();
  });
  
  Then('the URL should be owners find - testcases16', () => {
    cy.url().should("eq", "http://localhost:8080/owners/find");
  });
  
  Then('I should see "Find Owners" on the page - testcases16', () => {
    cy.contains("h2", "Find Owners").should("be.visible");
  });
  
  Then('I should see "Last name" on the page - testcases16', () => {
    cy.contains("label", "Last name").should("be.visible");
  });
  
  Then('I should see a button with text "Find Owner" - testcases16', () => {
    cy.contains("button", "Find Owner").should("be.visible");
  });
  
  Then('I should see a button with text "Add Owner" - testcases16', () => {
    cy.contains("a.btn-primary", "Add Owner").should("be.visible");
  });