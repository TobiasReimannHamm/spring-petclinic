import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Full HD - testcases17", () => {
  cy.viewport(1920, 1080);
  cy.openSpringPetclinic();
});

When("I click on the Find Owners navigation link - testcases17", () => {
  cy.get("a.nav-link[href='/owners/find']").click();
});

When("I click on the Find Owners button on the page - testcases17", () => {
    cy.get("button[type='submit']").contains("Find Owner").click();
  });
  
Then("Check URL - testcases17", () => {
  cy.url().should("eq", "http://localhost:8080/owners?lastName=");
});

Then("the page should contain the text Owners - testcases17", () => {
  cy.contains("h2", "Owners").should("be.visible");
});

Then("the owners table should display the following data - testcases17", (dataTable) => {
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