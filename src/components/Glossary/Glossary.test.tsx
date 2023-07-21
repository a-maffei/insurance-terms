import { screen, render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Glossary from "./Glossary";

afterEach(() => {
  jest.clearAllMocks();
});

test("shows corresponding term and resets search input when user clicks on autocomplete", async () => {
  render(<Glossary />);
  const searchInput = screen.getByPlaceholderText("Search term here...");
  const value = "a";

  act(() => {
    userEvent.type(searchInput, value);
  });

  const autocompleteButton = await screen.findByRole("button", {
    name: `Autocomplete option: Actuary`,
  });

  fireEvent.click(autocompleteButton);

  const newSearchInput = screen.getByPlaceholderText(
    "Search term here..."
  ) as HTMLInputElement;
  const resultList = await screen.findAllByTestId("term-section");
  const autoCompleteComponent = screen.queryByTestId("autocomplete-option");

  expect(newSearchInput.value).toBe("");
  expect(autoCompleteComponent).toBeNull();
  expect(resultList.length).toBe(1);
});

test("displays the correct term when user searches for it", async () => {
  render(<Glossary />);
  const searchInput = screen.getByPlaceholderText("Search term here...");
  const submissionForm = screen.getByRole("form");
  const value = "actu";

  act(() => {
    userEvent.type(searchInput, value);
    fireEvent.submit(submissionForm);
  });

  const result = await screen.findByRole("heading", {
    name: "Actuary",
    level: 4,
  });
  const resultList = await screen.findAllByTestId("term-section");

  expect(result).toBeInTheDocument();
  expect(resultList.length).toBe(1);
});

test("renders suggested term once the user clicks on it", async () => {
  render(<Glossary />);
  const suggestions = screen.getAllByTestId("suggestion-button");
  const firstSuggestion = suggestions[0];
  const firstSuggestionText = firstSuggestion.textContent as string;

  act(() => {
    fireEvent.click(firstSuggestion);
  });

  const result = await screen.findByRole("heading", {
    name: firstSuggestionText,
    level: 4,
  });
  const resultList = await screen.findAllByTestId("term-section");

  expect(result).toBeInTheDocument();
  expect(resultList.length).toBe(1);
});
