import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Searchbar from "./Searchbar";

afterEach(() => {
  jest.clearAllMocks();
});

const mockSetQuery = jest.fn();
const mockSetMessage = jest.fn();
const mockSetAutocomplete = jest.fn();
const mockSetTerms = jest.fn();

const getProps = (areTermsFiltered: boolean) => ({
  query: "",
  setQuery: mockSetQuery,
  setMessage: mockSetMessage,
  setAutocomplete: mockSetAutocomplete,
  setTerms: mockSetTerms,
  areTermsFiltered,
});

test("renders search input element", () => {
  render(<Searchbar {...getProps(false)} />);
  const searchInput = screen.getByPlaceholderText("Search term here...");

  expect(searchInput).toBeInTheDocument();
});

test("updates the query value whenever the user types", () => {
  render(<Searchbar {...getProps(false)} />);
  const searchInput = screen.getByPlaceholderText("Search term here...");
  const value = "Insurance term";

  userEvent.type(searchInput, value);

  expect(mockSetQuery).toHaveBeenCalledTimes(value.length);
});

test("displays the reset button as initially disabled", () => {
  render(<Searchbar {...getProps(false)} />);
  const resetButton = screen.getByRole("button");

  expect(resetButton).toBeDisabled();
});

test("enables the reset button when filtering terms", () => {
  render(<Searchbar {...getProps(true)} />);
  const resetButton = screen.getByRole("button");

  expect(resetButton).toBeEnabled();
});
