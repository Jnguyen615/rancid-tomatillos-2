describe("Modal Display Tests", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      { 
        statusCode: 200,
        fixture: "allMoviesData", 
      },
      ).as("getAllMovies");
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
        .get("h1")
        .should("contain", "Black Adam")
        .get(".star-rating")
        .should("be.visible")
        .should("contain", "4/10")
        .get(".modal-overview")
        .should(
          "contain",
          "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world."
        )
        .get('.modal-release-date')
        .should("contain", " 10/19/2022")
        .get('.modal-genres > :nth-child(1)')
        .should("contain", "Action")
        .get('.modal-genres > :nth-child(2)')
        .should("contain", "Fantasy")
        .get('.modal-genres > :nth-child(3)')
        .should("contain", "Science Fiction")
    });
  });
})
