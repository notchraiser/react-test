import { render, screen } from "@testing-library/react";
import Title from "./Title";

it("should render Hello", () => {
  render(<Title />);
  const helloElement = screen.getByText(/Hello World/i);
  // screen.debug();
  expect(helloElement).toBeInTheDocument();
});
