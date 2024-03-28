import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test("Loading Title in Contact US Component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading"); //h1 - h6
  const text = screen.getByPlaceholderText('name');

  expect(text).toBeInTheDocument();

  //Assertion:
  expect(heading).toBeInTheDocument();
});

test("Loading Button in Contact US Component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  //Assertion:
  expect(button).toBeInTheDocument();
});
