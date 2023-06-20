import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Searchbar from "./Searchbar";
import { TermsType } from "../../data";

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

test("search input element is rendered", () => {
  render(<Searchbar {...getProps(false)} />);
  const searchInput = screen.getByPlaceholderText("Search term here...");
  expect(searchInput).toBeInTheDocument();
});

test("the query value is updated whenever the user types", () => {
  render(<Searchbar {...getProps(false)} />);
  const searchInput = screen.getByPlaceholderText("Search term here...");
  const value = "Insurance term";
  userEvent.type(searchInput, value);
  expect(mockSetQuery).toHaveBeenCalledTimes(value.length);
});

test("the reset button is initially disabled", () => {
  render(<Searchbar {...getProps(false)} />);
  const resetButton = screen.getByRole("button");

  expect(resetButton).toBeDisabled();
});

test("the reset button is enabled when filtering terms", () => {
  render(<Searchbar {...getProps(true)} />);
  const resetButton = screen.getByRole("button");

  expect(resetButton).toBeEnabled();
});
