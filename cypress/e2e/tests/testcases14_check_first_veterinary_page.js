import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Full HD setup
Given("Full HD - testcases14", () => {
  cy.viewport(1920, 1080);
  cy.openSpringPetclinic();
});

When("I click on the Veterinarians link - testcases14", () => {
  // Click on the Veterinarians link
  cy.contains("Veterinarians").click();
});

Then("I should see the Veterinarians page - testcases14", () => {
  // Verify that the URL matches the expected page
  cy.url().should("eq", "http://localhost:8080/vets.html");
});

Then("I should see the Veterinarians header - testcases14", () => {
  // Verify that the header contains the word "Veterinarians" (h2 tag, partial match)
  cy.get("h2").should("include.text", "Veterinarians");
});

Then(
  "I should see the following Veterinarians data in the table - testcases14:",
  (dataTable) => {
    // Loop through each row in the table to verify the name and specialties
    const rows = dataTable.rawTable.slice(1); // Skip header row

    rows.forEach((row, index) => {
      cy.get("table#vets tbody tr")
        .eq(index)
        .within(() => {
          // Verify the name column
          cy.get("td").eq(0).should("have.text", row[0]);

          // Verify the specialties column
          cy.get("td")
            .eq(1)
            .invoke("text")
            .then((text) => {
              const cleanText = text.replace(/\u00A0/g, " ").trim(); // Replace &nbsp; with a regular space and trim
              const expectedSpecialties = row[1]
                .split(",")
                .map((s) => s.trim()); // Split by comma and trim spaces

              // Ensure the text matches the expected specialties
              expectedSpecialties.forEach((specialty) => {
                expect(cleanText).to.include(specialty);
              });
            });
        });
    });
  }
);
