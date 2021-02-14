/* eslint-disable no-console */
import axios from "axios";

const getForecast = (
  searchText,
  setErrorMessage,
  setSelectedDate,
  setForecasts,
  setLocation
) => {
  setErrorMessage("");

  let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  return axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("Sorry, no such town or city. Please try again.");
        console.error(
          "Location is not valid. User input mu be a UK town or city.",
          error
        );
      }
      if (status === 500) {
        setErrorMessage("Oops, server error. Please come back later.");
        console.error("Server Error", error);
      }
    });
};

export default getForecast;
