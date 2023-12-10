describe("Error Handling", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 500,
      }
    ).as("getMovies");
  });

  it("Should display error if server is down", () => {
    cy.visit("http://localhost:3000");
    cy.wait("@getMovies").then((interception) => {
      expect(interception.response.statusCode).to.equal(500);
      cy.get(".no-movies").contains("No movies found!");
    });
  });

  it("Should display error if user types in a bad url", () => {
    cy.visit("http://localhost:3000/badurl");
    cy.get(".error-image").should("be.visible");
    cy.get(".error-message").contains(
      "Oops! Something went wrong on the server. Please try again later."
    );
  });

  it("Should display an error if movie details are not found", () => {
    cy.visit("http://localhost:3000/movie/694919");
    cy.get(".error-message").contains(
      "Oops! Something went wrong on the server. Please try again later."
    );
  });
});
