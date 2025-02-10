import { Given, Then } from "cypress-cucumber-preprocessor/steps";

// Full HD
Given("Full HD - testcases4", () => {
    cy.viewport(1920, 1080);
    cy.openSpringPetclinic();
  });

// Homelink in the Logo is visible, href attribute is correct
Then('I check the home link in the Logo - testcases4', () => {
    cy.get('a.navbar-brand[href="/"]') // Find the home link
      .should('be.visible') // The link should be visible
      .and('have.attr', 'href', '/'); // The href attribute should be "/"
  });
  
  // Home link in Logo is visible and correctly linked
  And('The home link should be visible and correctly linked - testcases4', () => {
    cy.get('a.navbar-brand[href="/"]') // Check the link again
      .should('be.visible') // The link should be visible
      .and('have.attr', 'href', '/'); // The href attribute should be "/"
  });
    
  // Span element should be empty
  And('The span element in the home link should be empty - testcases4', () => {
    cy.get('a.navbar-brand span') // Check the span element inside the home link
      .should('exist') // It should exist
      .and('be.empty'); // The span element should be empty
  });
  
  