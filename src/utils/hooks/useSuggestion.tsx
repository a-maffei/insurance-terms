import { insuranceTerms, TermsType } from "../../data";

export function useSuggestion(
  setAutocomplete: React.Dispatch<React.SetStateAction<TermsType[]>>,
  setTerms: React.Dispatch<React.SetStateAction<TermsType[]>>,
  setQuery: React.Dispatch<React.SetStateAction<string>>
) {
  const indexesUsed: Set<number> = new Set();
  const randomizedTerms: TermsType[] = Array.from({ length: 3 }, () => {
    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * insuranceTerms.length);
    } while (indexesUsed.has(randomIndex));
    indexesUsed.add(randomIndex);
    return insuranceTerms[randomIndex];
  });

  function handleSuggestion(term: TermsType) {
    setQuery("");
    setAutocomplete([]);
    setTerms([term]);
  }

  return { randomizedTerms, handleSuggestion };
}
