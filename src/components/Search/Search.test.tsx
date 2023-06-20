import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

afterEach(() => {
  jest.clearAllMocks();
});

test("updates terms and displays a message when there are matching results", async () => {
  const mockSetTerms = jest.fn();

  render(<Search setTerms={mockSetTerms} areTermsFiltered={false} />);

  const searchInput = screen.getByPlaceholderText("Search term here...");
  const searchForm = screen.getByRole("form");
  const value = "Actuary";

  act(() => {
    userEvent.type(searchInput, value);
    fireEvent.submit(searchForm);
  });

  expect(mockSetTerms).toHaveBeenCalledTimes(1);
  expect(screen.queryByTestId("autocomplete-option")).toBeNull();
  expect(
    await screen.findByText(`Results for: "${value}"`)
  ).toBeInTheDocument();
});

test("displays all terms and an error message when there's no matching result", async () => {
  const mockSetTerms = jest.fn();

  render(<Search setTerms={mockSetTerms} areTermsFiltered={false} />);

  const searchInput = screen.getByPlaceholderText("Search term here...");
  const searchForm = screen.getByRole("form");
  const value = "%XzksB23dk!";

  act(() => {
    userEvent.type(searchInput, value);
    fireEvent.submit(searchForm);
  });

  expect(mockSetTerms).toHaveBeenCalledTimes(0);
  expect(screen.queryByTestId("autocomplete-option")).toBeNull();
  expect(
    await screen.findByText(`We couldn't find any item for: "${value}"`)
  ).toBeInTheDocument();
});

test("displays all terms and an error message when user submits without typing first", async () => {
  const mockSetTerms = jest.fn();

  render(<Search setTerms={mockSetTerms} areTermsFiltered={false} />);

  const searchForm = screen.getByRole("form");

  act(() => {
    fireEvent.submit(searchForm);
  });

  expect(mockSetTerms).toHaveBeenCalledTimes(0);
  expect(screen.queryByTestId("autocomplete-option")).toBeNull();
  expect(
    await screen.findByText(
      `Oops! It looks like you forgot to enter a search term.`
    )
  ).toBeInTheDocument();
});
