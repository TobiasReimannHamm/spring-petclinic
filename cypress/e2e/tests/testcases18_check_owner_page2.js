import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Full HD - testcases18", () => {
  cy.viewport(1920, 1080);
  cy.visit("http://localhost:8080/owners?page=2");
});

Then("the page should contain the text Owners - testcases18", () => {
    cy.contains("h2", "Owners").should("be.visible");
  });
  
  Then("the owners table should display the following data - testcases18", (dataTable) => {
    dataTable.hashes().forEach((row, index) => {
      cy.get("#owners tbody tr").eq(index).within(() => {
        cy.get("td").eq(0).should("contain", row.Name);
        cy.get("td").eq(1).should("contain", row.Address);
        cy.get("td").eq(2).should("contain", row.City);
        cy.get("td").eq(3).should("contain", row.Telephone);
        cy.get("td").eq(4).should("contain", row.Pets);
      });
    });
  });

