import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Searchbar from "./Searchbar";
import { TermsType } from "../../data";

let terms: TermsType[] = [];

const mockSetQuery = jest.fn();
const mockSetMessage = jest.fn();
const mockSetAutocomplete = jest.fn();
const mockSetTerms = jest.fn((newTerms) => {
  terms = newTerms;
});

afterEach(() => {
  jest.clearAllMocks();
});

const getProps = (areTermsFiltered: boolean) => ({
  query: "",
  setQuery: mockSetQuery,
  setMessage: mockSetMessage,
  setAutocomplete: mockSetAutocomplete,
  setTerms: mockSetTerms,
  areTermsFiltered: areTermsFiltered,
});

test("search input element is rendered", () => {
  render(<Searchbar {...getProps(false)} />);
  const searchInput = screen.getByPlaceholderText("Search term here...");
  expect(searchInput).toBeInTheDocument();
});

test("setQuery is called with the correct argument when user types", () => {
  render(<Searchbar {...getProps(false)} />);
  const searchInput = screen.getByPlaceholderText("Search term here...");
  const value = "Insurance term";
  userEvent.type(searchInput, value);
  expect(mockSetQuery).toHaveBeenCalledTimes(value.length);
});

test("Reset button is initially disabled", () => {
  render(<Searchbar {...getProps(false)} />);
  const resetButton = screen.getByRole("button");

  expect(resetButton).toBeDisabled();
});

test("Reset button is enabled when filtering terms", () => {
  render(<Searchbar {...getProps(true)} />);
  const resetButton = screen.getByRole("button");

  expect(resetButton).toBeEnabled();
});
