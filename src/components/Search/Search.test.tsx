import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

const mockSetTerms = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

test("updates terms and displays a message when there are matching results", async () => {
  render(<Search setTerms={mockSetTerms} areTermsFiltered={false} />);
  const searchInput = screen.getByPlaceholderText("Search term here...");
  const searchForm = screen.getByRole("form");
  const value = "Actuary";

  act(() => {
    userEvent.type(searchInput, value);
    fireEvent.submit(searchForm);
  });

  const autocomplete = screen.queryByTestId("autocomplete-option");
  const message = await screen.findByText(`Results for: "${value}"`);

  expect(mockSetTerms).toHaveBeenCalledTimes(1);
  expect(autocomplete).toBeNull();
  expect(message).toBeInTheDocument();
});

test("displays all terms and an error message when there's no matching result", async () => {
  render(<Search setTerms={mockSetTerms} areTermsFiltered={false} />);
  const searchInput = screen.getByPlaceholderText("Search term here...");
  const searchForm = screen.getByRole("form");
  const value = "%XzksB23dk!";

  act(() => {
    userEvent.type(searchInput, value);
    fireEvent.submit(searchForm);
  });

  const autocomplete = screen.queryByTestId("autocomplete-option");
  const message = await screen.findByText(
    `We couldn't find any item for: "${value}"`
  );

  expect(mockSetTerms).toHaveBeenCalledTimes(0);
  expect(autocomplete).toBeNull();
  expect(message).toBeInTheDocument();
});

test("displays all terms and an error message when user submits without typing first", async () => {
  render(<Search setTerms={mockSetTerms} areTermsFiltered={false} />);
  const searchForm = screen.getByRole("form");

  act(() => {
    fireEvent.submit(searchForm);
  });

  const autocomplete = screen.queryByTestId("autocomplete-option");
  const message = await screen.findByText(
    `Oops! It looks like you forgot to enter a search term.`
  );

  expect(mockSetTerms).toHaveBeenCalledTimes(0);
  expect(autocomplete).toBeNull();
  expect(message).toBeInTheDocument();
});

test("displays autocomplete options when typing", async () => {
  render(<Search setTerms={mockSetTerms} areTermsFiltered={false} />);
  const searchInput = screen.getByPlaceholderText("Search term here...");
  const value = "a";

  act(() => {
    userEvent.type(searchInput, value);
  });

  const autocomplete = await screen.findAllByTestId("autocomplete-option");

  expect(autocomplete.length).toBe(2);
});

test("resets autocomplete when user clicks outside of it", async () => {
  render(
    <div>
      <Search setTerms={mockSetTerms} areTermsFiltered={false} />
      <button data-testid="outside-element">Click me</button>
    </div>
  );
  const outside = screen.getByTestId("outside-element");
  const searchInput = screen.getByPlaceholderText("Search term here...");
  const value = "a";

  act(() => {
    userEvent.type(searchInput, value);
    fireEvent.click(outside);
  });

  await waitFor(() => {
    expect(screen.queryAllByTestId("autocomplete-option")).toHaveLength(0);
  });
});

test("renders the same 3 suggested terms even if user interacts with the app", async () => {
  render(<Search setTerms={mockSetTerms} areTermsFiltered={false} />);
  const suggestions = screen.getAllByTestId("suggestion-button");
  const suggestionTexts = suggestions.map(
    (suggestion) => suggestion.textContent
  );
  const searchInput = screen.getByPlaceholderText("Search term here...");
  const searchForm = screen.getByRole("form");
  const value = "Actuary";

  act(() => {
    userEvent.type(searchInput, value);
    fireEvent.submit(searchForm);
  });

  const suggestionsAfterAction = await screen.findAllByTestId(
    "suggestion-button"
  );
  const suggestionsAfterActionTexts = suggestionsAfterAction.map(
    (suggestion) => suggestion.textContent
  );

  expect(suggestionTexts).toStrictEqual(suggestionsAfterActionTexts);
});
