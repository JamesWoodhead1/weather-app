import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";

xtest("renders weather app header", () => {
  render(<App />);
  const appHeader = screen.getByText("Weather App");
  expect(appHeader).toBeInTheDocument();
});
