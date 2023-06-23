import {
  fireEvent,
  getAllByRole,
  render,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Alphabet from "./Alphabet";

afterEach(() => jest.clearAllMocks());

const mockRefs = Array(26).fill({
  current: { scrollIntoView: jest.fn() } as any,
});

test("calls scrollintoview on the correct ref when user clicks a letter button", () => {
  render(<Alphabet refsByLetter={mockRefs} />);

  const buttons = screen.getAllByRole("button");
  const secondButton = buttons[1];

  fireEvent.click(secondButton);

  expect(mockRefs[1].current.scrollIntoView).toHaveBeenCalled();
});
