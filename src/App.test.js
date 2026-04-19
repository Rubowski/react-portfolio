import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio hero", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /hello, i'm odysseas/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/featured projects/i)).toBeInTheDocument();
});
