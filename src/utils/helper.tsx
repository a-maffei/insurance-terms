import { insuranceTerms, TermsType } from "../data";

export const alphabet: string[] = Array(26)
  .fill(0)
  .map((_, i) => String.fromCharCode(i + 65));

export function findLetterIndex(clickedLetter: string) {
  return alphabet.findIndex((letter: string) => clickedLetter === letter);
}

export function hasTerms(letter: string): boolean {
  return insuranceTerms.some(
    (term: TermsType) => term.name.charAt(0) === letter
  );
}
