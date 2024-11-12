import { render, screen } from "@testing-library/react";
import App from "./App";

test("checks presence of React link text", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
