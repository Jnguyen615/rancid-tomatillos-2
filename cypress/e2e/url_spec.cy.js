describe("Url Changes", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 200,
        fixture: "allMoviesData.json",
      }
    );
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270",
      {
        statusCode: 200,
        fixture: "blackAdamData",
      }
    );
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

  it("Should display correct movie details for the clicked movie", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".movie-card")
      .first()
      .invoke("attr", "data-movie-id")
      .then((movieId) => {
        cy.get(".movie-card")
          .first()
          .find(".movie-title")
          .invoke("text")
          .then((movieTitle) => {
            cy.get(".movie-card").first().click();
            cy.url().should("include", `/436270`);
            cy.get('.modal-content > h1')
            .should("have.text", 'Black Adam');
          });
      });
  });
});
