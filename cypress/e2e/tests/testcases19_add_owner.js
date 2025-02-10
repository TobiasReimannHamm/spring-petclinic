import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Full HD - testcases19", () => {
  cy.viewport(1920, 1080);
  cy.visit("http://localhost:8080/owners/new");
});

Then("I verify the presence of required labels - testcases19", () => {
  cy.contains("Owner").should("be.visible");
  cy.contains("First Name").should("be.visible");
  cy.contains("Last Name").should("be.visible");
  cy.contains("Address").should("be.visible");
  cy.contains("City").should("be.visible");
  cy.contains("Telephone").should("be.visible");
});

When("I enter new owner details with an invalid phone number - testcases19", () => {
  cy.get("#firstName").type("Max");
  cy.get("#lastName").type("Mustermann");
  cy.get("#address").type("Teststraße");
  cy.get("#city").type("London");
  cy.get("#telephone").type("007");
  cy.get("button[type='submit']").click();
});

Then("I should see a validation error for telephone - testcases19", () => {
  cy.contains("Telephone must be a 10-digit number").should("be.visible");
});

When("I correct the phone number and submit again - testcases19", () => {
  cy.get("#telephone").clear().type("1234567890");
  cy.get("button[type='submit']").click();
});

Then("I should be on the 'Owner Information' page - testcases19", () => {
    cy.url().should("include", "/owners");
  });
  
  Then("I should see 'Owner Information' - testcases19", () => {
    cy.contains("h2", "Owner Information").should("be.visible");
  });
  
  Then("I should see 'Name' - testcases19", () => {
    cy.contains("th", "Name").should("be.visible");
  });
  
  Then("I should see 'Address' - testcases19", () => {
    cy.contains("th", "Address").should("be.visible");
  });
  
  Then("I should see 'City' - testcases19", () => {
    cy.contains("th", "City").should("be.visible");
  });
  
  Then("I should see 'Telephone' - testcases19", () => {
    cy.contains("th", "Telephone").should("be.visible");
  });
  
  Then("I should see 'Pets and Visits' - testcases19", () => {
    cy.contains("h2", "Pets and Visits").should("be.visible");
  });
  
  Then("I should see 'Max Mustermann' - testcases19", () => {
    cy.contains("td", "Max Mustermann").should("be.visible");
  });
  
  Then("I should see 'Teststreet' - testcases19", () => {
    cy.contains("td", "Teststreet").should("be.visible");
  });
  
  Then("I should see 'London' - testcases19", () => {
    cy.contains("td", "London").should("be.visible");
  });
  
  Then("I should see '1234567890' - testcases19", () => {
    cy.contains("td", "1234567890").should("be.visible");
  });
  
  // Additional verification of the confirmation page
  Given("I have successfully created a new owner - testcases19", () => {
    cy.visit("http://localhost:8080/owners"); // Assuming the new owner appears in the owners list
  });
  
  Then("I should see 'Owner Information' - testcases19", () => {
    cy.contains("h2", "Owner Information").should("be.visible");
  });
  
  Then("I should see 'Address' - testcases19", () => {
    cy.contains("th", "Address").should("be.visible");
  });
  
  Then("I should see 'City' - testcases19", () => {
    cy.contains("th", "City").should("be.visible");
  });
  
  Then("I should see 'Telephone' - testcases19", () => {
    cy.contains("th", "Telephone").should("be.visible");
  });
  
  Then("I should see 'Pets and Visits' - testcases19", () => {
    cy.contains("h2", "Pets and Visits").should("be.visible");
  });
  
  Then("I should see 'Max' - testcases19", () => {
    cy.contains("td", "Max").should("be.visible");
  });
  
  Then("I should see 'Mustermann' - testcases19", () => {
    cy.contains("td", "Mustermann").should("be.visible");
  });

  Then("I should see 'London' - testcases19", () => {
    cy.contains("td", "London").should("be.visible");
  });
  
  Then("I should see '1234567890' - testcases19", () => {
    cy.contains("td", "1234567890").should("be.visible");
  });

  