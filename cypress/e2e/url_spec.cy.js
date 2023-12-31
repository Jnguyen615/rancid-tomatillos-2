describe("Url Changes", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 200,
        fixture: "allMoviesData.json",
      }
    ).as("getAllMovies");
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919",
      {
        statusCode: 200,
        fixture: "blackAdamData",
      }
    ).as("getSingleMovie");
  });

  it("Should change url when a movie is clicked", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".movie-card")
      .first()
      .invoke("attr", "data-movie-id")
      .then((movieId) => {
        cy.get(".movie-card").first().click();
        cy.url().should("include", `/436270`);
        cy.get(".nav-button").click();
        cy.url().should("not.include", `/436270`);
      });
  });

  it("Should return a page error if url is incorrect", () => {
    cy.visit("http://localhost:3000/698977");
    cy.get(".error-message").should("be.visible");
  });

  it("When on a modal page, click back button to the home page and then the forward button to the modal page should be the same movieId", () => {
    cy.visit("http://localhost:3000/436270");
    cy.go("back");
    cy.go("forward");
    cy.url().should("include", `/436270`);
  });

});
