import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Full HD
Given("Full HD - testcases11", () => {
  cy.viewport(1920, 1080);
  cy.openSpringPetclinic();
});

When("The user clicks the 'Error' button - testcases11", () => {
  cy.get("a.nav-link[href='/oups']").click(); // Clicking on the error button
});

Then("The page should open with the URL oups - testcases11", () => {
  cy.url().should("eq", "http://localhost:8080/oups"); // URL check
});

Then(
  "The page should display an image, text, and surrounding elements - testcases11",
  () => {
    cy.get("img[src='/resources/images/pets.png']").should("be.visible");
    cy.get("h2").should("have.text", "Something happened..."); // Adjusted text
    cy.get("div.container").should("be.visible");
  }
);
