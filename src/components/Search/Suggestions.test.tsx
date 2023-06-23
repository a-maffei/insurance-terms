import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Suggestions from "./Suggestions";

afterEach(() => jest.clearAllMocks());

const mockSetAutocomplete = jest.fn();
const mockSetTerms = jest.fn();
const mockSetQuery = jest.fn();

test("renders 3 suggested terms", () => {
  render(
    <Suggestions
      setAutocomplete={mockSetAutocomplete}
      setTerms={mockSetTerms}
      setQuery={mockSetQuery}
    />
  );

  const suggestions = screen.getAllByRole("button");

  expect(suggestions.length).toBe(3);
});
