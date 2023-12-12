// describe("Error Handling", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000");
//     cy.intercept(
//       "GET",
//       "https://rancid-tomatillos.herokuapp.com/api/v2/movies/",
//       { fixture: "allMoviesData.json" },
//     ).as("getAllMovies");
//   });
describe("Error handling", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 500,
      }
    ).as("interceptAllMoviesFetch");
  });

  it("Should display error if server is down", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/*",
      {
        statusCode: 500,
      }
    );
    cy.visit("http://localhost:3000/*");
    cy.get(".error-message").contains(
      "Oops! Something went wrong on the server. Please try again later.");
    });

    it("Should display error if user types in a bad url", () => {
      cy.visit("http://localhost:3000/badurl/*")
      cy.get(".error-message").contains(
        "Oops! Something went wrong on the server. Please try again later.");
      })
  

      it("Should display an error if movie details are not found", () => {
        cy.intercept(
          "GET",
          "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/*",
          {
            statusCode: 404,
          }
        );
        cy.visit("http://localhost:3000/movie/694919/");
        cy.get(".error-message").contains(
          "Oops! Something went wrong on the server. Please try again later.");
        });
});

