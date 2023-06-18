import { useState } from "react";
import { insuranceTerms, TermsType } from "../../data";
import { alphabet } from "../helper";

function createTermsMap(terms: TermsType[]): { [key: string]: TermsType[] } {
  const termsMap: { [key: string]: TermsType[] } = {};

  terms.forEach((term: TermsType) => {
    const termInitial: string = term.name.charAt(0).toLowerCase();
    if (termsMap[termInitial]) {
      termsMap[termInitial].push(term);
    } else {
      termsMap[termInitial] = [term];
    }
  });

  return termsMap;
}

function createTermsByLetter(termsMap: { [key: string]: TermsType[] }) {
  const termsByLetter: TermsType[][] = alphabet.reduce(
    (acc: TermsType[][], letter: string) => {
      if (termsMap[letter.toLowerCase()]) {
        acc.push(termsMap[letter.toLowerCase()]);
      }
      return acc;
    },
    []
  );

  return termsByLetter;
}

export function useTermSetup() {
  const [terms, setTerms] = useState<TermsType[]>([...insuranceTerms]);

  /* We create an array of arrays (terms by letter) in order to display the glossary in the children components.
To avoid looping through the entire glossary for each letter, we temporarily create a dictionary data structure so we can use a more time-efficient bracket notation */
  const termsMap = createTermsMap(terms);

  /* The above data structure would be perfectly fine, but since the rest of the app features are built using an "array approach" we'll have to reconvert our dictionary back into an array. */
  const termsByLetter = createTermsByLetter(termsMap);

  const areTermsFiltered: boolean = terms.length < insuranceTerms.length;

  return { terms, setTerms, termsByLetter, areTermsFiltered };
}
