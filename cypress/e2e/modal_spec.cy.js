describe("Modal Display Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Displays the header with necessary elements", () => {
    cy.get(".movie-header")
      .should("be.visible")
      .get(".tomatillo-icon")
      .should("be.visible")
      .get("h1")
      .should("contain", "Rancid Green Tomatillos")
      .get(".header-nav")
      .should("be.visible")
      .get(".nav-button")
      .should("be.visible")
      .get(".nav-button")
      .click();

    cy.url().should("eq", "http://localhost:3000/");
  });

  it("Displays modal after navigating from movies display", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/*",
      { fixture: "blackAdamData.json" }
    ).as("getSingleMovie");
    cy.get(".movie-card").first().click();
    cy.wait("@getSingleMovie").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);

      cy.get(".modal")
        .should("be.visible")
        .get(".modal-header")
        .should("contain", "Black Adam")
        .get(".star-rating")
        .should("be.visible")
        .should("contain", "4/10")
        .get(".modal-overview")
        .should(
          "contain",
          "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world."
        )
        .get(".modal-release-date")
        .should("contain", " 2022-10-19")
        .get(".modal-genres")
        .should("contain", "Action, Fantasy, Science Fiction");
    });
  });
  
  it("Should display an error if movie details are not found", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919",
      {
        statusCode: 500,
      }
    );
    cy.visit("http://localhost:3000/movie/694919");
    cy.get(".error-message").contains(
      "Oops! Something went wrong on the server. Please try again later."
    );
  });
});
