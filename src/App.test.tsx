import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { debug } = render(<App />);
  const linkElement = screen.getByText("TOP画面");
  // debug(linkElement);
  expect(linkElement).toBeInTheDocument();
});
