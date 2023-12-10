describe("Movies Homepage", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/",
      { fixture: "allMoviesData.json" }
      ).as("getAllMovies");
      cy.visit("http://localhost:3000");
      cy.wait("@getAllMovies")
  });

  it("Should display a header", () => {
    cy.get(".movie-header")
      .should("be.visible")
      .get(".tomatillo-icon")
      .should("be.visible")
      .get("h1")
      .should("contain", "Rancid Green Tomatillos")
      .get(".header-nav")
      .should("be.visible")
      .get(".nav-button")
      .should("be.visible");
  });

  it("Should display a movie card", () => {
    cy.get(".movie-card")
      .should("be.visible")
      .get(".movie-image")
      .should("be.visible")
      .get(".movie-title")
      .should("be.visible")
      .get(".star-rating")
      .should("be.visible");
  });

  it("Should display all movies", () => {
    cy.get(".movie-card").should("have.length", 40);
  });

  it("Should filter movies by title", () => {
    cy.get(".search-input")
      .type("The")
      .get(".movie-card")
      .should("have.length", 9);
  });
});
