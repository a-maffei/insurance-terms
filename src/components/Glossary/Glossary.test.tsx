import { screen, render, fireEvent, waitFor } from "@testing-library/react";
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

  await act(() => {
    userEvent.type(searchInput, value);

    waitFor(() => {
      const autocompleteButton = screen.getByRole("button", {
        name: "Actuary",
      });
      fireEvent.click(autocompleteButton);
    });
  });

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

  await act(() => {
    userEvent.type(searchInput, "actu");
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
