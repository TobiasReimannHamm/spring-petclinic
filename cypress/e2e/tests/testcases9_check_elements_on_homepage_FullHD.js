import { Given, Then } from "cypress-cucumber-preprocessor/steps";

// Full HD
Given("Full HD - testcases9", () => {
  cy.viewport(1920, 1080);
  cy.openSpringPetclinic();
});

Then(
  "Container with class 'xd-container' and text 'Willkommen' should be visible - testcases9",
  () => {
    cy.get("div.xd-container")
      .should("exist")
      .and("be.visible")
      .contains("Willkommen");
  }
);

And(
  "Inner container with class 'xd-container' and text 'Willkommen' should be visible - testcases9",
  () => {
    cy.get("div.xd-container")
      .should("exist")
      .and("be.visible")
      .contains("Willkommen");
  }
);

And(
  "Container with class 'xd-container' and Willkommen header should be visible - testcases9",
  () => {
    cy.get("div.xd-container").should("exist").and("be.visible");

    cy.get("h2").contains("Willkommen").should("be.visible");
  }
);

// Check if the pets image and its surrounding elements are visible
And(
  "The pets image and its surrounding elements should be visible - testcases9",
  () => {
    cy.get("div.container.xd-container").should("be.visible");
    cy.get("h2").should("be.visible").and("contain.text", "Willkommen");
    cy.get("div.row").should("be.visible");
    cy.get("div.col-md-12").should("be.visible");
    cy.get("img.img-responsive")
      .should("be.visible")
      .and("have.attr", "src", "/resources/images/pets.png");
  }
);

// Check if the image and surrounding elements are visible
And(
  "The logo image and its surrounding elements should be visible - testcases9",
  () => {
    cy.get("div.container").should("be.visible");
    cy.get("div.row").should("be.visible");
    cy.get("div.col-12.text-center").should("be.visible");
    cy.get("img.logo")
      .should("be.visible")
      .and("have.attr", "src", "/resources/images/spring-logo.svg")
      .and("have.attr", "alt", "VMware Tanzu Logo");
  }
);
