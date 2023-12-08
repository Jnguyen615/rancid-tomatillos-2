import React from "react";
import "./ErrorPage.scss";
import errorImage from "../../hallway-error.jpeg";
import PropTypes from "prop-types";

const ErrorPage = () => {
  return (
    <main className="error-container">
      <img src={errorImage} alt="Error" className="error-image" />
      <h1 className="error-message">
        Oops! Something went wrong on the server. Please try again later.
      </h1>
    </main>
  );
};

ErrorPage.propTypes = {
  errorMessage: PropTypes.string
};

export default ErrorPage;
