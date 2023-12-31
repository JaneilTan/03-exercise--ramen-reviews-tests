import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

beforeEach(() => {
  render(<App />);
});

describe("Ramen Reviews App", () => {
  test("renders the logo", () => {
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image.alt).toBe("logo");
  });

  test("renders Ramen Reviews header", () => {
    expect(screen.getByText("Ramen Reviews")).toBeInTheDocument();
  });

  test("renders number of Reviews to Display", () => {
    expect(screen.getByText("Reviews to display: 10")).toBeInTheDocument();
  });

  test("renders a select element with 4 options", () => {
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    const options = screen.getAllByRole("option");
    expect(options.length).toBe(4);
  });

  test("renders 10 Ramen Reviews", () => {
    
  const displayReviews = screen.getByText("Reviews to display: 10");
  userEvent.click(displayReviews);

  const reviewElements = screen.getAllByRole("link");
  expect(reviewElements).toHaveLength(10);

  });

  test("renders 25 reviews when option 25 is selected", () => {
    
  const selectElement = screen.getByRole("combobox");

  userEvent.selectOptions(selectElement, "25");

  const reviewLinks =  screen.getAllByRole("link");
  expect(reviewLinks).toHaveLength(25);
  
  });
});
