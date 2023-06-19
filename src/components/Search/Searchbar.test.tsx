import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Searchbar from "./Searchbar";

afterEach(() => jest.resetAllMocks());

const mockSetQuery = jest.fn();
const mockSetMessage = jest.fn();
const mockSetAutocomplete = jest.fn();
const mockSetTerms = jest.fn();

const props = {
  query: "",
  setQuery: mockSetQuery,
  setMessage: mockSetMessage,
  setAutocomplete: mockSetAutocomplete,
  setTerms: mockSetTerms,
  areTermsFiltered: false,
};

test("search input element is rendered", () => {
  render(<Searchbar {...props} />);
  const searchInput = screen.getByPlaceholderText("Search term here...");
  expect(searchInput).toBeInTheDocument();
});

test("setQuery is called with the correct argument when user types", () => {
  render(<Searchbar {...props} />);
  const searchInput = screen.getByPlaceholderText("Search term here...");
  const value = "Insurance term";
  userEvent.type(searchInput, value);
  expect(mockSetQuery).toHaveBeenCalledTimes(value.length);
});

test("Reset button is initially disabled", () => {
  render(<Searchbar {...props} />);
  const resetButton = screen.getByRole("button");

  expect(resetButton).toBeDisabled();
});
