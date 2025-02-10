import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Full HD - testcases15", () => {
  cy.viewport(1920, 1080);
  cy.openSpringPetclinic();
});

When("I click on the Veterinarians link - testcases15", () => {
    // Click on the Veterinarians link
    cy.contains("Veterinarians").click();
  });

Then("I should see the Veterinarians page - testcases15", () => {
  cy.url().should("eq", "http://localhost:8080/vets.html");
});

Then("I should see the Veterinarians header - testcases15", () => {
  cy.get("h2").should("contain", "Veterinarians");
});

When("I click on the Link to page 2 - testcases15", () => {
  cy.get("span").contains("2").click({ force: true });
});

Then("I should see the Veterinarians page 2 - testcases15", () => {
  cy.url().should("eq", "http://localhost:8080/vets.html?page=2");
});

Then("I should see the Veterinarians header 2 - testcases15", () => {
  cy.get("h2").should("contain", "Veterinarians");
});

Then(
  "I should see the following Veterinarians data in the table - testcases15:",
  (dataTable) => {
    dataTable.hashes().forEach((row) => {
      cy.get("table#vets tbody tr")
        .contains("td", row.Name)
        .parent()
        .within(() => {
          cy.get("td").eq(1).should("contain", row.Specialties);
        });
    });
  }
);

When("I click on the Link to page 1 - testcases15", () => {
  cy.get("span").contains("1").click({ force: true });
});

Then("I should see the Veterinarians page 1 - testcases15", () => {
  cy.url().should("eq", "http://localhost:8080/vets.html?page=1");
});

Then("I should see the Veterinarians header - testcases15", () => {
  cy.get("h2").should("contain", "Veterinarians");
});
