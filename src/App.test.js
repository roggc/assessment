import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders a header", () => {
  render(<App />);
  expect(screen.getByTestId("header")).toBeInTheDocument();
});

it("renders a footer", () => {
  render(<App />);
  expect(screen.getByTestId("footer")).toBeInTheDocument();
});
