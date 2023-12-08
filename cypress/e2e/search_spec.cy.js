describe("Search Feature", () => {
  beforeEach(() => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      fixture: "allMoviesData.json",
    });
    cy.visit("http://localhost:3000");
  });

  it("Should display all movies on page load", () => {
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
      .get(".search-input")
      .should("be.visible")
      .get(".search-input")
      .should("have.value", "");
  });

  it("Should filter movie titles by user input", () => {
    cy.get(".search-input").type("s");
    cy.get(".movie-card").should("have.length", 3);
    cy.get(".search-input").type("t");
    cy.get(".movie-card").should("have.length", 1);
  });

  it("Should display all movies when search input is cleared", () => {
    cy.get(".search-input")
      .type("s")
      .get(".movie-card")
      .should("have.length", 3)
      .get(".search-input")
      .clear()
      .get(".movie-card")
      .should("have.length", 40);
  });

  it("Should show error message if no movies match search input", () => {
    cy.get(".search-input").type("ss");
    cy.get(".movie-card").should("have.length", 0);
    cy.get(".no-movies").contains("No movies found!");
  });
});
