import { render, screen } from "@testing-library/react";

import Top from "./Top";

describe("Button", () => {
  test("should call onClick", () => {
    render(<Top />);
    const h2El = screen.getByText("TOP画面");
    expect(h2El).toBeInTheDocument();
  });
});
